#!/usr/bin/env node

/* eslint no-console: 0 */
const base = require('./base');
const { formatForAPI } = require('./format');
const content = require('../public/content/fr.json');

content.map(formatForAPI).forEach(function(block) {
  base('Content Fr').create(block, function(err, record) {
    if (err) {
      console.error(err);
    } else {
      console.log(record.getId());
    }
  });
});
