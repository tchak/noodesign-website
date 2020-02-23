#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function generateContent() {
  const contentDir = path.join(__dirname, '../public/content');
  const modelsDir = path.join(__dirname, '../app/models');

  const json = fs.readFileSync(path.join(contentDir, 'fr-fr.json'));
  fs.writeFileSync(
    path.join(modelsDir, 'content.js'),
    `export const content = ${json};`
  );
}

generateContent();
