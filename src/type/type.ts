import type { ReactNode, RefObject, Dispatch, SetStateAction } from "react";

export interface Content {
  title: string;
  mediaUrl: string;
  mediaType: string;
  thumbnailUrl: string;
  slug: string;
}

export interface CategoryInfo {
  slug: string;
  name: string;
  iconUrl: string;
}

export interface CategoryItem {
  category: CategoryInfo;
  contents: Content[];
}

export interface DataContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  categoryTag: string;
  setCategoryTag: Dispatch<SetStateAction<string>>;
  categories: CategoryItem[];
  tagData: Content[];
  menuRef: RefObject<HTMLDivElement | null>;
  data: Content[];
  setData: Dispatch<SetStateAction<Content[]>>;
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}

export interface HeaderWrapperProps {
  children: ReactNode;
}

export interface VideoCardProps {
  thumbnailUrl: string;
  slug: string;
  title: string;
  isTrue: boolean;
}

export interface DataProviderProps {
  children: ReactNode;
}

export interface MiniPlayerContextType {
  activeVideo: Content | null;
  setActiveVideo: Dispatch<SetStateAction<Content | null>>;
  isFloating: boolean;
  setIsFloating: Dispatch<SetStateAction<boolean>>;
}
export interface ShowSuggestionsProps {
  filteredData: Content[];
}
