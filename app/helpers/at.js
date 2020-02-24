import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class extends Helper {
  @service intl;

  compute([location]) {
    if (location.match(/Centre/)) {
      return this.intl.t('_at');
    }
    return this.intl.t('at');
  }
}
