'use strict';

module.exports = {
  javascript: {
    pattern: 'assets/*.js',
    limit: '200KB',
    compression: 'gzip'
  },
  css: {
    pattern: 'assets/*.css',
    limit: '20KB',
    compression: 'gzip'
  },
  'javascript [brotli]': {
    pattern: 'assets/*.js',
    limit: '170KB',
    compression: 'brotli'
  },
  'css [brotli]': {
    pattern: 'assets/*.css',
    limit: '10KB',
    compression: 'brotli'
  }
};
