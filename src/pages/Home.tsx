import { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import MobileView from "../components/MobileView";
import VideoListing from "../components/VideoListing";
import HeaderWrapper from "../components/HeaderWrapper";
const Home = () => {
  const { tagData, categoryTag, setData } = useData();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setData(tagData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [categoryTag]);

  return (
    <HeaderWrapper>
      <div className="relative">
        <MobileView />
        <VideoListing isLoading={isLoading} />
      </div>
    </HeaderWrapper>
  );
};

export default Home;
