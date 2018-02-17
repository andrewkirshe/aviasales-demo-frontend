import React from "react";
import styled from "styled-components";
import { media } from "../Media";

import anywhere from "./anywhere.svg";
import summer_and_sea from "./summer-and-sea.svg";
import shopping from "./shopping.svg";
import culture from "./culture.svg";
import night_life from "./night-life.svg";
import with_child from "./with-child.svg";

const IconsList = styled.ul`
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
  justify-content: space-between;

  ${media.xs`
    justify-content: center;
  `};

  ${media.sm`
    margin: 0 0 40px;
  `};
`;

const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 33.3%;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 7px;

  ${media.xs`
    min-width: 90px;
  `};

  ${media.sm`
    min-width: 100px;
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
      left: 20px;
      right: 20px;
    `};
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

const Icon = styled.div`
  box-shadow: ${props =>
    props.active
      ? "0 2px 14px 0 rgba(90, 137, 163, 0.19)"
      : "0px 2px 4px rgba(74, 74, 74, 0.1)"};
  background: #fff;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 22px;
  height: 22px;
`;

export default function() {
  return (
    <IconsList>
      <Li active>
        <Icon active>
          <Img src={anywhere} alt="Куда угодно" />
        </Icon>
        <Text active>Куда угодно</Text>
      </Li>
      <Li>
        <Icon>
          <Img src={summer_and_sea} alt="Cолнце и море" />
        </Icon>
        <Text>
          Cолнце <br />и море
        </Text>
      </Li>
      <Li>
        <Icon>
          <Img src={shopping} alt="Шопинг, город" />
        </Icon>
        <Text>Шопинг, город</Text>
      </Li>
      <Li>
        <Icon>
          <Img src={culture} alt="Культура и история" />
        </Icon>
        <Text>
          Культура <br />и история
        </Text>
      </Li>
      <Li>
        <Icon>
          <Img src={night_life} alt="Ночная жизнь" />
        </Icon>
        <Text>Ночная жизнь</Text>
      </Li>
      <Li>
        <Icon>
          <Img src={with_child} alt="Отдых с детьми" />
        </Icon>
        <Text>
          Отдых <br />с детьми
        </Text>
      </Li>
    </IconsList>
  );
}
