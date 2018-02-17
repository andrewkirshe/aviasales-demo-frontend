import React from "react";
import Card from "./Card";
import krasnodar from "./krasnodar.png";
import sochi from "./sochi.png";
import spb from "./spb.png";
import minwater from "./minwater.png";
import simferopol from "./simferopol.png";
import barselona from "./barselona.png";
import flag_ru from "./flag_ru.png";
import flag_sp from "./flag_sp.png";

const destinations = [
  {
    city: "Краснодар",
    country: "Россия",
    price: "1 212",
    date: "18 марта",
    image: krasnodar,
    flag: flag_ru
  },
  {
    city: "Сочи (Адлер)",
    country: "Россия",
    price: "1 334",
    date: "27 марта",
    image: sochi,
    flag: flag_ru
  },
  {
    city: "Санкт-Петербург",
    country: "Россия",
    price: "1 508",
    date: "19 февраля",
    image: spb,
    flag: flag_ru
  },
  {
    city: "Минеральные Воды",
    country: "Россия",
    price: "2 074",
    date: "13 марта",
    image: minwater,
    flag: flag_ru
  },
  {
    city: "Симферополь (Крым)",
    country: "Крым",
    price: "2 407",
    date: "13 марта",
    image: simferopol,
    flag: flag_ru
  },
  {
    city: "Барселона",
    country: "Испания",
    price: "4 247",
    date: "24 марта",
    image: barselona,
    flag: flag_sp
  }
];

export default () => {
  const cards = destinations.map((destination, index) => {
    return (
      <div key={index} className="col-xs-12 col-sm-10 col-xl-5">
        <Card data={destination} />
      </div>
    );
  });
  return <div className="row center-sm">{cards}</div>;
};
