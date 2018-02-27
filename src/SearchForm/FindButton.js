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
  border-radius: ${props => (props.pathname === "/" ? "4px" : "0")};
  line-height: 3.5rem;
  font-size: 1.375rem;
  width: 100%;
  margin: 0 auto;
  margin-top: ${props => (props.pathname === "/" ? "16px" : "0")};
  padding: 0 20px;
  max-width: 308px;
  text-decoration: none;

  ${media.sm`
    font-size: ${props => (props.pathname === "/" ? "1.75rem" : "1.25rem")};
    flex: ${props => (props.pathname === "/" ? "none" : "50% 1")};
    line-height: ${props => (props.pathname === "/" ? "4rem" : "1.5rem")};
    margin: ${props => (props.pathname === "/" ? "auto" : "1px")};
    margin-top: ${props => (props.pathname === "/" ? "32px" : "1px")};
    border-bottom-right-radius: 3px;
  `};

  ${media.xl`
    margin-top: ${props => (props.pathname === "/" ? "48px" : "0")};
    white-space: nowrap;
    margin-left: ${props => (props.pathname === "/" ? "auto" : "16px")};
    border-radius: 4px;
    flex: ${props => (props.pathname === "/" ? "none" : "46% 1")};
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
    <Button to="/search" pathname={props.pathname}>
      Найти билеты
      {props.pathname === "/" && <Img src={aero} alt="Найти билеты" />}
    </Button>
  );
};
