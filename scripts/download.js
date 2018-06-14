#!/usr/bin/env node

/* eslint no-console: 0 */
const base = require('./base');
const { formatForApp } = require('./format');
const fs = require('fs');
const path = require('path');

base('Content Fr')
  .select({
    view: 'table',
    filterByFormula: '{Published} = TRUE()'
  })
  .eachPage(
    function page(records) {
      let content = records.map(({ fields }) => fields).map(formatForApp);

      console.log('Downloaded ' + records.length + ' records in "Fr" locale.');

      const dir = path.join(__dirname, '../public/content');
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      fs.writeFileSync(
        path.join(dir, 'fr.json'),
        JSON.stringify(content, null, 2)
      );
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
