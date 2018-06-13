export default function slugify(block) {
  if (block.label) {
    const label = block.label.toUpperCase();
    const slug = label
      .replace(/É/g, 'E')
      .replace(/\s|\//g, '-')
      .toLowerCase();

    const color = colors.shift();
    return { ...block, label, slug, color };
  }
  return block;
}

const colors = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];
