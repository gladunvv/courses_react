import React from "react";

import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

import "./Header.sass";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content content">
        <div className="logo">
          <Link to="/" className="logo__text">
            SKILL STACK
          </Link>
        </div>
        <div className="header__buttons">
          <Button link="/login" className="header__button" name="LOGIN" />
          <Button link="/signup" className="header__button" name="SIGNUP" />
        </div>
      </div>
    </header>
  );
};
