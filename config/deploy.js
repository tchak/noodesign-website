'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {
      environment: 'production'
    },
    'revision-data': {
      type: 'git-commit'
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  }

  ENV.cp = {
    destDir: './build'
  };

  ENV.ftp = {
    host: 'ftp.cluster026.hosting.ovh.net',
    username: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
    remoteRoot: '/www',
    exclude: ['assets/fonts/**/*']
  };

  return ENV;
};
