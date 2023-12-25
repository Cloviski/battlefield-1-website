import React from "react";
import Video from "../../assets/BF1TRAILER.mp4";
import "./styles.css";

function Trailer() {
  return (
    <div id="trailer-container">
      <div className="content">
        <video controls className="trailer">
          <source src={Video} type="video/mp4" />
          Your browser doesn't have video support
        </video>
        <div id="synopsis">
          <p className="description">
            Battlefield 1 takes you back to The Great War, WW1, where new
            technology and worldwide conflict changed the face of warfare
            forever. Take part in every battle, control every massive vehicle,
            and execute every maneuver that turns an entire fight around. The
            whole world is at war – see what's beyond the trenches.
          </p>
          <button className="button">BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Trailer;
