import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import load from '../models/load';

export default Route.extend({
  adapter: service(),
  intl: service(),

  model() {
    const [locale] = this.intl.locale;
    return load(this.adapter.fetch, locale);
  }
});
