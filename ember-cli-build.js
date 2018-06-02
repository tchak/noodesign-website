'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    prember: {
      urls: [
        '/'
      ]
    },
    emberCliConcat: {
      css: {
        concat: true
      }
    },
    postcssOptions: {
      compile: {
        plugins: [
          require('tailwindcss')('./config/tailwind.js')
        ]
      }
    },
    'ember-font-plex': {
      fonts: [
        'IBM Plex Sans Condensed',
        'IBM Plex Mono'
      ]
    },
    'ember-cli-image-transformer': {
      images: [
        {
          inputFilename: 'public/assets/images/generate/logo.png',
          outputFileName: 'appicon-',
          convertTo: 'png',
          destination: 'assets/icons/',
          sizes: [32, 192, 280, 512]
        }
      ]
    },
    'ember-service-worker': {
      versionStrategy: 'every-build',
      registrationStrategy: 'inline'
    },
    vendorFiles: {
      'jquery.js': null
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
