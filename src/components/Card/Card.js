import React from "react";

import "./Card.sass";

export const Card = ({ title, description }) => {
  return (
    <a className="card" href="#">
      <div className="card__body">
        <span className="card__title">{title}</span>
        <div className="card__wrapper">
          {/* <img
            className="card__image"
            src="static/images/icons8-react-native-100.png"
            alt=""
          /> */}
          <p className="card__description">{description}</p>
        </div>
      </div>
    </a>
  );
};
