import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import Card from "./Card";
import staralliance_white from "./staralliance-white.png";
import staralliance_white_2x from "./staralliance-white@2x.png";
import luftahnsa from "./luftahnsa.svg";
import pobeda from "./pobeda.svg";

const specialOffers = [
  {
    title: "Билеты от 499 рублей!",
    logo: {
      x1: staralliance_white,
      x2: staralliance_white_2x
    },
    company: pobeda,
    price: 499,
    dayLeft: "Осталось 45 дней",
    text: "Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
  },
  {
    title: "В Нью-Йорк от 20 680 ₽",
    logo: {
      x1: staralliance_white,
      x2: staralliance_white_2x
    },
    company: luftahnsa,
    price: 20680,
    dayLeft: "Осталось 19 дней",
    text:
      "Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa"
  },
  {
    title: "В Лос-Анджелес от 20 360 ₽",
    logo: {
      x1: staralliance_white,
      x2: staralliance_white_2x
    },
    company: luftahnsa,
    price: 20360,
    dayLeft: "Осталось 19 дней",
    text:
      "Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa"
  }
];

const SpecialOffers = styled.section`
  background: linear-gradient(to left, #196ebd, #01b0dd);
  padding: 20px 10px;
`;

const Title = styled.h2`
  line-height: 1.4;
  color: #fff;
  font-size: 1.75rem;
  font-weight: 500;
  margin: 0 0 20px 0;
`;

const Cards = styled.div``;

const ShowAll = styled.a`
  line-height: 1.4;
  color: #fff;
  display: inline-block;
  text-decoration: underline;
  margin-top: 18px;
  ${media.md`
    margin-top: 15px;
  `};
`;

const Notes = styled.p`
  line-height: 1.4;
  color: #fff;
  display: inline-block;
  margin: 8px 0 0 0;
  ${media.md`
    margin: 15px 0 0 0;
  `};
`;

export default () => {
  const cards = specialOffers.map((offer, index) => {
    return (
      <div className="col-xs-12 col-md-4 col-xl-4" key={index}>
        <Card
          title={offer.title}
          logo={offer.logo}
          company={offer.company}
          price={offer.price}
          dayLeft={offer.dayLeft}
          text={offer.text}
        />
      </div>
    );
  });
  return (
    <SpecialOffers>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xl-10 start-xs">
            <Title>Спецпредложения на авиабилеты</Title>
            <Cards>
              <div className="row">{cards}</div>
            </Cards>
            <div className="row center-xs between-md">
              <div className="col-md-6 start-md">
                <ShowAll href="href://">Смотреть все спецпредложения</ShowAll>
              </div>
              <div className="col-md-6 end-md">
                <Notes>* средняя цена по направлению</Notes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpecialOffers>
  );
};
