import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import VideoPlayer from "./pages/VideoPlayer";
import FloatingMiniPlayer from "./components/FloatingMiniPlayer";

function App() {
  return (
    <div className="bg-background box-border min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
      </Routes>
      <FloatingMiniPlayer />
    </div>
  );
}

export default App;
