import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import compass from "./compass.svg";
import edit from "./edit.svg";

const BlockTitle = styled.div`
  color: #fff;
  text-transform: none;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 0 0 20px;
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
    background-image: url(${compass});
    background-size: 32px;
    width: 32px;
    height: 32px;

    ${media.xs`
      justify-content: center;
      background-size: 38px;
      width: 38px;
      height: 38px;
    `};
  }
}
`;

const Text = styled.p`
  color: #4a4a4a;
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
  max-width: 450px;
  margin: auto;
  ${media.sm`
    font-size: 1.5rem;
  `};
`;

const Button = styled.button`
  color: #00ace2;
  font-weight: normal;
  position: relative;
  padding: 0 24px 0 0;
  border: none;
  background: transparent;
  display: block;
  margin: auto;

  ${media.sm`
    font-size: 1.5rem;
    display: inline-block;
  `};

  &:after {
    content: "";
    background-image: url(${edit});
    width: 16px;
    height: 16px;
    background-size: 16px;
    display: block;
    position: absolute;
    cursor: pointer;
    top: 50%;
    margin-top: -10px;
    right: 0;
  }
`;

export default function() {
  return (
    <BlockTitle>
      <Icon />
      <Text>
        Популярные направления перелетов из города <Button>Москва</Button>
      </Text>
    </BlockTitle>
  );
}
