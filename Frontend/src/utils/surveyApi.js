import { submitSurveyForm } from './formspree';

const API_PATH = '/api/survey';

export async function submitSurveyResponse(submission) {
  await submitSurveyForm(submission);
  return { ok: true };
}

export async function exportSurveyResponses(adminKey) {
  const response = await fetch(`${API_PATH}?export=1`, {
    headers: {
      'X-Admin-Key': adminKey,
    },
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.error || 'Unable to export survey data.');
  }

  return payload.submissions || [];
}

export function downloadSurveyCsv(submissions) {
  const headers = [
    'Timestamp',
    'Branch',
    'Company_Name',
    'Role_Respondent',
    'Awareness_State',
    'Switching_Activities',
    'Safety_Measures',
    'Disadvantage',
    'Full_Name',
    'Full_Statement',
  ];

  const csvRows = [headers.join(',')];

  submissions.forEach((record) => {
    const values = headers.map((header) => {
      let value = '';

      switch (header) {
        case 'Timestamp':
          value = record.timestamp;
          break;
        case 'Branch':
          value = record.branch;
          break;
        case 'Company_Name':
          value = record.company;
          break;
        case 'Role_Respondent':
          value = record.role;
          break;
        case 'Awareness_State':
          value = record.awareness;
          break;
        case 'Switching_Activities':
          value = record.switchingActivities;
          break;
        case 'Safety_Measures':
          value = record.safetyMeasures;
          break;
        case 'Disadvantage':
          value = record.disadvantage;
          break;
        case 'Full_Name':
          value = record.fullName;
          break;
        case 'Full_Statement':
          value = record.rawStatement;
          break;
        default:
          break;
      }

      if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
        return `"${value.replace(/"/g, '""')}"`;
      }

      return value ?? '';
    });

    csvRows.push(values.join(','));
  });

  const blob = new Blob([`\uFEFF${csvRows.join('\n')}`], {
    type: 'text/csv;charset=utf-8;',
  });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.setAttribute(
    'download',
    `critical_switching_survey_export_${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
