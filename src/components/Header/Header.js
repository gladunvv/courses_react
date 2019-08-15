import React from "react";

import { Button } from "../Button/Button";

import "./Header.sass";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content content">
        <div className="logo">
          <span className="logo__text">SKILL STACK</span>
        </div>
        <div className="header__buttons">
          <Button link="/login" className="header__button" name="LOGIN" />
          <Button className="header__button" name="SIGNIN" />
        </div>
      </div>
    </header>
  );
};
