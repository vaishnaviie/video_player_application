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

export const highlightText = (text: string, search: string) => {
  if (!search || !text) return text;
  const regex = new RegExp(`(${search})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="text-green-500 font-bold">
        {part}
      </span>
    ) : (
      part
    )
  );
};
