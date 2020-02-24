import Service, { inject as service } from '@ember/service';

export default class extends Service {
  @service responsiveImage;

  siteName = 'noödesign | mediating minds by technologies';
  url = 'https://noodesign.org';
  email = 'contact@noodesign.org';
  twitter = '@IgorGalligo';
  author = 'Igor Galligo';
  type = 'website';

  get imgSrc() {
    return this.responsiveImage.getImageBySize('logo.png', 256);
  }
}
