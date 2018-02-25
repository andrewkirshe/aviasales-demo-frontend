import React from "react";
import Card from "./Card";
import krasnodar from "./krasnodar.jpg";
import sochi from "./sochi.jpg";
import spb from "./spb.jpg";
import minwater from "./minwater.jpg";
import simferopol from "./simferopol.jpg";
import barselona from "./barselona.jpg";
import flag_ru from "./flag_ru.png";
import flag_ru_x2 from "./flag_ru@2x.png";
import flag_sp from "./flag_sp.png";
import flag_sp_x2 from "./flag_sp@2x.png";

const destinations = [
  {
    city: "Краснодар",
    country: "Россия",
    price: 1212,
    date: "18 марта",
    image: krasnodar,
    flag: {
      x1: flag_ru,
      x2: flag_ru_x2
    }
  },
  {
    city: "Сочи (Адлер)",
    country: "Россия",
    price: 1334,
    date: "27 марта",
    image: sochi,
    flag: {
      x1: flag_ru,
      x2: flag_ru_x2
    }
  },
  {
    city: "Санкт-Петербург",
    country: "Россия",
    price: 1508,
    date: "19 февраля",
    image: spb,
    flag: {
      x1: flag_ru,
      x2: flag_ru_x2
    }
  },
  {
    city: "Минеральные Воды",
    country: "Россия",
    price: 2074,
    date: "13 марта",
    image: minwater,
    flag: {
      x1: flag_ru,
      x2: flag_ru_x2
    }
  },
  {
    city: "Симферополь (Крым)",
    country: "Крым",
    price: 2407,
    date: "13 марта",
    image: simferopol,
    flag: {
      x1: flag_ru,
      x2: flag_ru_x2
    }
  },
  {
    city: "Барселона",
    country: "Испания",
    price: 4247,
    date: "24 марта",
    image: barselona,
    flag: {
      x1: flag_sp,
      x2: flag_sp_x2
    }
  }
];

export default () => {
  const cards = destinations.map((destination, index) => {
    return (
      <div key={index} className="col-xs-12 col-sm-10 col-xl-5">
        <Card
          city={destination.city}
          country={destination.country}
          price={destination.price}
          date={destination.date}
          image={destination.image}
          flag={destination.flag}
        />
      </div>
    );
  });
  return <div className="row center-sm">{cards}</div>;
};
