import Header from "./Header";
import CategoryTags from "./CategoryTags";
import type { HeaderWrapperProps } from "../type/type";

const HeaderWrapper = ({ children }: HeaderWrapperProps) => {
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
