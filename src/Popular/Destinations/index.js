import React from 'react';
import Card from './Card';
import krasnodar from './krasnodar.jpg';
import sochi from './sochi.jpg';
import spb from './spb.jpg';
import minwater from './minwater.jpg';
import simferopol from './simferopol.jpg';
import barselona from './barselona.jpg';
import flagRu from './flag_ru.png';
import flagRuX2 from './flag_ru@2x.png';
import flagSp from './flag_sp.png';
import flagSpX2 from './flag_sp@2x.png';

const destinations = [
  {
    id: 1,
    city: 'krasnodar',
    country: 'russia',
    price: 1212,
    date: 1521331200,
    image: krasnodar,
    flag: {
      x1: flagRu,
      x2: flagRuX2,
    },
  },
  {
    id: 2,
    city: 'sochi_adler',
    country: 'russia',
    price: 1334,
    date: 1522108800,
    image: sochi,
    flag: {
      x1: flagRu,
      x2: flagRuX2,
    },
  },
  {
    id: 3,
    city: 'st_petersburg',
    country: 'russia',
    price: 1508,
    date: 1518998400,
    image: spb,
    flag: {
      x1: flagRu,
      x2: flagRuX2,
    },
  },
  {
    id: 4,
    city: 'min_vody',
    country: 'russia',
    price: 2074,
    date: 1520899200,
    image: minwater,
    flag: {
      x1: flagRu,
      x2: flagRuX2,
    },
  },
  {
    id: 5,
    city: 'simferopol_сrimea',
    country: 'сrimea',
    price: 2407,
    date: 1520899200,
    image: simferopol,
    flag: {
      x1: flagRu,
      x2: flagRuX2,
    },
  },
  {
    id: 6,
    city: 'barcelona',
    country: 'spain',
    price: 4247,
    date: 1521849600,
    image: barselona,
    flag: {
      x1: flagSp,
      x2: flagSpX2,
    },
  },
];

export default () => {
  const cards = destinations.map(destination => (
    <div key={destination.id} className="col-xs-12 col-sm-10 col-xl-5">
      <Card
        city={destination.city}
        country={destination.country}
        price={destination.price}
        date={destination.date}
        image={destination.image}
        flag={destination.flag}
      />
    </div>
  ));
  return <div className="row center-sm">{cards}</div>;
};
