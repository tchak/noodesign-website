import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  data: service(),

  model() {
    return this.data.fetch();
  }
});
