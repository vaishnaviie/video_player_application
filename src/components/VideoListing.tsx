import { useData } from "../context/DataContext";
import type { Content } from "../type/type";
import VideoCard from "./VideoCard";
import VideoCardSkeleton from "./VideoCardSkeleton";

interface VideoListingProps {
  isLoading?: boolean;
}

const VideoListing = ({ isLoading = false }: VideoListingProps) => {
  const { data } = useData();

  if (isLoading) {
    return (
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:grid-cols-4 pt-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <VideoCardSkeleton key={index} />
        ))}
      </div>
    );
  }
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
