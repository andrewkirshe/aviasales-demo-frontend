import React from "react";
import styled from "styled-components";
import { media } from "../Media";

import border from "./border.png";
import tw from "./tw.svg";
import fb from "./fb.svg";
import vk from "./vk.svg";
import rss from "./rss.svg";

const Container = styled.div`
  background: url(${border}) top center repeat-x;
  display: none;
  margin: 0 auto;
  padding: 50px 0 40px 0;
  ${media.sm`
    display: flex;
    justify-content: center;
  `};
`;

const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lg`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 1054px;
  `};
`;

const Title = styled.div`
  line-height: 1.4;
  font-weight: 500;
  text-align: center;
  font-weight: bold;
  max-width: 360px;

  ${media.lg`
    text-align: left;
  `};

  span {
    margin-top: 5px;
    display: block;
    font-weight: normal;
  }
`;

const Content = styled.div`
  ${media.lg`
    display: flex;
    align-items: center;
  `};
`;
const Socials = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 25px 0;
  ${media.lg`
    margin: 0 16px 0 0;
  `};

  > * + * {
    margin-left: 6px;
  }

  a {
    font-size: 0;
    color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background: #9b9b9b;

    &:after {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
    }

    &.tw {
      &:after {
        background: url(${tw}) no-repeat;
        background-size: 24px 24px;
      }
    }

    &.fb {
      &:after {
        background: url(${fb}) no-repeat;
        background-size: 24px 24px;
      }
    }

    &.vk {
      &:after {
        background: url(${vk}) no-repeat;
        background-size: 24px 24px;
      }
    }

    &.rss {
      &:after {
        background: url(${rss}) no-repeat;
        background-size: 24px 24px;
      }
    }
  }
`;
const Form = styled.form`
  display: flex;
  border: 1px solid #a0a0a0;
  border-radius: 2px;

  input {
    color: #444;
    height: 34px;
    width: 100%;
    border: none;
    padding: 0 9px;
    border-radius: 2px;
    line-height: 2.125rem;

    &::placeholder {
      color: #a0b0b9;
    }
  }

  button {
    background-color: #ff8e41;
    color: #fff;
    border: 0;
    display: block;
    text-align: center;
    padding: 0 20px;
    margin: 0;
    border-radius: 2px;
    height: 34px;
    line-height: 2.125rem;
  }
`;

export default function() {
  return (
    <Container>
      <Subscribe>
        <Title>
          Хотите знать всё о скидках на авиабилеты?
          <span>
            Вы можете подписаться на нашу рассылку через соцсети или по
            электронной почте.
          </span>
        </Title>
        <Content>
          <Socials>
            <li>
              <a href="http://aviasales.ru" className="tw">
                &bsp;
              </a>
            </li>
            <li>
              <a href="http://aviasales.ru" className="fb">
                &bsp;
              </a>
            </li>
            <li>
              <a href="http://aviasales.ru" className="vk">
                &bsp;
              </a>
            </li>
            <li>
              <a href="http://aviasales.ru" className="rss">
                &bsp;
              </a>
            </li>
          </Socials>
          <Form action="">
            <input type="email" name="email" placeholder="Ваш email" />
            <button>Подписаться</button>
          </Form>
        </Content>
      </Subscribe>
    </Container>
  );
}
