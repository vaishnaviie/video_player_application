import { categories } from "../data/data.json";

import type { useData } from "../context/DataContext";

export const useDataa = (categoryTag: string) => {
  let data = null;
  if (categoryTag === "All") {
    data = categories.map((category) => category.contents).flat(2);
  } else {
    data = categories.filter(
      (category: any) => category?.category?.name == categoryTag
    )[0].contents;
  }

  return {
    tagData: data,
  };
};

// Export type for the hook
export type UseDataReturn = ReturnType<typeof useData>;
