import Route from '@ember/routing/route';
import content from '../models/content';

export default Route.extend({
  model() {
    return content.fr;
  }
});
