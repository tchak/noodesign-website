export default async function load(fetch) {
  let about,
    events = [],
    upcoming = [],
    archived = [],
    projects = [];

  const content = await fetch({ url: '/content/fr.json' }).json();

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
