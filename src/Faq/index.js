import React from "react";
import styled from "styled-components";
import Faq from "./Faq";

import plane from "./plane.svg";
import at from "./at.svg";
import list from "./list.svg";

const articles = [
  {
    icon: plane,
    title: "КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?",
    text:
      "Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на самолет по сотням авиакомпаний и находим за считанные минуты самые дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь нашим поиском, который совершенно бесплатно сравнивает цены на авиабилеты онлайн и находит самые дешевые перелеты. Больше нет смысла ходить в авиакассы, обзванивать агентства — дешевый билет находится на расстоянии клика. На нашем сайте вы можете подобрать дешевые билеты на самолет в Европу, Азию и на другие континенты. Мы написали для вас простую инструкцию о том, как пользоваться поиском и экономить на перелетах от 1000 до 20 000 руб в год.",
    link: "http://aviasales.com"
  },
  {
    icon: at,
    title: "ЭЛЕКТРОННЫЙ АВИАБИЛЕТ",
    text:
      "Электронный авиабилет — это, по сути, обычный билет на самолет, но только в менее привычном для путешественника виде. Вся информация об авиаперелете (данные пассажира, маршрут следования) хранится в электронной базе, а пассажир получает на руки маршрут-квитанцию. Некоторые пассажиры, купив авиабилет онлайн и получив маршрут-квитанцию, удивлены ее видом — это обыкновенный лист формата А4, на котором распечатана вся информация о предстоящем перелете. Однако это действительно официальный документ, подтверждающий договор между авиаперевозчиком и пассажиром. При регистрации на рейс пассажир должен предъявить маршрут-квитанцию вместе с удостоверением личности точно так же, как предъявляют обыкновенный бумажный билет. Следует отметить, что электронный билет, приобретенный онлайн, стоит дешевле своего бумажного аналога.",
    link: "http://aviasales.com"
  },
  {
    icon: list,
    title: "20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ",
    text:
      "Есть масса путеводителей по странам, но ни одного о том, как провести время в самолете. Для того, чтобы сделать ваш перелет максимально комфортным, мы написали 20 советов о подготовке к путешествию. Ведь настоящее путешествие начинается со слов «Добро пожаловать на борт нашего самолета»!",
    link: "http://aviasales.com"
  }
];

const FaqWrap = styled.section`
  padding: 20px 10px;
  margin: auto;
`;

export default () => {
  const faq = articles.map((faq, index) => {
    return (
      <Faq
        key={index}
        icon={faq.icon}
        title={faq.title}
        text={faq.text}
        link={faq.link}
      />
    );
  });
  return (
    <FaqWrap>
      <div className="container">
        <div className="row center-xl">
          <div className="col-xs-12 col-xl-10 start-xl">{faq}</div>
        </div>
      </div>
    </FaqWrap>
  );
};
