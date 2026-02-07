const VideoCardSkeleton = () => (
  <div className="flex flex-col gap-2 p-2">
    {/* 1. Thumbnail Placeholder */}
    <div className="shimmer-wrapper aspect-video w-full">
      <div className="shimmer-effect"></div>
    </div>

    {/* 2. Title Placeholder */}
    <div className="shimmer-wrapper h-4 w-3/4 mt-2">
      <div className="shimmer-effect"></div>
    </div>

    {/* 3. Subtext Placeholder */}
    <div className="shimmer-wrapper h-3 w-1/2">
      <div className="shimmer-effect"></div>
    </div>
  </div>
);

export default VideoCardSkeleton;
