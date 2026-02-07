import { useNavigate, useLocation } from "react-router-dom";
import { useMiniPlayer } from "../context/MiniPlayerContext";
import MiniPlayerIcon from "../svg/MiniPlayerIcon";
import Maximize from "../svg/Maximize";
import Close from "../svg/Close";

const FloatingMiniPlayer = () => {
  const { activeVideo, isFloating, setIsFloating, setActiveVideo } =
    useMiniPlayer();
  const navigate = useNavigate();
  const location = useLocation();

  if (!activeVideo) return null;

  const isVideoPage = location.pathname.startsWith("/video/");
  if (!isVideoPage && !isFloating) return null;

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFloating(false);
    navigate(`/video/${activeVideo.slug}`);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFloating(false);
    setActiveVideo(null);
  };

  return (
    <div
      className={`fixed transition-all duration-500 ease-in-out overflow-hidden bg-[#0f0f0f] shadow-2xl border-2 border-blue-700 
      ${
        isFloating
          ? "bottom-4 right-4 w-[240px] md:w-[360px] rounded-xl border border-white/10"
          : "top-24  md:h-[100%] left-0 w-full lg:w-[65%] xl:w-[65%] 2xl:w-[78%] h-auto shadow-none border-none "
      }`}
    >
      <div className="relative aspect-video w-full group bg-black border  ">
        <iframe
          key={activeVideo.slug}
          className="w-full h-full pointer-events-auto "
          src={`${activeVideo.mediaUrl}?autoplay=1&mute=1&rel=0&controls=1`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title="Persistent Video Player"
        />

        {!isFloating && (
          <div
            className="absolute right-3 top-[10%] z-[70] cursor-pointer bg-black/40 p-1.5 rounded-md hover:scale-110 transition-transform hover:bg-black border border-white/10 "
            onClick={() => {
              setIsFloating(true);
              navigate("/");
            }}
          >
            <MiniPlayerIcon />
          </div>
        )}

        {isFloating && (
          <div className="absolute top-2 right-2 flex gap-2 pointer-events-none ">
            <button
              onClick={handleMaximize}
              className="p-1.5 bg-black/70 hover:bg-black text-white rounded-full transition-colors pointer-events-auto shadow-lg"
            >
              <Maximize />
            </button>
            <button
              onClick={handleClose}
              className="p-1.5 bg-black/70 hover:bg-black text-white rounded-full transition-colors pointer-events-auto shadow-lg"
            >
              <Close />
            </button>
          </div>
        )}
      </div>

      <div
        className={`flex items-center gap-3  transition-all ${isFloating ? "border-t border-white/5" : " p-4 md:p-2 md:px-4 "}  `}
      >
        {!isFloating && (
          <img
            src={activeVideo.thumbnailUrl}
            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-white/10 shadow-md shrink-0 "
            alt="Channel Logo"
          />
        )}

        <div className="flex-1 overflow-hidden  ">
          <h1
            className={`text-white font-bold truncate ${isFloating ? "text-xs" : "text-base"}`}
          >
            {activeVideo.title}
          </h1>

          {!isFloating && (
            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.1em] mt-0.5  font-semibold">
              Now Playing
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingMiniPlayer;
