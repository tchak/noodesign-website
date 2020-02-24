const {
  mapKeys,
  lowerFirst,
  compact,
  capitalize,
  isEmpty,
  range
} = require('lodash');

function formatForAPI({ urls, ...block }) {
  block = mapKeys(block, (_, key) => capitalize(key));

  if (!isEmpty(urls)) {
    let [Link, Link2] = urls;
    block.Link = Link;
    if (Link2) {
      block.Link2 = Link2;
    }
  }

  block.Published = true;
  block.Archived = block.Archived || false;

  block.Type = capitalize(block.Type);

  return block;
}

function formatForApp({ Link, Link2, ...block }) {
  block = mapKeys(block, (_, key) => lowerFirst(key));
  let urls = compact([Link, Link2]);

  Object.assign(block, {
    urls,
    archived: block.archived || false,
    type: lowerFirst(block.type),
    partners: split(block.partners),
    guests: split(block.guests),
    description: split(block.description)
  });

  return slugify(block);
}

module.exports = {
  formatForAPI,
  formatForApp
};

function split(text) {
  return compact((text || '').split('\n'));
}

function slugify(block) {
  if (block.type === 'event' && block.label) {
    const label = block.label.toUpperCase();
    const slug = label
      .replace(/É/g, 'E')
      .replace(/\s|\//g, '-')
      .toLowerCase();
    const isCurrent = slug === 'colloque-2019';

    const color = colors[index];
    if (index < 6) {
      index++;
    } else {
      index = 0;
    }

    return { ...block, label, slug, color, isCurrent };
  }
  return block;
}

let index = 0;
const colors = range(1, 8);
