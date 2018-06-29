require('dotenv').config();

const fetch = require('node-fetch');

const AIRTABLE_API_URL = 'https://api.airtable.com/v0';
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_API_BASE_ID = process.env.AIRTABLE_API_BASE_ID;

module.exports = function(table, params) {
  const query = Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');
  const url = `${AIRTABLE_API_URL}/${AIRTABLE_API_BASE_ID}/${encodeURIComponent(
    table
  )}?${query}`;

  return fetch(url, {
    headers: {
      authorization: `Bearer ${AIRTABLE_API_KEY}`
    }
  }).then(response => response.json());
};
