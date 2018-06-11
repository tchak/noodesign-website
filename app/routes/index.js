import Route from '@ember/routing/route';
import content from '../models/content';
import slugify from '../models/slugify';

export default Route.extend({
  model() {
    let { nav, about, projects, events } = content.fr;
    events = events.map(slugify);

    return {
      nav,
      about,
      projects,
      archived: events.filter(({ archived }) => archived),
      events: events.filter(({ archived }) => !archived)
    };
  }
});
