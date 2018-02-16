import React from "react";
import styled from "styled-components";

import Card from "./Card";
import krasnodar from "./krasnodar.png";
import sochi from "./sochi.png";
import spb from "./spb.png";
import minwater from "./minwater.png";
import simferopol from "./simferopol.png";
import barselona from "./barselona.png";
import ru from "./flag_ru.png";
import sp from "./flag_sp.png";

const Specific = styled.div`
  max-width: 1244px;
  margin: auto;
`;

const data = [
  {
    city: "Краснодар",
    country: "Россия",
    price: "1 212",
    date: "18 марта",
    image: krasnodar,
    flag: ru
  },
  {
    city: "Сочи (Адлер)",
    country: "Россия",
    price: "1 334",
    date: "27 марта",
    image: sochi,
    flag: ru
  },
  {
    city: "Санкт-Петербург",
    country: "Россия",
    price: "1 508",
    date: "19 февраля",
    image: spb,
    flag: ru
  },
  {
    city: "Минеральные Воды",
    country: "Россия",
    price: "2 074",
    date: "13 марта",
    image: minwater,
    flag: ru
  },
  {
    city: "Симферополь (Крым)",
    country: "Крым",
    price: "2 407",
    date: "13 марта",
    image: simferopol,
    flag: ru
  },
  {
    city: "Барселона",
    country: "Испания",
    price: "4 247",
    date: "24 марта",
    image: barselona,
    flag: sp
  }
];

export default function() {
  const cards = data.map(function(item, index) {
    return (
      <div key={index} className="col-xs-12 col-sm-10 col-md-6 col-lg-5">
        <Card data={item} />
      </div>
    );
  });
  return (
    <Specific>
      <div className="row center-sm">{cards}</div>
    </Specific>
  );
}
