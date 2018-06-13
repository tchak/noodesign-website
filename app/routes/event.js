import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import load from '../models/load';

export default Route.extend({
  adapter: service(),
  async model({ id }) {
    const { events } = await load(this.adapter.fetch);
    return events.find(({ slug }) => slug === id);
  }
});
