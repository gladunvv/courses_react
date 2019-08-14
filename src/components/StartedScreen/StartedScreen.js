import React from "react";

import "./StartedScreen.sass";

export const StartedScreen = () => {
  return (
    <div className="started-screen">
      <div className="background" />
      <div className="started-screen__wrapper content">
        <h1 class="title title__started-screen">
          Cделай осознанный выбор своей будущей профессии
        </h1>
        <p className="description">
          Выбери курс себе по душе и начни изучать новейшие технологии в области
          программирования вместе с нашими высококвалифицированными
          преподавателями!
        </p>
      </div>
    </div>
  );
};
