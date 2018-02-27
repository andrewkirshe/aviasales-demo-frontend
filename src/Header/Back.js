import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import { Link } from "react-router-dom";
import back from "./back.svg";

const Button = styled(Link)`
  background: none;
  border: none;
  padding: 10px 15px 10px 0;
  margin-right: 10px;
  text-decoration: none;
  ${media.md`
    display: none;
  `};
`;

const Icon = styled.img`
  display: block;
`;

export default () => {
  return (
    <Button to="/">
      <Icon src={back} alt="Назад" />
    </Button>
  );
};