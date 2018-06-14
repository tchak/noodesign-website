#!/usr/bin/env node

/* eslint no-console: 0 */
const base = require('./base');
const { formatForApp } = require('./format');
const fs = require('fs');
const path = require('path');

function toLocale(locale) {
  locale = locale.toLowerCase();
  return `${locale}-${locale}`;
}

function downloadContent(locale) {
  base(`Content ${locale}`)
    .select({
      view: 'table',
      filterByFormula: '{Published} = TRUE()'
    })
    .eachPage(
      function page(records) {
        let content = records.map(({ fields }) => fields).map(formatForApp);

        console.log(
          `Downloaded ${records.length} records in "${locale}" locale.`
        );

        const dir = path.join(__dirname, '../public/content');
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
        fs.writeFileSync(
          path.join(dir, `${toLocale(locale)}.json`),
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
}

downloadContent('Fr');
downloadContent('En');
