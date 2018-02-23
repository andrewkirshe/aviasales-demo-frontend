import React from "react";
import styled from "styled-components";
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
  border-radius: ${props => (props.page === "home" ? "4px" : "0")};
  line-height: 3.5rem;
  font-size: 1.375rem;
  width: 100%;
  margin: 0 auto;
  margin-top: ${props => (props.page === "home" ? "16px" : "0")};
  padding: 0 20px;
  max-width: 308px;
  text-decoration: none;

  ${media.sm`
    font-size: ${props => (props.page === "home" ? "1.75rem" : "1.25rem")};
    flex: ${props => (props.page === "home" ? "none" : "50% 1")};
    line-height: ${props => (props.page === "home" ? "4rem" : "1.5rem")};
    margin: ${props => (props.page === "home" ? "auto" : "1px")};
    margin-top: ${props => (props.page === "home" ? "32px" : "1px")};
    border-bottom-right-radius: 3px;
  `};

  ${media.xl`
    margin-top: ${props => (props.page === "home" ? "48px" : "0")};
    white-space: nowrap;
    margin-left: ${props => (props.page === "home" ? "auto" : "16px")};
    border-radius: 4px;
    flex: ${props => (props.page === "home" ? "none" : "46% 1")};
  `};
`;

const Img = styled.img`
  width: 26px;
  height: 21px;
  margin-left: 16px;
  display: ${props => (props.page === "home" ? "block" : "none")};
`;

export default props => {
  return (
    <Button to="/search" page={props.page}>
      Найти билеты
      <Img src={aero} alt="Найти билеты" page={props.page} />
    </Button>
  );
};
