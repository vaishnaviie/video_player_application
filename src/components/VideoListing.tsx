import { useData } from "../context/DataContext";
import type { Content } from "../type/type";
import VideoCard from "./VideoCard";

const VideoListing = () => {
  const { data } = useData();

  return (
    <ol className=" flex flex-col md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:grid-cols-4 pt-2   ">
      {data.map((category: Content) => (
        <VideoCard
          key={category?.slug}
          thumbnailUrl={category?.thumbnailUrl}
          slug={category?.slug}
          title={category?.title}
          isTrue={false}
        />
      ))}
    </ol>
  );
};

export default VideoListing;
