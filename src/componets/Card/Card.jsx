import React from "react";
import { VscHeart } from "react-icons/vsc";

const Card = ({ FunitureDescription }) => {
  return (
    <div className="row">
      <div className="card_content">
        <div className="image">
          <img src={FunitureDescription.image} alt="" />
        </div>
        <div className="description">
          <h6>{FunitureDescription.category}</h6>
          <p>{FunitureDescription.title}</p>
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
          <VscHeart className="mainIcon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
