import React from "react";

import { Card } from "../Card/Card";

import "./Content.sass";
import { Section } from "../Section/Section";

const data_courses = [
  {
    title: "React Developer",
    description:
      "React — JavaScript-библиотека для разработки пользовательских интерфейсов. Максимально продвинутый курс, будешь делать одностраничные и мобильные приложения уже ЗАВТРА!"
  },

  {
    title: "Nodejs Developer",
    description:
      "React — JavaScript-библиотека для разработки пользовательских интерфейсов. Максимально продвинутый курс, будешь делать одностраничные и мобильные приложения уже ЗАВТРА!"
  },

  {
    title: "Python Developer",
    description:
      "React — JavaScript-библиотека для разработки пользовательских интерфейсов. Максимально продвинутый курс, будешь делать одностраничные и мобильные приложения уже ЗАВТРА!"
  },

  {
    title: "Golang Developer",
    description:
      "React — JavaScript-библиотека для разработки пользовательских интерфейсов. Максимально продвинутый курс, будешь делать одностраничные и мобильные приложения уже ЗАВТРА!"
  }
];

const data_teacher = [
  {
    title: "Thomas Anderson",
    description:
      "Один из лучших в своём деле, когда-то давно работал в MetaCortex, но с тех пор успел стать избранным и покинуть матрицу. Подружит машину и человека на раз."
  },

  {
    title: "Elliot Alderson",
    description:
      "Бывший инженер кибербезопасности в компании Allsafe Security, а также хакер-одиночка. Не будем лезть в его личные проблемы, не все мы умеем хорошо ладить с людьми, но своё дело он знает."
  },

  {
    title: "Sheldon Cooper",
    description:
      "Гений! Сами подумайте, сколько паттернов проектирования вы бы знали, имев эйдетическую памть? А языков программирования? Вот-вот!"
  },

  {
    title: "Bertram Gilfoyle",
    description:
      "Системная архитектура, сети и безопасность. Ловит межсайтовые скриптики, мониторит ДДОС-атаки, откатывает косяки в базах данных и ошибки в транзакциях"
  }
];

export const Content = () => {
  return (
    <div className="section courses">
      <Section title="Курсы:">
        {data_courses.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </Section>
      <Section title="Преподаватели:">
        {data_teacher.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </Section>
    </div>
  );
};
