import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

const nav = ['about', 'events', 'projects', 'archived', 'contact'];

export default class extends Route {
  @service intl;

  model() {
    this.intl.setLocale('fr-fr');
    return { nav };
  }
}
