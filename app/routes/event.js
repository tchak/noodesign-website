import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import load from '../models/load';

export default Route.extend({
  adapter: service(),
  intl: service(),

  async model({ id }) {
    const [locale] = this.intl.locale;
    const { events } = await load(this.adapter.fetch, locale);
    const event = events.find(({ slug }) => slug === id);
    if (event.slug === 'colloque-2019') {
      event.isCurrent = true;
    }
    return event;
  }
});
