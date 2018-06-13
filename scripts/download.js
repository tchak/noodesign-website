#!/usr/bin/env node

/* eslint no-console: 0 */
const base = require('./base');
const { formatForApp } = require('./format');
const fs = require('fs');
const path = require('path');

base('Content Fr')
  .select({
    view: 'table'
  })
  .eachPage(
    function page(records) {
      let content = records.map(({ fields }) => fields).map(formatForApp);

      console.log('Downloaded ' + records.length + ' records in "Fr" locale.');

      fs.writeFileSync(
        path.join(__dirname, '../public/content/fr.json'),
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
