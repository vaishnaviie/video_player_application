export function getCategoryForSlug(data, slug) {
  const cleanSlug = slug.split("?")[0];

  for (const category of data) {
    for (const content of category.contents) {
      if (content.slug.split("?")[0] === cleanSlug) {
        return category.category.name;
      }
    }
  }
  return null;
}
