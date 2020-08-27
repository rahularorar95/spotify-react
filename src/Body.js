import React from "react";
import Header from "./Header";
import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./Body.css";

function Body({ spotify }) {
  const [{ global_50 }] = useDataLayerValue();

  console.log(global_50);
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={global_50?.images[0].url} alt=""></img>

        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Global Top 50</h2>
          <p>{global_50?.description}</p>
        </div>
      </div>

    <div className="body__background">
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />

          <MoreHorizIcon />
        </div>

        {/* List of songs */}

        {global_50?.tracks.items.map((item) => {
          return item.track.id && <SongRow track={item.track} />;
        })}
      </div>
    </div>
    </div>
  );
}

export default Body;
