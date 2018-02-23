import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import back from "./back.svg";

const Button = styled.a`
  background: none;
  border: none;
  padding: 10px 15px 10px 0;
  margin-right: 10px;
  ${media.md`
    display: none;
  `};
`;

const Icon = styled.img`
  display: block;
`;

export default () => {
  return (
    <Button href="/">
      <Icon src={back} alt="Назад" />
    </Button>
  );
};
