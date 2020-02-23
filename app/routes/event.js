import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  data: service(),

  async model({ id }) {
    const { events } = await this.data.fetch();
    return events.find(({ slug }) => slug === id);
  }
});
