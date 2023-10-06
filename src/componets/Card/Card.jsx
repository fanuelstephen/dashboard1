import React from "react";
import "./Card.css";
import { GiSelfLove } from "react-icons/gi";

const Card = ({ FunitureDescription }) => {
  return (
    <div className="row">
      <div className="card_content">
        <div className="image">
          <img src={FunitureDescription.image} alt="" />
        </div>
        <div className="description">
          <h6>{FunitureDescription.title}</h6>
          <p>{FunitureDescription.desc}</p>
          <div className="funiture_price">
            <p>
              Tsh
              <span> {FunitureDescription.price}</span>
            </p>
            <div className="dots">
              <span className="dot dot1"></span>
              <span className="dot dot2"></span>
              <span className="dot dot3"></span>
            </div>
          </div>
        </div>
        <div className="loveIcon">
          <GiSelfLove className="mainIcon" />
        </div>
      </div>

      <div className="card_content">
        <div className="image">
          <img src={FunitureDescription.image} alt="" />
        </div>
        <div className="description">
          <h6>{FunitureDescription.title}</h6>
          <p>{FunitureDescription.desc}</p>
          <div className="funiture_price">
            <p>
              Tsh   
              <span> {FunitureDescription.price}</span>
            </p>
            <div className="dots">
              <span className="dot dot1"></span>
              <span className="dot dot2"></span>
              <span className="dot dot3"></span>
            </div>
          </div>
        </div>
        <div className="loveIcon">
          <GiSelfLove className="mainIcon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
