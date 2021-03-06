'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const crawl = require('prember-crawler');

module.exports = function(defaults) {
  const pluginsToBlacklist = process.env.BUNDLESIZE
    ? ['prember', 'ember-cli-image-transformer']
    : [];

  let app = new EmberApp(defaults, {
    prember: {
      async urls({ visit }) {
        let urls = await crawl({ visit });
        return urls.filter(url => !url.match(/^\/\?target=/));
      }
    },
    postcssOptions: {
      compile: {
        plugins: [require('tailwindcss')('./config/tailwind.js')]
      }
    },
    'ember-font-plex': {
      fonts: ['IBM Plex Sans Condensed', 'IBM Plex Mono']
    },
    'ember-cli-image-transformer': {
      images: [
        {
          inputFilename: 'public/assets/images/generate/logo.png',
          outputFileName: 'appicon-',
          convertTo: 'png',
          sizes: [32, 192, 280, 512]
        }
      ]
    },
    'ember-composable-helpers': {
      only: ['toggle']
    },
    addons: {
      blacklist: pluginsToBlacklist
    }
  });

  return app.toTree();
};
