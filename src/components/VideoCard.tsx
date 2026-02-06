import { useNavigate } from "react-router-dom";
interface VideoCardProps {
  thumbnailUrl: string;
  slug: string;
  title: string;
}

const VideoCard = ({ thumbnailUrl, slug, title }: VideoCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="mb-3" key={slug}>
      <img
        className=" w-[90%] h-[150px] md:h-[200px] lg:h-[250px] mx-4  rounded-md object-cover object-[50%_20%]"
        src={thumbnailUrl}
        alt={thumbnailUrl}
        onClick={() => navigate(`/video/${slug}`)}
      />

      <div className="flex gap-2 items-center p-2 mx-4">
        <img
          className=" h-8 w-8 rounded-full object-cover"
          src={thumbnailUrl}
          alt={thumbnailUrl}
        />
        <p className=" text-text-white font-bold ">{title}</p>
      </div>
    </div>
  );
};

export default VideoCard;
