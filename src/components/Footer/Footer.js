import React from "react";

import Skype from "../../static/icons/icons8-skype-100.png";
import Telegram from "../../static/icons/icons8-telegram-app-100.png";
import Twitter from "../../static/icons/icons8-twitter-100.png";
import Facebook from "../../static/icons/icons8-facebook-100.png";

export const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__content content">
        <div class="logo">
          <span class="footer__title">Skill Stack</span>
        </div>
        <div class="footer__links">
          <a class="footer__link" href="#">
            <img class="footer__img" src={Skype} alt="" />
          </a>
          <a class="footer__link" href="#">
            <img class="footer__img" src={Telegram} alt="" />
          </a>
          <a class="footer__link" href="#">
            <img class="footer__img" src={Twitter} alt="" />
          </a>
          <a class="footer__link" href="#">
            <img class="footer__img" src={Facebook} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};
