import { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import Header from "../components/Header";
import CategoryTags from "../components/CategoryTags";
import MobileView from "../components/MobileView";
import VideoListing from "../components/VideoListing";
import HeaderWrapper from "../components/HeaderWrapper";

const Home = () => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    tagData,
    categoryTag,
    menuRef,
    data,
    setData,
  } = useData();

  useEffect(() => {
    setData(tagData);
  }, [categoryTag]);

  return (
    <HeaderWrapper>
      <div className="relative">
        <MobileView />
        <VideoListing />
      </div>
    </HeaderWrapper>
  );
};

export default Home;
