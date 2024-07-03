import React from "react";
import { Link, NavLink } from "react-router-dom";
import AddSong from "./AddSong";
import SongList from "./SongList";

const HomePage = () => {
  return (
    <>
      <div className="header">
        <Link to={"/AddSong"}>
          <button> Add-Song </button>
        </Link>
        <button>SongList</button>
        <button>Favourite</button>
      </div>
    </>
  );
};

export default HomePage;
