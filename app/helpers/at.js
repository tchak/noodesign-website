import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import { observer } from '@ember/object';

export default Helper.extend({
  intl: service(),

  compute([location]) {
    if (location.match(/Centre/)) {
      return this.intl.t('_at');
    }
    return this.intl.t('at');
  },

  // eslint-disable-next-line ember/no-observers
  currentURLObserver: observer('intl.locale', function() {
    this.recompute();
  })
});
