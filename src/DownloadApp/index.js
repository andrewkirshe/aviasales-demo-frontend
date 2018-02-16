import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import iphone from "./iphone.png";
import rating from "./rating.svg";
import apple from "./apple.svg";
import android from "./android.svg";
import wf from "./wf.svg";

const Container = styled.div`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
`;

const Apps = styled.div`
  position: relative;
  padding: 26px 10px 10px 10px;

  ${media.sm`
    margin: auto;
    max-width: 758px;
  `};

  ${media.md`
    max-width: 985px;
  `};
`;

const Iphone = styled.div`
  position: absolute;
  background: url(${iphone});
  background-size: cover;
  width: 162px;
  height: 207px;
  left: 0;
  bottom: 0;
  ${media.xs`
    width: 237px;
    height: 312px;
  `};
`;
const Title = styled.div`
  font-size: 1.25rem;
  line-height: 1.4;
  margin: 0 auto 12px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  ${media.xs`
    margin-left: 248px;
    text-align: left;
    max-width: 300px;
  `};

  ${media.sm`
    font-size: 2rem;
    max-width: 470px;
    margin-top: 25px;
  `};

  ${media.md`
    max-width: 1550px;
    margin-top: 30px;
    margin-left: 298px;
  `};
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.xs`
    margin-left: 248px;
    justify-content: flex-start;
  `};

  ${media.md`
    margin-left: 298px;
  `};

  img {
    margin-right: 10px;
  }

  span {
    font-size: 0.75rem;
    color: #fff;
    margin-top: 3px;

    ${media.sm`
      font-size: 0.875rem;
    `};
  }
`;
const List = styled.ul`
  padding: 0;
  list-style: none;
  margin: 60px 0 30px 158px;
  ${media.xs`
    margin: 20px 0 30px 248px;;
  `};

  ${media.sm`
    display: flex;
    align-items: center;
    margin: 20px 0 52px 248px;
  `};

  ${media.md`
    margin: 50px 0 62px 298px;
  `};
`;
const Li = styled.li`
  display: block;

  a {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 0.875rem;
    text-decoration: none;

    img {
      margin-right: 10px;
    }

    span {
      margin-top: 3px;
    }
  }

  & + li {
    margin-top: 25px;
    ${media.sm`
      margin-top: 0;
      margin-left: 20px;
      padding-left: 20px;
      border-left: solid 1px rgba(255,255,255, 0.5);
    `};
  }
`;

export default function() {
  return (
    <Container>
      <Apps>
        <Iphone />
        <Title>Скачай мобильное приложение Aviasales.ru</Title>
        <Rating>
          <img src={rating} alt="Более 103 000 оценок" />
          <span>Более 103 000 оценок</span>
        </Rating>
        <List>
          <Li>
            <a href="http://">
              <img src={apple} alt="iPhone или iPad" />
              <span>iPhone или iPad</span>
            </a>
          </Li>
          <Li>
            <a href="http://">
              <img src={android} alt="Android" />
              <span>Android</span>
            </a>
          </Li>
          <Li>
            <a href="http://">
              <img src={wf} alt="Windows Phone" />
              <span>Windows Phone</span>
            </a>
          </Li>
        </List>
      </Apps>
    </Container>
  );
}
