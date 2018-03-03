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

const footerNavsData = [
  {
    title: "Countries",
    links: [
      {
        text: "Russia",
        url: "http://aviasales.ru"
      },
      {
        text: "Thailand",
        url: "http://aviasales.ru"
      },
      {
        text: "Montenegro",
        url: "http://aviasales.ru"
      },
      {
        text: "Cyprus",
        url: "http://aviasales.ru"
      },
      {
        text: "Bulgaria",
        url: "http://aviasales.ru"
      },
      {
        text: "Georgia",
        url: "http://aviasales.ru"
      }
    ],
    all: {
      text: "All countries",
      url: "http://aviasales.ru"
    }
  },
  {
    title: "Cities",
    links: [
      {
        text: "Moscow",
        url: "http://aviasales.ru"
      },
      {
        text: "St. Petersburg",
        url: "http://aviasales.ru"
      },
      {
        text: "Simferopol",
        url: "http://aviasales.ru"
      },
      {
        text: "Adler",
        url: "http://aviasales.ru"
      },
      {
        text: "Ekaterinburg",
        url: "http://aviasales.ru"
      },
      {
        text: "London",
        url: "http://aviasales.ru"
      }
    ],
    all: {
      text: "All cities",
      url: "http://aviasales.ru"
    }
  },
  {
    title: "Airlines",
    links: [
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
      text: "All airlines",
      url: "http://aviasales.ru"
    }
  },
  {
    title: "Airports",
    links: [
      {
        text: "Sheremetyevo",
        url: "http://aviasales.ru"
      },
      {
        text: "Kurumoch",
        url: "http://aviasales.ru"
      },
      {
        text: "Domodedovo",
        url: "http://aviasales.ru"
      },
      {
        text: "Tolmachevo",
        url: "http://aviasales.ru"
      },
      {
        text: "Vladivostok",
        url: "http://aviasales.ru"
      },
      {
        text: "Hamburg",
        url: "http://aviasales.ru"
      }
    ],
    all: {
      text: "All airports",
      url: "http://aviasales.ru"
    }
  },
  {
    title: "Directions",
    links: [
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
    title: "Services",
    links: [
      {
        text: "Flight tickets",
        url: "http://aviasales.ru"
      },
      {
        text: "Low price calendar",
        url: "http://aviasales.ru"
      },
      {
        text: "Low price map",
        url: "http://aviasales.ru"
      },
      {
        text: "Special offers",
        url: "http://aviasales.ru"
      },
      {
        text: "Price table",
        url: "http://aviasales.ru"
      },
      {
        text: "Blog",
        url: "http://aviasales.ru"
      },
      {
        text: "Help",
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
    icon: vk,
    text: "Вконтакте",
    url: "http://aviasales.ru"
  },
  {
    icon: fb,
    text: "Фейсбук",
    url: "http://aviasales.ru"
  },
  {
    icon: ig,
    text: "Инстаграм",
    url: "http://aviasales.ru"
  },
  {
    icon: tw,
    text: "Твиттер",
    url: "http://aviasales.ru"
  },
  {
    icon: vb,
    text: "Вайбер",
    url: "http://aviasales.ru"
  }
];

const Footer = styled.footer`
  overflow: hidden;
`;

const Navs = styled.div`
  padding: 30px 0 0 0;
  position: relative;
`;
const Info = styled.div`
  padding: 0;
  ${media.lg`
    display: flex;
    padding: 35px 0 0 0;
    justify-content: space-between;
  `};
`;
const InfoLeft = styled.div``;
const InfoRight = styled.div``;
const InfoList = styled.ul`
  list-style: none;
  padding: 20px 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;

  ${media.lg`
    padding-top: 0;
  `};
`;

const MainLinkWrap = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 10px 0;
  ${media.md`
    margin-bottom: 20px;
    margin-top: 10px;
    text-align: left;
  `};
`;

const MainLink = styled.a`
  font-size: 0.75rem;
  color: #5b5b5c;
  text-decoration: none;

  ${media.lg`
    margin-top: 20px;
  `};
`;

const SocialLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 0 0 0;
`;

const AppLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.md`
    flex-direction: row;
    justify-content: flex-start;
  `};
`;

const App = styled.a`
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
  margin-bottom: 8px;

  ${media.md`
    margin-bottom: 0;
    margin-right: 10px;
  `};

  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
`;

const Icon = styled.img`
  width: 23px;
  height: 26px;
  position: absolute;
  left: 8px;
`;

const Small = styled.span`
  font-size: 0.6rem;
  font-weight: 400;
  display: block;
  margin-bottom: 3px;
`;

const Divider = styled.hr`
  margin: 0;
  border: none;
  border-bottom: 1px solid #e0e6e8;
`;

const Copyright = styled.div`
  color: #5b5b5c;
  font-size: 0.75rem;
  text-align: center;
  padding: 20px 10px;

  ${media.md`
    text-align: left;
    padding: 20px 0;
  `};

  ${media.lg`
    margin-top: 20px;
    text-align: right;
  `};
`;

export default () => {
  const footerNavs = footerNavsData.map((nav, index) => {
    return (
      <div key={index} className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
        <Nav title={nav.title} links={nav.links} all={nav.all} />
      </div>
    );
  });

  const infoLinks = infoLinksData.map((link, index) => {
    return <Link key={index} text={link.text} url={link.url} />;
  });

  const socialLinks = socialLinksData.map((link, index) => {
    return (
      <Link key={index} icon={link.icon} text={link.text} url={link.url} />
    );
  });

  return (
    <Footer>
      <div className="container">
        <Navs>
          <div className="row">{footerNavs}</div>
        </Navs>
      </div>
      <Divider />
      <div className="container">
        <Info>
          <InfoLeft>
            <InfoList>{infoLinks}</InfoList>
            <SocialLinks>{socialLinks}</SocialLinks>
            <MainLinkWrap>
              <MainLink href="http://aviasales.ru">
                Поиск и бронирование отелей
              </MainLink>
            </MainLinkWrap>
          </InfoLeft>
          <InfoRight>
            <AppLinks>
              <App href="http://">
                <Icon src={apple} alt="App Store" />
                <Small>Скачайте в </Small>
                App Store
              </App>
              <App href="http://">
                <Icon src={android} alt="Google Play" />
                <Small>Скачайте в </Small>
                Google Play
              </App>
              <App href="http://">
                <Icon src={wmarket} alt="Windows Phone" />
                <Small>Скачайте в </Small>
                Windows Phone
              </App>
            </AppLinks>
            <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
          </InfoRight>
        </Info>
      </div>
    </Footer>
  );
};
