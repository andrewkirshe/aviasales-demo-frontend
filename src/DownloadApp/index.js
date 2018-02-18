import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import phone from "./phone.png";
import rating from "./rating.svg";
import apple from "./apple.svg";
import android from "./android.svg";
import wf from "./wf.svg";

const DownloadApp = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
`;

const Apps = styled.div`
  position: relative;
  padding: 26px 10px 10px 10px;

  ${media.xl`
    padding: 46px 10px 28px 10px;
  `};
`;

const Phone = styled.img`
  position: absolute;
  width: 162px;
  left: 0;
  bottom: 0;
  ${media.sm`
    width: 237px;
  `};

  ${media.lg`
    width: 267px;
  `};
`;

const Title = styled.h2`
  font-size: 1.25rem;
  line-height: 1.4;
  margin: 0 auto 12px;
  font-weight: 600;
  text-align: center;
  color: #fff;

  ${media.sm`
    margin-left: 248px;
    text-align: left;
  `};

  ${media.md`
    font-size: 2rem;
    margin-top: 25px;
  `};

  ${media.lg`
    margin-top: 30px;
    margin-left: 278px;
  `};
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.sm`
    margin-left: 248px;
    justify-content: flex-start;
  `};

  ${media.lg`
    margin-left: 278px;
  `};
`;

const Stars = styled.img`
  margin-right: 10px;
`;

const RatingDesc = styled.p`
  font-size: 0.75rem;
  color: #fff;
  margin: 3px 0 0 0;

  ${media.md`
      font-size: 0.875rem;
    `};
`;

const Links = styled.div`
  padding: 0;
  list-style: none;
  margin: 60px 0 30px 158px;

  ${media.sm`
    margin: 20px 0 30px 248px;;
  `};

  ${media.md`
    display: flex;
    align-items: center;
    margin: 20px 0 52px 248px;
  `};

  ${media.lg`
    margin: 50px 0 62px 278px;
  `};
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.875rem;
  text-decoration: none;
  margin-bottom: 25px;

  ${media.md`
    margin-bottom: 0;
    margin-right: 20px;
    padding-right: 20px;
    border-right: solid 1px rgba(255,255,255, 0.5);
  `};

  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
    padding-right: 0;
    border-right: none;
  }
`;

const Icon = styled.img`
  margin-right: 10px;
`;

const Name = styled.p`
  margin: 3px 0 0 0;
`;

export default () => {
  return (
    <DownloadApp>
      <div className="container">
        <div className="row center-lg">
          <div className="col-sm-12 col-lg-11 col-xl-10 start-lg">
            <Apps>
              <Phone
                src={phone}
                alt="Скачай мобильное приложение Aviasales.ru"
              />
              <Title>Скачай мобильное приложение Aviasales.ru</Title>
              <Rating>
                <Stars src={rating} alt="Более 103 000 оценок" />
                <RatingDesc>Более 103 000 оценок</RatingDesc>
              </Rating>
              <Links>
                <Link href="http://">
                  <Icon src={apple} alt="iPhone или iPad" />
                  <Name>iPhone или iPad</Name>
                </Link>
                <Link href="http://">
                  <Icon src={android} alt="Android" />
                  <Name>Android</Name>
                </Link>
                <Link href="http://">
                  <Icon src={wf} alt="Windows Phone" />
                  <Name>Windows Phone</Name>
                </Link>
              </Links>
            </Apps>
          </div>
        </div>
      </div>
    </DownloadApp>
  );
};
