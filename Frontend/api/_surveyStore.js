const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'critical-switching-survey.json');
const BLOB_PATH = 'critical-switching-survey/submissions.json';

function useBlobStorage() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function readFromBlob() {
  const { list } = require('@vercel/blob');
  const { blobs } = await list({ prefix: 'critical-switching-survey/' });
  const match = blobs.find((blob) => blob.pathname === BLOB_PATH || blob.pathname.endsWith('submissions.json'));

  if (!match) {
    return [];
  }

  const response = await fetch(match.url);

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

async function writeToBlob(submissions) {
  const { put } = require('@vercel/blob');

  await put(BLOB_PATH, JSON.stringify(submissions), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

function readFromFile() {
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }

  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  const data = JSON.parse(raw);
  return Array.isArray(data) ? data : [];
}

function writeToFile(submissions) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf8');
}

async function readSubmissions() {
  if (useBlobStorage()) {
    try {
      return await readFromBlob();
    } catch (error) {
      console.error('Failed to read survey submissions from blob storage.', error);
      return [];
    }
  }

  try {
    return readFromFile();
  } catch (error) {
    console.error('Failed to read survey submissions from file storage.', error);
    return [];
  }
}

async function writeSubmissions(submissions) {
  if (useBlobStorage()) {
    await writeToBlob(submissions);
    return;
  }

  writeToFile(submissions);
}

async function appendSubmission(submission) {
  const submissions = await readSubmissions();
  submissions.push(submission);
  await writeSubmissions(submissions);
  return submissions.length;
}

module.exports = {
  appendSubmission,
  readSubmissions,
};
