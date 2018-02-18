import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Header = styled.header`
  position: absolute;
  padding: 12px 0;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to left, #196ebd, #01b0dd);
`;

const Logo = styled.a`
  display: block;
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  margin-right: 12px;
`;

const Name = styled.span`
  font-size: 1.25rem;
  text-transform: lowercase;
`;

export default () => {
  return (
    <Header>
      <div className="container">
        <Logo href="">
          <Img src={logo} alt="logo" />
          <Name className="hidden-xs hidden-sm">Aviasales</Name>
        </Logo>
      </div>
    </Header>
  );
};
