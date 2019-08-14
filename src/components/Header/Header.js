import React from "react";

import { Button } from "../Button/Button";

import "./Header.sass";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content content">
        <div className="logo">
          <span className="logo__text">SKILL STACK</span>
          <div>
            <Button name="LOGIN" />
            <Button name="SIGNIN" />
          </div>
        </div>
      </div>
    </header>
  );
};
