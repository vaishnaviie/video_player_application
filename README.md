# 🎬 AI Video Hub

A modern, high-performance video streaming platform built with **React**, **TypeScript** and **Tailwind CSS**. This project focuses on smooth animations and a seamless mobile-first user experience.

---

## ✨ Key Features

- **⚡ Instant Search Suggestions**: Real-time filtering with **keyword highlighting** for faster content discovery.
- **📱 Fluid Mobile Navigation**: A custom-built, animated slide-in sidebar with backdrop blur and escape-key support.
- **🏷️ Dynamic Categorization**: Advanced filtering system using a centralized data context and custom hooks.
- **🛠️ Strict Type Safety**: Full TypeScript implementation with custom interfaces for videos, categories, and context providers.
- **🚀 Optimized UX**: Persistent "Mini Player" state, sticky headers, and hidden scrollbars for a clean, app-like feel.
- **✨ Custom Shimmer Loading**: Deliberate skeleton loaders (Shimmer effect) to eliminate layout shift and improve perceived performance.

---

## 🚀 Tech Stack

- **Framework:** [React.js](https://react.dev) (Vite)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **State Management:** React Context API
- **Routing:** [React Router v6](https://reactrouter.com)
- **Animation:** CSS Keyframes & Tailwind Transitions

---

## 📂 Project Structure

```text

src/
├── components/                 # Reusable UI Components
│   ├── CategoryTags.tsx        # Horizontal scrollable category filters
│   ├── FloatingMiniPlayer.tsx  # Picture-in-picture video player
│   ├── Header.tsx              # Navigation bar with search and profile
│   ├── HeaderWrapper.tsx       # Sticky layout container for Header & Tags
│   ├── MobileView.tsx          # Animated slide-in mobile navigation
│   ├── Search.tsx              # Search bar logic and input handling
│   ├── ShowSuggestions.tsx     # Search dropdown with text highlighting
│   ├── VideoCard.tsx           # Individual video thumbnail component
│   ├── VideoCardSkeleton.tsx   # Shimmer/Skeleton loading state
│   └── VideoListing.tsx        # Responsive grid for video content
├── context/                    # Global State Management (Context API)
│   ├── DataContext.tsx         # Global video and category state
│   └── MiniPlayerContext.tsx   # State for floating player and active video
├── data/                       # Static Content
│   └── data.json               # Source of truth for videos and categories
├── hook/                       # Custom React Hooks
│   ├── useData.tsx             # Logic for category-based data fetching
│   ├── useMiniPlayer.tsx       # Logic for controlling the mini player
│   └── useSearch.tsx           # Custom search and filtering logic
├── Loader/                     # Loading Components
│   └── BouncingDinoLoader.tsx  # Custom branded page loader
├── pages/                      # Main Route Views
│   └── Home.tsx                # Landing page with video feed
│   └── VideoPlayer.tsx         # Detailed video view page
├── svg/                        # Custom SVG Icon Components
│   └── Close.tsx
│   └── CloseIcon.tsx
│   └── Hamburger.tsx
│   └── Maximize.tsx
│   └── MiniPlayerIcon.tsx
│   └── ProfileIcon.tsx
│   └── SearchIcon.tsx
├── types/                      # TypeScript Type Definitions
│   └── types.ts                # Centralized interfaces (Content, Category, etc.)
├── utils/                      # Helper Functions
│   └── util.tsx                # Text highlighting and slug formatting logic
├── App.tsx                     # Main routing and provider setup
├── main.tsx                    # Application entry point
├── App.css                     # Global component styles
└── index.css                   # Tailwind directives and base styles

```

<!-- ## 🎯 Features Implemented -->

## ✅ Core Features

- **Home Page with Video Feed**: Scrollable list of videos grouped by AI categories
- **Full-Page Video Player**: Custom controls with smooth transitions
- **In-Player Video List**: Swipe-up gesture reveals related videos from same category
- **Drag-to-Minimize Player**: Picture-in-App experience with mini-player docking

---

## 🎬 Video Player Features

- **Drag down to minimize to mini-player**
- **Persistent playback**
- **Browse while watching**

---

## 📱 Mobile-First Experience

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: 60fps transitions and interactions
- **Skeleton Loading**: Shimmer effects during content loading

---

## 🏷️ Smart Categorization

- **Social Media AI**: Tools for social media content creation
- **AI Income**: Monetization strategies using AI
- **AI Essentials**: Fundamental AI courses and skills

---

## 🚀 Live Demo

### https://dino-ventures-video-player.vercel.app/

---

## 🛠️ Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/vaishnaviie/video_player_application.git
   cd my-project
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
