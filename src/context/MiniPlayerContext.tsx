import { createContext, useContext, useState } from "react";

const MiniPlayerContext = createContext<any>(null);

export const MiniPlayerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isFloating, setIsFloating] = useState(false);

  return (
    <MiniPlayerContext.Provider
      value={{ activeVideo, setActiveVideo, isFloating, setIsFloating }}
    >
      {children}
    </MiniPlayerContext.Provider>
  );
};

export const useMiniPlayer = () => useContext(MiniPlayerContext);
