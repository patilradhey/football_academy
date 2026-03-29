import React from "react";
import player from "./Images/playerweek.png";

function PlayerWeek() {
  return (
    <div className="playerweek">

      <div className="player-text">
        <h4>PLAYER OF THE WEEK</h4>

        <h1>
          JOHAN <br /> BRANDY
        </h1>

        <p>
          <span>10 GOALS</span> | <span>5 ASSISTS</span>
        </p>
      </div>

      <div className="player-img">
        <img src={player} alt="player"/>
      </div>

    </div>
  );
}

export default PlayerWeek;