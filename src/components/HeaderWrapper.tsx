import { ReactNode } from "react";
import Header from "./Header";
import CategoryTags from "./CategoryTags";

interface HeaderWrapperProps {
  children: ReactNode;
  showCategories?: boolean;
  showSearch?: boolean;
  showProfile?: boolean;
  sticky?: boolean;
  className?: string;
}

const HeaderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="sticky top-0  bg-background z-10">
        <Header />
        <CategoryTags />
      </div>

      {children}
    </>
  );
};

export default HeaderWrapper;
