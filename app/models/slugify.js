export default function slugify(event) {
  let label = event.slug;
  let slug = event.slug
    .replace(/É/g, 'E')
    .replace(/\s|\//g, '-')
    .toLowerCase();
  return { ...event, label, slug };
}
