import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class extends Route {
  @service data;

  async model({ id }) {
    const { events } = await this.data.fetch();
    return events.find(({ slug }) => slug === id);
  }
}
