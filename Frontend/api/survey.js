const { appendSubmission, readSubmissions } = require('./_surveyStore');

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key');
}

function validateSubmission(body) {
  if (!body || typeof body !== 'object') {
    return 'Invalid submission payload.';
  }

  if (!body.branch || !String(body.branch).trim()) {
    return 'Please select a branch before submitting.';
  }

  if (!body.rawStatement || !String(body.rawStatement).trim()) {
    return 'A completed statement is required.';
  }

  return null;
}

module.exports = async function surveyHandler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method === 'GET' && req.query.export === '1') {
    const adminKey = req.headers['x-admin-key'];
    const expectedKey = process.env.SURVEY_ADMIN_KEY;

    if (!expectedKey || adminKey !== expectedKey) {
      return res.status(401).json({ error: 'Unauthorized export request.' });
    }

    const submissions = await readSubmissions();
    return res.status(200).json({ submissions, total: submissions.length });
  }

  if (req.method === 'POST') {
    const validationError = validateSubmission(req.body);

    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const submission = {
      timestamp: req.body.timestamp || new Date().toISOString(),
      branch: String(req.body.branch).trim(),
      company: String(req.body.company || '').trim(),
      role: String(req.body.role || '').trim(),
      awareness: String(req.body.awareness || '').trim(),
      switchingActivities: String(req.body.switchingActivities || '').trim(),
      safetyMeasures: String(req.body.safetyMeasures || '').trim(),
      disadvantage: String(req.body.disadvantage || '').trim(),
      fullName: String(req.body.fullName || '').trim(),
      rawStatement: String(req.body.rawStatement).trim(),
    };

    const total = await appendSubmission(submission);
    return res.status(201).json({ ok: true, total });
  }

  return res.status(405).json({ error: 'Method not allowed.' });
};
