import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { schedule, later } from '@ember/runloop';
import QueryParams from 'ember-parachute';

const queryParams = new QueryParams({
  targetId: {
    as: 'target',
    defaultValue: null,
    refresh: true,
    replace: true
  }
});

export default Controller.extend(queryParams.Mixin, {
  scroller: service(),
  fastboot: service(),
  headData: service(),

  setup({ queryParams: { targetId: target } }) {
    this.scrollTo(target);
  },

  queryParamsDidChange({ shouldRefresh, queryParams: { targetId: target } }) {
    if (shouldRefresh) {
      this.scrollTo(target);
    }
  },

  reset(_, isExiting) {
    if (isExiting) {
      this.resetQueryParams();
    }
  },

  scrollTo(target) {
    if (target && !this.fastboot.isFastBoot) {
      const options = {
        padding: { y: target === 'top' ? 120 : 100, x: 0 }
      };
      let element = document.getElementById(target);
      if (element) {
        this.scrollToElement(element, options);
      } else {
        later(300, () => {
          schedule('afterRender', () => {
            element = document.getElementById(target);
            this.scrollToElement(element, options);
          });
        });
      }
    }
  },

  scrollToElement(element, options) {
    this.scroller.scrollToElement(element, options);
    this.resetQueryParams();
    this.headData.set('isExpanded', false);
  }
});
