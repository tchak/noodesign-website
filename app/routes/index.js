import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import load from '../models/load';

export default Route.extend({
  adapter: service(),
  model() {
    return load(this.adapter.fetch);
  }
});
