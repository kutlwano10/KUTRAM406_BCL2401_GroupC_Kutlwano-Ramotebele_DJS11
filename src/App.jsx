import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Podcasts from "./pages/Podcasts";
import Favorites from "./pages/Favorites";
import PodcastDetails from "./pages/PodcastDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="podcasts" element={<Podcasts />} />
          <Route path="podcasts/:id" element={<PodcastDetails />} />

          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
