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
    city: "Krasnodar",
    country: "Russia",
    price: 1212,
    date: 1521331200,
    image: krasnodar,
    flag: {
      x1: flag_ru,
      x2: flag_ru_x2
    }
  },
  {
    city: "Sochi (Adler)",
    country: "Russia",
    price: 1334,
    date: 1522108800,
    image: sochi,
    flag: {
      x1: flag_ru,
      x2: flag_ru_x2
    }
  },
  {
    city: "St. Petersburg",
    country: "Russia",
    price: 1508,
    date: 1518998400,
    image: spb,
    flag: {
      x1: flag_ru,
      x2: flag_ru_x2
    }
  },
  {
    city: "Mineralnye Vody",
    country: "Russia",
    price: 2074,
    date: 1520899200,
    image: minwater,
    flag: {
      x1: flag_ru,
      x2: flag_ru_x2
    }
  },
  {
    city: "Simferopol (Crimea)",
    country: "Crimea",
    price: 2407,
    date: 1520899200,
    image: simferopol,
    flag: {
      x1: flag_ru,
      x2: flag_ru_x2
    }
  },
  {
    city: "Barcelona",
    country: "Spain",
    price: 4247,
    date: 1521849600,
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
