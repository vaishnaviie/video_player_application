import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BouncingDinoLoader from "../Loader/BouncingDinoLoader";

interface VideoCardProps {
  thumbnailUrl: string;
  slug: string;
  title: string;
}

const VideoCard = ({ thumbnailUrl, slug, title, isTrue }: VideoCardProps) => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate(`/video/${slug}`);
      setIsClicked(false);
    }, 600);
  };

  return (
    <div
      className={`mb-3 relative group overflow-hidden rounded-md cursor-pointer  ${isTrue && "lg:h-35"} `}
      onClick={handleCardClick}
    >
      <div className="relative ">
        <img
          className={`  ${isTrue ? "lg:h-25" : "lg:h-[250px]"} transition-all duration-500 w-[90%] h-[150px] md:h-[200px]  mx-4  rounded-md object-cover object-[50%_20%]  ${
            isClicked
              ? "scale-110 blur-sm brightness-50"
              : "group-hover:scale-105"
          }`}
          src={thumbnailUrl}
          alt={title}
        />

        {isClicked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <BouncingDinoLoader size={60} />
          </div>
        )}
      </div>

      <div className="flex gap-2 items-center p-2 mx-4">
        <img
          className={`h-8 w-10 md:w-8 ${isTrue ? "md:w-23 lg:w-12" : "md:w-8 "} rounded-full object-cover `}
          src={thumbnailUrl}
          alt="avatar"
        />
        <p
          className={`text-white ${isTrue ? "font-normal text-sm" : "font-bold"}  line-clamp-1`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
