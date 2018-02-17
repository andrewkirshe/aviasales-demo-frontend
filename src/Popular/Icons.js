import React from "react";
import styled from "styled-components";
import { media } from "../Media";

import anywhere from "./anywhere.svg";
import summer_and_sea from "./summer-and-sea.svg";
import shopping from "./shopping.svg";
import culture from "./culture.svg";
import night_life from "./night-life.svg";
import with_child from "./with-child.svg";

const Icons = styled.div`
  color: #fff;
  text-transform: none;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 0 0 10px;
  text-align: center;
  font-weight: 600;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  ${media.sm`
  `};

  ${media.md`
    margin: 0 0 40px;
  `};
`;

const Icon = styled.div`
  background: #fff;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  padding: 0 0 7px 0;
  flex: 33.3% 1;

  ${media.sm`
      flex: none;
  `};

  ${media.md`

  `};

  &:after {
    opacity: ${props => (props.active ? "1" : "0")};
    content: "";
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
    height: 1px;
    background-image: linear-gradient(270deg, #2f6ec0 0%, #3db0e0 100%);
    box-shadow: 0 2px 14px 0 rgba(90, 137, 163, 0.19);

    ${media.sm`
      left: 0;
      right: 0;
    `};
  }

  ${Icon} {
    box-shadow: ${props =>
      props.active
        ? "0 2px 14px 0 rgba(90, 137, 163, 0.19);"
        : "0px 2px 4px rgba(74, 74, 74, 0.1);"};
  }
`;

const Text = styled.span`
  font-size: 0.625rem;
  max-width: 60px;
  margin-left: auto;
  margin-right: auto;
  color: ${props => (props.active ? "#4A4A4A" : "#00ace2")};
  font-weight: 400;
  line-height: 1.75;
  text-transform: uppercase;
  display: block;
  margin-top: 15px;
`;

const Img = styled.img`
  width: 22px;
  height: 22px;
`;

export default () => {
  return (
    <Icons>
      <Button active>
        <Icon active>
          <Img src={anywhere} alt="Куда угодно" />
        </Icon>
        <Text active>Куда угодно</Text>
      </Button>
      <Button>
        <Icon>
          <Img src={summer_and_sea} alt="Cолнце и море" />
        </Icon>
        <Text>
          Cолнце <br />и море
        </Text>
      </Button>
      <Button>
        <Icon>
          <Img src={shopping} alt="Шопинг, город" />
        </Icon>
        <Text>Шопинг, город</Text>
      </Button>
      <Button>
        <Icon>
          <Img src={culture} alt="Культура и история" />
        </Icon>
        <Text>
          Культура <br />и история
        </Text>
      </Button>
      <Button>
        <Icon>
          <Img src={night_life} alt="Ночная жизнь" />
        </Icon>
        <Text>Ночная жизнь</Text>
      </Button>
      <Button>
        <Icon>
          <Img src={with_child} alt="Отдых с детьми" />
        </Icon>
        <Text>
          Отдых <br />с детьми
        </Text>
      </Button>
    </Icons>
  );
};
