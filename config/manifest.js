'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    name: 'Noodesign',
    short_name: 'Noodesign',
    description: '',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/assets/icons/appicon-32.png',
        sizes: `32x32`,
        targets: ['favicon']
      },
      ...[192, 280, 512].map(size => ({
        src: `/assets/icons/appicon-${size}.png`,
        sizes: `${size}x${size}`
      }))
    ],
    ms: {
      tileColor: '#fff'
    }
  };
};
