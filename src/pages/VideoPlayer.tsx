import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categories } from "../data/data.json";

const VideoPlayer = () => {
  const [data, setdata] = useState(categories[0].contents);
  const { videoId } = useParams();
  const navigate = useNavigate();

  console.log(videoId);

  let video = null;

  const foundVideo = data.find((v: any) => v.slug == videoId);
  if (foundVideo) {
    video = foundVideo;
  } else {
    navigate("/");
  }

  return (
    <div className="pt-12 lg:flex lg:h-screen ">
      <div className="grow ">
        <iframe
          className=" w-[100%] h-[200px] md:h-[350px] lg:h-[410px] 2xl:h-[90%]  "
          src={`${video?.mediaUrl}?autoplay=1&mute=1&rel=0`}
          allow=" autoplay"
        ></iframe>
        <div className="flex gap-2 items-center p-2">
          <img
            className=" h-8 w-8 rounded-full object-cover"
            src={video?.thumbnailUrl}
            alt={video?.thumbnailUrl}
          />
          <p className=" text-text-white font-bold ">{video?.title}</p>
        </div>
      </div>

      <ol className=" flex flex-col lg:w-[25%] xl:w-[35%] xl:grid xl:grid-cols-2 2xl:w-[22%] lg:overflow-y-auto  ">
        {/* <p className="text-text-white font-semibold pb-4">
          Suggested Videos from same category
        </p> */}
        {data.map((category) => (
          <div className="mb-3 " key={category?.slug}>
            <img
              className=" w-[90%] h-[150px] md:h-[350px] lg:h-[150px] mx-4 rounded-md object-cover object-[50%_20%]"
              src={category?.thumbnailUrl}
              alt={category?.thumbnailUrl}
              onClick={() => {
                navigate(`/video/${category?.slug}`);
                window.scrollTo(0, 0);
              }}
            />

            <div className="flex gap-2 items-center p-2">
              <img
                className=" h-8 w-8 rounded-full object-cover"
                src={category.thumbnailUrl}
                alt={category.thumbnailUrl}
              />
              <p className=" text-text-white font-bold ">{category.title}</p>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default VideoPlayer;
