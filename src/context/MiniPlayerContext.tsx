import { createContext, useContext, useState } from "react";
import type { Content, MiniPlayerContextType } from "../type/type";

const MiniPlayerContext = createContext<MiniPlayerContextType | undefined>(
  undefined
);

export const MiniPlayerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeVideo, setActiveVideo] = useState<Content | null>(null);
  const [isFloating, setIsFloating] = useState<boolean>(false);

  return (
    <MiniPlayerContext.Provider
      value={{ activeVideo, setActiveVideo, isFloating, setIsFloating }}
    >
      {children}
    </MiniPlayerContext.Provider>
  );
};

export const useMiniPlayer = () => {
  const context = useContext(MiniPlayerContext);
  if (!context) {
    throw new Error("useMiniPlayer must be used within a MiniPlayerProvider");
  }
  return context;
};
