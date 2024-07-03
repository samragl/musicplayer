import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import SongList from "./Component/SongList";
import AddSong from "./Component/AddSong";
import HomePage from "./Component/HomePage";
import Favourite from "./Component/Favourite";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/song-list", element: <SongList /> },
  { path: "/add-product", element: <AddSong /> },
  { path: "/favourite", element: <Favourite /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
