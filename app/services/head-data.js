import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  responsiveImage: service(),

  siteName: 'Noödesign',
  url: 'https://noodesign.org',
  twitter: '@IgorGalligo',
  author: 'Igor Galligo',
  type: 'website',
  imgSrc: computed(function() {
    return this.responsiveImage.getImageBySize('logo.png', 256);
  })
});
