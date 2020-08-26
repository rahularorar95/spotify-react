import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />

        <input type="text" placeholder="Search Artists, Songs, Playlists" />
      </div>
      <div className="header__right">
        <Avatar alt="avatar" src="" />
        <h4>Rahul</h4>
      </div>
    </div>
  );
}

export default Header;
