import Route from '@ember/routing/route';
import content from '../models/content';

export default Route.extend({
  model() {
    let { nav, about, projects, events } = content.fr;
    return {
      nav,
      about,
      projects,
      archived: events.filter(({ archived }) => archived),
      events: events.filter(({ archived }) => !archived)
    };
  }
});
