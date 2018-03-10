import React from 'react';
import styled from 'styled-components';
import { media } from '../Media';
import Header from './Header';
import Destination from './Destination';

import flagRu from './flag_ru.png';
import flagRuX2 from './flag_ru@2x.png';
import flagAm from './flag_am.png';
import flagAmX2 from './flag_am@2x.png';
import flagMd from './flag_md.png';
import flagMdX2 from './flag_md@2x.png';

const destinations = [
  {
    id: 1,
    flag: {
      x1: flagRu,
      x2: flagRuX2,
    },
    city: 'simferopol',
    country: 'сrimea',
    routes: [
      {
        id: 1,
        from: 'moscow',
        price: 4837,
      },
      {
        id: 2,
        from: 'st-petersburg',
        price: 7857,
      },
      {
        id: 3,
        from: 'novosibirsk',
        price: 15127,
      },
      {
        id: 4,
        from: 'ekaterinburg',
        price: 9275,
      },
      {
        id: 5,
        from: 'chelyabinsk',
        price: 9148,
      },
    ],
  },
  {
    id: 2,
    flag: {
      x1: flagAm,
      x2: flagAmX2,
    },
    city: 'yerevan',
    country: 'Армения',
    routes: [
      {
        id: 1,
        from: 'armenia',
        price: 6758,
      },
      {
        id: 2,
        from: 'st-petersburg',
        price: 9932,
      },
      {
        id: 3,
        from: 'sochi',
        price: 11951,
      },
      {
        id: 4,
        from: 'krasnodar',
        price: 11741,
      },
      {
        id: 5,
        from: 'rostov-na-donu',
        price: 11956,
      },
    ],
  },
  {
    id: 3,
    flag: {
      x1: flagMd,
      x2: flagMdX2,
    },
    city: 'kishinev',
    country: 'moldova',
    routes: [
      {
        id: 1,
        from: 'moscow',
        price: 8319,
      },
      {
        id: 2,
        from: 'st-petersburg',
        price: 10800,
      },
      {
        id: 3,
        from: 'krasnodar',
        price: 12098,
      },
      {
        id: 4,
        from: 'surgut',
        price: 16277,
      },
      {
        id: 5,
        from: 'novy-urengoy',
        price: 15987,
      },
    ],
  },
];

const BestPrice = styled.section`
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
  padding: 32px 10px;
`;

const Destinations = styled.div`
  ${media.xl`
      display: flex;
      justify-content: space-between;
      position: relative;
  `};
`;

const Notes = styled.div`
  text-align: center;
  margin: 40px auto 0;
  line-height: 1.6;
  ${media.lg`
        margin: 30px auto 0;
  `};
`;

const Text = styled.p`
  margin-bottom: 10px;
`;

const Small = styled.p`
  color: #9ab0b9;
  font-size: 0.875rem;
`;

export default () => {
  const destinationsList = destinations.map(destination => (
    <Destination
      key={destination.id}
      flag={destination.flag}
      city={destination.city}
      country={destination.country}
      routes={destination.routes}
    />
  ));
  return (
    <BestPrice>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-10 start-xs">
            <Header />
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-10 start-xs">
            <Destinations>{destinationsList}</Destinations>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-10 col-lg-6">
            <Notes>
              <Text>
                Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран мира. Поиск и
                сравнение цен на авиабилеты среди 100 агентств и 728 авиакомпаний.
              </Text>
              <Small>
                Цены, найденные пользователями за последние 48 часов, не являются офертой.
              </Small>
            </Notes>
          </div>
        </div>
      </div>
    </BestPrice>
  );
};
