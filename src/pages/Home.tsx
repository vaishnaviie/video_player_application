import { useEffect } from "react";
import { useData } from "../context/DataContext";
import MobileView from "../components/MobileView";
import VideoListing from "../components/VideoListing";
import HeaderWrapper from "../components/HeaderWrapper";

const Home = () => {
  const { tagData, categoryTag, setData } = useData();

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
