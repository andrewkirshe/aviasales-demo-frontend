import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import calen from "./calen.svg";

const BlockTitle = styled.div`
  color: #fff;
  text-transform: none;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 0 0 40px;
  text-align: center;
  font-weight: 600;
  ${media.sm`
    margin: 0 0 50px;
  `};
`;

const Icon = styled.div`
  margin: 0 auto 20px;
  border-radius: 50%;
  display: block;
  width: 50px;
  height: 50px;
  background: #E2F8FF 50% 50% no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.xs`
    width: 64px;
    height: 64px;
  `};

  &:after {
    content: '';
    background-image: url(${calen});
    background-size: 24px;
    width: 24px;
    height: 24px;

    ${media.xs`
      justify-content: center;
      background-size: 28px;
      width: 28px;
      height: 28px;
    `};
  }
}
`;

const Text = styled.div`
  color: #4a4a4a;
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;

  ${media.sm`
    font-size: 1.5rem;
  `};
`;

export default function() {
  return (
    <BlockTitle>
      <Icon />
      <Text>Лучшие цены на авиабилеты за последний месяц</Text>
    </BlockTitle>
  );
}
