import Route from '@ember/routing/route';
import content from '../models/content';

export default Route.extend({
  model({ id }) {
    return content.fr.events.find(({ slug }) => slug === id);
  }
});
