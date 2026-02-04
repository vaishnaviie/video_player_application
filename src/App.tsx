import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoPlayer from "./pages/VideoPlayer";

function App() {
  return (
    <Router>
      <div className="bg-background box-border min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoId" element={<VideoPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
