const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdwwayp';

export async function submitToFormspree(fields) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(fields),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.error || 'Unable to send your message right now. Please try again.');
  }

  return payload;
}

export async function submitContactForm({ name, email, subject, message }) {
  return submitToFormspree({
    form_type: 'contact',
    name,
    email,
    _replyto: email,
    subject,
    message,
  });
}

export async function submitSurveyForm(submission) {
  return submitToFormspree({
    form_type: 'survey',
    timestamp: submission.timestamp,
    branch: submission.branch,
    company: submission.company,
    role: submission.role,
    awareness: submission.awareness,
    switchingActivities: submission.switchingActivities,
    safetyMeasures: submission.safetyMeasures,
    disadvantage: submission.disadvantage,
    fullName: submission.fullName,
    rawStatement: submission.rawStatement,
  });
}
