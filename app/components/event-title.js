import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'h2',
  scroller: service(),
  didInsertElement() {
    this.scroller.scrollToElement(this.element, { padding: { y: 200, x: 0 } });
  }
});
