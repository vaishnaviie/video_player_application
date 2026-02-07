import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categories } from "../data/data.json";
import HeaderWrapper from "../components/HeaderWrapper";
import { useMiniPlayer } from "../context/MiniPlayerContext";
import { useDataa } from "../hook/useData";
import VideoCard from "../components/VideoCard";
import type { Content } from "../type/type";
import { getCategoryForSlug } from "../util/util";

const VideoPlayer = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { setActiveVideo, setIsFloating, activeVideo } = useMiniPlayer();

  const videoCategory = getCategoryForSlug(categories, videoId ?? "");
  console.log(videoCategory);
  const { tagData } = useDataa(videoCategory);
  const currentVideo = tagData.find((v: Content) => v.slug === videoId);

  useEffect(() => {
    if (currentVideo) {
      if (!activeVideo || activeVideo.slug !== currentVideo.slug) {
        setActiveVideo(currentVideo);
      }
      setIsFloating(false);
    } else {
      navigate("/");
    }
  }, [
    currentVideo,
    videoId,
    setActiveVideo,
    setIsFloating,
    activeVideo,
    navigate,
  ]);

  return (
    <HeaderWrapper>
      <div className=" lg:flex lg:h-screen bg-[#0f0f0f]">
        <div className="grow">
          <div className="relative h-[250px] md:h-[350px] lg:h-[410px] 2xl:h-[90vh] bg-transparent"></div>
        </div>

        <ol className="flex flex-col lg:w-[35%] xl:w-[35%] md:grid md:grid-cols-2 xl:grid xl:grid-cols-2 2xl:w-[22%] lg:overflow-y-auto px-2 gap-3 hide-scrollbar ">
          {tagData.map((category: Content) => (
            <VideoCard
              key={category?.slug}
              thumbnailUrl={category?.thumbnailUrl}
              slug={category?.slug}
              title={category?.title}
              isTrue={true}
            />
          ))}
        </ol>
      </div>
    </HeaderWrapper>
  );
};

export default VideoPlayer;
