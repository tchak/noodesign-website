import Route from '@ember/routing/route';
import load from '../models/load';

export default Route.extend({
  model() {
    return load();
  }
});
