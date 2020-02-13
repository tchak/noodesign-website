import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  responsiveImage: service(),

  siteName: 'NOÖDESIGN | MEDIATING MINDS BY TECHNOLOGIES',
  url: 'https://noodesign.org',
  email: 'contact@noodesign.org',
  twitter: '@IgorGalligo',
  author: 'Igor Galligo',
  type: 'website',
  imgSrc: computed(function() {
    return this.responsiveImage.getImageBySize('logo.png', 256);
  })
});
