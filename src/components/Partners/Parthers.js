import React from "react";

import Duff from "../../static/images/Duff.png";
import Kahuna from "../../static/images/Kahuna.png";
import LosPolos from "../../static/images/LosPolos.png";
import Nuka from "../../static/images/Nuka.png";
import Umbrella from "../../static/images/Umbrella.png";
import Slurm from "../../static/images/Slurm.png";

export const Partners = () => {
  return (
    <section className="partners section">
      <span className="title title_main">Наши партнеры:</span>
      <p className="text" />
      <div className="partners__images">
        <img className="partners__img" src={Slurm} alt="" />
        <img className="partners__img" src={Nuka} alt="" />
        <img className="partners__img" src={Duff} alt="" />
        <img className="partners__img" src={Umbrella} alt="" />
        <img className="partners__img" src={LosPolos} alt="" />
        <img className="partners__img" src={Kahuna} alt="" />
      </div>
    </section>
  );
};
