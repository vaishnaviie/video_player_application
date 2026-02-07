// Use 'import type' for everything that is just a type/interface
// import type { ReactNode, RefObject, Dispatch, SetStateAction } from "react";

import type { CategoryItem } from "../type/type";

// export function getCategoryForSlug(
//   data: CategoryItem[],

//   slug: string | null | undefined
// ) {
//   if (!slug) return "All";
//   const cleanSlug = slug.split("?")[0];

//   for (const category of data) {
//     for (const content of category.contents) {
//       if (content.slug.split("?")[0] === cleanSlug) {
//         return category.category.name;
//       }
//     }
//   }
//   return null;
// }

// Force the return type to be ONLY 'string'
export function getCategoryForSlug(
  data: CategoryItem[],
  slug: string | null | undefined
): string {
  // <--- Ensure this is just 'string'
  if (!slug) return "All";
  const cleanSlug = slug.split("?")[0];

  for (const category of data) {
    for (const content of category.contents) {
      if (content.slug.split("?")[0] === cleanSlug) {
        return category.category.name;
      }
    }
  }
  return "All"; // <--- Ensure this is a string, NOT null
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
