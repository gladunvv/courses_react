import React from "react";

import "./Section.sass";

export const Section = ({ title, children }) => {
  return (
    <div className="section__wrapper">
      <span className="title title_main section__title">{title}</span>
      <div className="cards-wrapper">{children}</div>
    </div>
  );
};
