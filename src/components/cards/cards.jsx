import React from "react";
import "./styles.css";
import Banner_1 from "../../assets/bf1-theyshallnotpass-gamelogo.png";
import Banner_2 from "../../assets/bf1-inthenameofthetsar-gamelogo.png";
import Banner_3 from "../../assets/bf1-turningtides-gamelogo-extra-padding.png";
import Banner_4 from "../../assets/bf1-apocalypse-gamelogo-v2.png";

function Cards() {
  return (
    <>
      <div className="expasions">EXPANSIONS</div>
      <div className="dlcs-conteiner">
        <div className="cards-content">
          <div className="card banner-1">
            <img className="dlc-logo" src={Banner_1} alt="" />
          </div>
          <div className="card banner-2">
            <img className="dlc-logo" src={Banner_2} alt="" />
          </div>
          <div className="card banner-3">
            <img className="dlc-logo" src={Banner_3} alt="" />
          </div>
          <div className="card banner-4">
            <img className="dlc-logo" src={Banner_4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
