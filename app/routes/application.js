import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

const nav = ['about', 'events', 'projects', 'archived', 'contact'];

export default Route.extend({
  intl: service(),

  model() {
    this.intl.setLocale('fr-fr');
    return { nav };
  },

  title() {
    return 'Noödesign';
  }
});
