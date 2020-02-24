import Service from '@ember/service';

import { content } from '../models/content';

export default class extends Service {
  fetch() {
    return contentGroupByType();
  }
}

async function contentGroupByType() {
  let about,
    events = [],
    upcoming = [],
    archived = [],
    projects = [];

  for (let block of content) {
    switch (block.type) {
      case 'event':
        events.push(block);
        if (block.archived) {
          archived.push(block);
        } else {
          upcoming.push(block);
        }
        break;
      case 'project':
        projects.push(block);
        break;
      default:
        about = block;
    }
  }

  return { about, projects, events, upcoming, archived };
}
