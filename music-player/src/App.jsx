import React from "react";
import "./App.css";
import SongList from "./Component/SongList";
import AddSong from "./Component/AddSong";
import { BrowseRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowseRouter>
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/add-music" element={<AddSong />} />
      </Routes>
    </BrowseRouter>
  );
};

export default App;
