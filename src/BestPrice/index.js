import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import BlockTitle from "./BlockTitle";
import Destination from "./Destination";

import ru from "./flag_ru.png";
import am from "./flag_am.png";
import md from "./flag_md.png";

const data = [
  {
    flag: ru,
    city: "Симферополь",
    country: "Крым",
    routes: [
      {
        from: "Москвы",
        price: "4 837"
      },
      {
        from: "Санкт-Петербурга",
        price: "7 857"
      },
      {
        from: "Новосибирска",
        price: "15 127"
      },
      {
        from: "Екатеринбурга",
        price: "9 275"
      },
      {
        from: "Челябинска",
        price: "9 148"
      }
    ]
  },
  {
    flag: am,
    city: "Ереван",
    country: "Армения",
    routes: [
      {
        from: "Москвы",
        price: "6 758"
      },
      {
        from: "Санкт-Петербурга",
        price: "9 932"
      },
      {
        from: "Сочи",
        price: "11 951"
      },
      {
        from: "Краснодара",
        price: "11 741"
      },
      {
        from: "Ростова-на-Дону",
        price: "11 956"
      }
    ]
  },
  {
    flag: md,
    city: "Кишинёв",
    country: "Молдавия",
    routes: [
      {
        from: "Москвы",
        price: "8 319"
      },
      {
        from: "Санкт-Петербурга",
        price: "10 800"
      },
      {
        from: "Краснодара",
        price: "12 098"
      },
      {
        from: "Сургута",
        price: "16 277"
      },
      {
        from: "Нового Уренгоя",
        price: "15 987"
      }
    ]
  }
];

const Container = styled.div`
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
  padding: 32px 10px;
`;

const List = styled.div`
  max-width: 1244px;
  margin: auto;
`;

const Notes = styled.div`
  text-align: center;
  max-width: 624px;
  margin: 40px auto 0;
  line-height: 1.6;
  ${media.md`
        margin: 30px auto 0;
  `};
`;

const Text = styled.div`
  margin-bottom: 10px;
`;

const Small = styled.div`
  color: #9ab0b9;
  font-size: 0.875rem;
`;

export default function() {
  const destination = data.map(function(item, i, index) {
    const last = data.length - 1 === i ? "last" : "";
    return (
      <div key={index} className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <Destination data={item} last={last} />
      </div>
    );
  });
  return (
    <Container>
      <BlockTitle />
      <List>
        <div className="row">{destination}</div>
      </List>
      <Notes>
        <Text>
          Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
          мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
          авиакомпаний.
        </Text>
        <Small>
          Цены, найденные пользователями за последние 48 часов, не являются
          офертой.
        </Small>
      </Notes>
    </Container>
  );
}
