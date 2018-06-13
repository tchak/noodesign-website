const { mapKeys, lowerFirst, compact, capitalize, isEmpty } = require('lodash');

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

function formatForApp({ link, link2, ...block }) {
  block = mapKeys(block, (_, key) => lowerFirst(key));
  delete block.link;
  delete block.link2;
  let urls = compact([link, link2]);

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

    const color = colors.shift();
    return { ...block, label, slug, color };
  }
  return block;
}

const colors = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];
