import Route from '@ember/routing/route';
import content from '../models/content';
import slugify from '../models/slugify';

export default Route.extend({
  model({ id }) {
    let { events } = content.fr;
    events = events.map(slugify);

    return events.find(({ slug }) => slug === id);
  }
});
