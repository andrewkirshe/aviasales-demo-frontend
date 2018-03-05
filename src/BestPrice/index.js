import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import Header from "./Header";
import Destination from "./Destination";

import flag_ru from "./flag_ru.png";
import flag_ru_x2 from "./flag_ru@2x.png";
import flag_am from "./flag_am.png";
import flag_am_x2 from "./flag_am@2x.png";
import flag_md from "./flag_md.png";
import flag_md_x2 from "./flag_md@2x.png";

const destinations = [
  {
    flag: {
      x1: flag_ru,
      x2: flag_ru_x2
    },
    city: "Simferopol",
    country: "Crimea",
    routes: [
      {
        from: "Moscow",
        price: 4837
      },
      {
        from: "StPetersburg",
        price: 7857
      },
      {
        from: "Novosibirsk",
        price: 15127
      },
      {
        from: "Ekaterinburg",
        price: 9275
      },
      {
        from: "Chelyabinsk",
        price: 9148
      }
    ]
  },
  {
    flag: {
      x1: flag_am,
      x2: flag_am_x2
    },
    city: "Yerevan",
    country: "Армения",
    routes: [
      {
        from: "Armenia",
        price: 6758
      },
      {
        from: "StPetersburg",
        price: 9932
      },
      {
        from: "Sochi",
        price: 11951
      },
      {
        from: "Krasnodar",
        price: 11741
      },
      {
        from: "RostovNaDonu",
        price: 11956
      }
    ]
  },
  {
    flag: {
      x1: flag_md,
      x2: flag_md_x2
    },
    city: "Kishinev",
    country: "Moldova",
    routes: [
      {
        from: "Moscow",
        price: 8319
      },
      {
        from: "StPetersburg",
        price: 10800
      },
      {
        from: "Krasnodar",
        price: 12098
      },
      {
        from: "Surgut",
        price: 16277
      },
      {
        from: "NovyUrengoy",
        price: 15987
      }
    ]
  }
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
  const destinationsList = destinations.map((destination, index) => {
    return (
      <Destination
        key={index}
        flag={destination.flag}
        city={destination.city}
        country={destination.country}
        routes={destination.routes}
      />
    );
  });
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
                Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
                стран мира. Поиск и сравнение цен на авиабилеты среди 100
                агентств и 728 авиакомпаний.
              </Text>
              <Small>
                Цены, найденные пользователями за последние 48 часов, не
                являются офертой.
              </Small>
            </Notes>
          </div>
        </div>
      </div>
    </BestPrice>
  );
};
