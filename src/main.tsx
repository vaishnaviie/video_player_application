import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DataProvider } from "./context/DataContext.tsx";
import { MiniPlayerProvider } from "./context/MiniPlayerContext.tsx";
import FloatingMiniPlayer from "./components/FloatingMiniPlayer.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <DataProvider>
        <MiniPlayerProvider>
          <div className="relative min-h-screen">
            <App />
            <FloatingMiniPlayer />
          </div>
        </MiniPlayerProvider>
      </DataProvider>
    </Router>
  </StrictMode>
);
