import { useDataa } from "./useData";

export interface TagDataItem {
  title: string;
  mediaUrl: string;
  mediaType: string;
  thumbnailUrl: string;
  slug: string;
  id?: number;
}

export const useSearch = (searchInput: string) => {
  const { tagData } = useDataa("All");
  // console.log("tagData", tagData);
  const filteredData = tagData.filter((data: TagDataItem) =>
    data.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  // console.log("filteredData in hook", filteredData);

  return { filteredData };
};
