import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import Nav from "./Nav";
import Link from "./Link";

import vk from "./vk.svg";
import fb from "./fb.svg";
import ig from "./ig.svg";
import tw from "./tw.svg";
import vb from "./vb.svg";

import apple from "./apple.svg";
import android from "./android.svg";
import wmarket from "./wmarket.svg";

const navData = [
  {
    title: "Страны",
    list: [
      {
        text: "Россия",
        url: "http://aviasales.ru"
      },
      {
        text: "Таиланд",
        url: "http://aviasales.ru"
      },
      {
        text: "Черногория",
        url: "http://aviasales.ru"
      },
      {
        text: "Кипр",
        url: "http://aviasales.ru"
      },
      {
        text: "Болгария",
        url: "http://aviasales.ru"
      },
      {
        text: "Грузия",
        url: "http://aviasales.ru"
      }
    ],
    all: {
      text: "Все страны",
      url: "http://aviasales.ru"
    }
  },
  {
    title: "Города",
    list: [
      {
        text: "Москва",
        url: "http://aviasales.ru"
      },
      {
        text: "Санкт-Петербург",
        url: "http://aviasales.ru"
      },
      {
        text: "Симферополь",
        url: "http://aviasales.ru"
      },
      {
        text: "Адлер",
        url: "http://aviasales.ru"
      },
      {
        text: "Екатеринбург",
        url: "http://aviasales.ru"
      },
      {
        text: "Лондон",
        url: "http://aviasales.ru"
      }
    ],
    all: {
      text: "Все города",
      url: "http://aviasales.ru"
    }
  },
  {
    title: "Авиакомпании",
    list: [
      {
        text: "Air Berlin",
        url: "http://aviasales.ru"
      },
      {
        text: "Air France",
        url: "http://aviasales.ru"
      },
      {
        text: "Alitalia",
        url: "http://aviasales.ru"
      },
      {
        text: "Air Baltic",
        url: "http://aviasales.ru"
      },
      {
        text: "Emirates",
        url: "http://aviasales.ru"
      },
      {
        text: "KLM",
        url: "http://aviasales.ru"
      }
    ],
    all: {
      text: "Все авиакомпании",
      url: "http://aviasales.ru"
    }
  },
  {
    title: "Аэропорты",
    list: [
      {
        text: "Шереметьево",
        url: "http://aviasales.ru"
      },
      {
        text: "Курумоч",
        url: "http://aviasales.ru"
      },
      {
        text: "Домодедово",
        url: "http://aviasales.ru"
      },
      {
        text: "Толмачево",
        url: "http://aviasales.ru"
      },
      {
        text: "Владивосток",
        url: "http://aviasales.ru"
      },
      {
        text: "Гамбург",
        url: "http://aviasales.ru"
      }
    ],
    all: {
      text: "Все аэропорты",
      url: "http://aviasales.ru"
    }
  },
  {
    title: "Направления",
    list: [
      {
        text: "MOW – SIP",
        url: "http://aviasales.ru"
      },
      {
        text: "MOW – AER",
        url: "http://aviasales.ru"
      },
      {
        text: "MOW – TIV",
        url: "http://aviasales.ru"
      },
      {
        text: "MOW – MRV",
        url: "http://aviasales.ru"
      },
      {
        text: "LED – MOW",
        url: "http://aviasales.ru"
      },
      {
        text: "MOW – BKK",
        url: "http://aviasales.ru"
      }
    ]
  },
  {
    title: "Сервисы",
    list: [
      {
        text: "Горящие авиабилеты",
        url: "http://aviasales.ru"
      },
      {
        text: "Календарь низких цен",
        url: "http://aviasales.ru"
      },
      {
        text: "Карта низких цен",
        url: "http://aviasales.ru"
      },
      {
        text: "Спецпредложения",
        url: "http://aviasales.ru"
      },
      {
        text: "Таблица цен",
        url: "http://aviasales.ru"
      },
      {
        text: "Блог",
        url: "http://aviasales.ru"
      },
      {
        text: "Помощь",
        url: "http://aviasales.ru"
      }
    ]
  }
];

const infoLinksData = [
  {
    text: "О компании",
    url: "http://aviasales.ru"
  },
  {
    text: "Партнёрская программа",
    url: "http://aviasales.ru"
  },
  {
    text: "Реклама",
    url: "http://aviasales.ru"
  },
  {
    text: "Вакансии",
    url: "http://aviasales.ru"
  },
  {
    text: "Помощь",
    url: "http://aviasales.ru"
  },
  {
    text: "Правила",
    url: "http://aviasales.ru"
  },
  {
    text: "White Label авиабилеты",
    url: "http://aviasales.ru"
  }
];

const socialLinksData = [
  {
    class: "vk",
    text: "Вконтакте",
    url: "http://aviasales.ru"
  },
  {
    class: "fb",
    text: "Фейсбук",
    url: "http://aviasales.ru"
  },
  {
    class: "ig",
    text: "Инстаграм",
    url: "http://aviasales.ru"
  },
  {
    class: "tw",
    text: "Твиттер",
    url: "http://aviasales.ru"
  },
  {
    class: "vb",
    text: "Вайбер",
    url: "http://aviasales.ru"
  }
];

const mainLinkData = [
  {
    text: "Поиск и бронирование отелей",
    url: "http://aviasales.ru"
  }
];

const Footer = styled.footer`
  overflow: hidden;
`;

const Container = styled.footer`
  margin: auto;
  max-width: 790px;
  ${media.md`
   max-width: 1170px;
  `};
`;

const Links = styled.div`
  padding: 30px 0 0 0;
  border-bottom: 1px solid #e0e6e8;
  margin: 0 10px;
  position: relative;

  &:after {
    content: "";
    display: block;
    bottom: -1px;
    right: 100%;
    width: 1000px;
    position: absolute;
    border-bottom: 1px solid #e0e6e8;
  }

  &:before {
    content: "";
    display: block;
    bottom: -1px;
    left: 100%;
    width: 1000px;
    position: absolute;
    border-bottom: 1px solid #e0e6e8;
  }
`;
const Info = styled.div`
  ${media.md`
    display: flex;
    padding: 35px 0 0 0;
    justify-content: space-between;
  `};
`;
const InfoLeft = styled.div``;
const InfoRight = styled.div``;
const InfoList = styled.ul`
  list-style: none;
  padding: 20px 10px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;

  ${media.xs`
    justify-content: flex-start;
    padding: 20px;
  `};

  ${media.md`
    padding-top: 0;
  `};

  &.main-link {
    justify-content: center;
    padding: 10px 10px;

    ${media.xs`
      justify-content: flex-start;
      margin-top: 20px;
      padding: 10px 20px;
    `};

    li {
      margin: 0 0 5px 0;
    }
  }

  li {
    margin: 0 20px 5px 0;

    ${media.md`
      margin-right: 15px;
    `};
  }

  a {
    font-size: 0.75rem;
    color: #5b5b5c;
    text-decoration: none;
  }
`;
const SocialLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  margin: 0 0 0 0;

  ${media.xs`
    justify-content: flex-start;
    padding: 0 20px;
  `};

  li {
    display: block;
    min-width: 33.3%;
    max-width: 33.3%;
    margin-bottom: 15px;
    flex: 1 1;

    ${media.xs`
      min-width: 0;
      max-width: 100%;
      flex: none;
      margin: 0 20px 5px 0;
    `};

    a {
      font-size: 0.75rem;
      color: #5b5b5c;
      text-decoration: none;
      display: flex;
      align-items: center;

      &:before {
        content: "";
        display: block;
        margin-right: 7px;
      }
    }

    &.vk {
      a {
        &:before {
          width: 16px;
          height: 10px;
          background: url(${vk});
        }
      }
    }

    &.fb {
      a {
        &:before {
          width: 8px;
          height: 14px;
          background: url(${fb});
        }
      }
    }

    &.ig {
      a {
        &:before {
          width: 13px;
          height: 13px;
          background: url(${ig});
        }
      }
    }

    &.tw {
      a {
        &:before {
          width: 15px;
          height: 12px;
          background: url(${tw});
        }
      }
    }

    &.vb {
      a {
        &:before {
          width: 14px;
          height: 14px;
          background: url(${vb});
        }
      }
    }
  }
`;

const AppButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.xs`
    flex-direction: row;
    justify-content: flex-start;
    padding: 0 20px;
  `};

  > * + * {
    margin-top: 8px;
    ${media.xs`
      margin-top: 0;
      margin-left: 10px;
    `};
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    width: 138px;
    height: 42px;
    background: #1e292d;
    border-radius: 5px;
    color: #fff;
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;
    position: relative;

    &.apple {
      &:before {
        content: "";
        width: 23px;
        height: 26px;
        position: absolute;
        display: block;
        background: url(${apple}) no-repeat;
        left: 8px;
      }
    }

    &.android {
      &:before {
        content: "";
        width: 22px;
        height: 22px;
        position: absolute;
        display: block;
        background: url(${android}) no-repeat;
        left: 10px;
      }
    }

    &.wmarket {
      &:before {
        content: "";
        width: 21px;
        height: 20px;
        position: absolute;
        display: block;
        background: url(${wmarket}) no-repeat;
        left: 9px;
      }
    }

    span {
      font-size: 0.6rem;
      font-weight: 400;
      display: block;
      margin-bottom: 3px;
    }
  }
`;

const Copyright = styled.div`
  color: #5b5b5c;
  font-size: 0.75rem;
  text-align: center;
  padding: 20px 10px;

  ${media.xs`
    text-align: left;
    padding: 20px;
  `};

  ${media.md`
    margin-top: 20px;
  `};
`;

export default function() {
  const nav = navData.map(function(item, index) {
    return (
      <div key={index} className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
        <Nav data={item} />
      </div>
    );
  });

  const infoLinks = infoLinksData.map(function(item, index) {
    return <Link key={index} data={item} />;
  });

  const socialLinks = socialLinksData.map(function(item, index) {
    return <Link key={index} data={item} />;
  });

  const mainLink = mainLinkData.map(function(item, index) {
    return <Link key={index} data={item} />;
  });
  return (
    <Footer>
      <Container>
        <Links>
          <div className="row">{nav}</div>
        </Links>
        <Info>
          <InfoLeft>
            <InfoList>{infoLinks}</InfoList>
            <SocialLinks>{socialLinks}</SocialLinks>
            <InfoList className="main-link">{mainLink}</InfoList>
          </InfoLeft>
          <InfoRight>
            <AppButtons>
              <a href="http://" className="apple">
                <span>Скачайте в </span>
                App Store
              </a>
              <a href="http://" className="android">
                <span>Скачайте в </span>
                Google Play
              </a>
              <a href="http://" className="wmarket">
                <span>Скачайте в </span>
                Windows Phone
              </a>
            </AppButtons>
            <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
          </InfoRight>
        </Info>
      </Container>
    </Footer>
  );
}
