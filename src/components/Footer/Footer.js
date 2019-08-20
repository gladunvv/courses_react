import React from "react";

import Skype from "../../static/icons/icons8-skype-100.png";
import Telegram from "../../static/icons/icons8-telegram-app-100.png";
import Twitter from "../../static/icons/icons8-twitter-100.png";
import Facebook from "../../static/icons/icons8-facebook-100.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content content">
        <div className="logo">
          <span className="footer__title">Skill Stack</span>
        </div>
        <div className="footer__links">
          <a className="footer__link" href="#">
            <img className="footer__img" src={Skype} alt="" />
          </a>
          <a className="footer__link" href="#">
            <img className="footer__img" src={Telegram} alt="" />
          </a>
          <a className="footer__link" href="#">
            <img className="footer__img" src={Twitter} alt="" />
          </a>
          <a className="footer__link" href="#">
            <img className="footer__img" src={Facebook} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};
