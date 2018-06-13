require('dotenv').config();
const Airtable = require('airtable');
Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY
});
module.exports = Airtable.base(process.env.AIRTABLE_API_BASE_ID);
