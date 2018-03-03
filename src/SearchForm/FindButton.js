import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../Media";
import aero from "./aero.svg";

const Button = styled(Link)`
  font-weight: 900;
  position: relative;
  background-color: #ff8e41;
  border: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  line-height: 3.5rem;
  font-size: 1.375rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 0;
  padding: 0 20px;
  max-width: 308px;
  text-decoration: none;

  ${props =>
    props.headersize === "full" &&
    css`
      border-radius: 4px;
      margin-top: 16px;
    `};

  ${media.sm`
    font-size: 1.25rem;
    flex: 50% 1;
    line-height: 1.5rem;
    margin: 1px;
    border-bottom-right-radius: 3px;

    ${props =>
      props.headersize === "full" &&
      css`
        font-size: 1.75rem;
        flex: none;
        line-height: 4rem;
        margin: auto;
        margin-top: 32px;
      `};
  `};

  ${media.xl`
    margin-top: 0;
    white-space: nowrap;
    margin-left: 15px;
    border-radius: 4px;
    flex: 46% 1;

    ${props =>
      props.headersize === "full" &&
      css`
        margin-top: 48px;
        margin-left: auto;
        flex: none;
      `};
  `};
`;

const Img = styled.img`
  width: 26px;
  height: 21px;
  margin-left: 16px;
  display: block;
`;

export default props => {
  return (
    <Button to="/search" headersize={props.headerSize}>
      Найти билеты
      {props.headerSize === "full" && <Img src={aero} alt="Найти билеты" />}
    </Button>
  );
};
