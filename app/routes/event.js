import Route from '@ember/routing/route';
import load from '../models/load';

export default Route.extend({
  async model({ id }) {
    const { events } = await load();
    return events.find(({ slug }) => slug === id);
  }
});
