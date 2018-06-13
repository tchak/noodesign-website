import content from './content';
import slugify from './slugify';

export default async function load() {
  let about,
    events = [],
    upcoming = [],
    archived = [],
    projects = [];

  for (let block of content.content.map(slugify)) {
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
