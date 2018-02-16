import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import Card from "./Card";

import offerlogo from "./offerlogo.png";
import luftahnsa from "./luftahnsa.png";
import pobeda from "./pobeda.png";

const data = [
  {
    offer: "Билеты от 499 рублей!",
    logo: offerlogo,
    company: pobeda,
    price: "499",
    dayleft: "Осталось 45 дней",
    text: "Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
  },
  {
    offer: "В Нью-Йорк от 20 680 ₽",
    logo: offerlogo,
    company: luftahnsa,
    price: "20 680",
    dayleft: "Осталось 19 дней",
    text:
      "Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa"
  },
  {
    offer: "В Лос-Анджелес от 20 360 ₽",
    logo: offerlogo,
    company: luftahnsa,
    price: "20 360",
    dayleft: "Осталось 19 дней",
    text:
      "Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa"
  }
];

const Container = styled.div`
  background: linear-gradient(to left, #196ebd, #01b0dd);
  padding: 20px 10px;
`;

const Title = styled.div`
  line-height: 1.4;
  color: #fff;
  font-size: 1.75rem;
  font-weight: 500;
  margin: auto;
  margin-bottom: 20px;
  max-width: 624px;

  ${media.sm`
    max-width: 752px;
    margin: auto;
    margin-bottom: 20px;
  `};

  ${media.md`
    max-width: 1054px;
  `};

  br {
    ${media.xs`
      display: none;
    `};
  }
`;

const Cards = styled.div`
  max-width: 624px;
  margin: 0 auto;
  ${media.sm`
    max-width: 768px;
    display: flex;
  `};

  ${media.md`
    justify-content: space-between;
    max-width: 1070px;
  `};

  > * {
    ${media.sm`
      flex: 1 1;
      margin: 0 8px;
      max-width: calc(33.3% - 16px);
    `};

    ${media.md`
      max-width: 320px;
    `};
  }
`;
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.sm`
    flex-direction: row;
    justify-content: space-between;
    max-width: 752px;
    margin: auto;
  `};

  ${media.md`
    max-width: 1054px;
  `};
`;

const ShowAll = styled.a`
  line-height: 1.4;
  color: #fff;
  display: block;
  text-align: center;
  text-decoration: underline;
  margin-top: 30px;
  ${media.sm`
    margin-top: 15px;
  `};
`;

const Notes = styled.div`
  line-height: 1.4;
  color: #fff;
  display: block;
  text-align: center;
  margin-top: 5px;
  ${media.sm`
    margin-top: 15px;
  `};
`;

export default function() {
  const cards = data.map(function(item, index) {
    return <Card key={index} data={item} />;
  });
  return (
    <Container>
      <Title>
        Спецпредложения <br />на авиабилеты
      </Title>
      <Cards>{cards}</Cards>
      <Footer>
        <ShowAll>Смотреть все спецпредложения</ShowAll>
        <Notes>* средняя цена по направлению</Notes>
      </Footer>
    </Container>
  );
}
