import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Header = styled.header`
  position: absolute;
  padding: 12px;
  top: 0;
  left: 0;
  right: 0;
  background: #01b0dd;
  background: -o-linear-gradient(right, #196ebd, #01b0dd);
  background: linear-gradient(to left, #196ebd, #01b0dd);
  display: flex;
  justify-content: space-between;
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

const Title = styled.span`
  font-size: 1.25rem;
  text-transform: lowercase;
`;

export default function() {
  return (
    <Header>
      <div className="container-wrap">
        <Logo href="">
          <Img src={logo} alt="logo" />
          <Title className="hidden-xs hidden-sm">Aviasales</Title>
        </Logo>
      </div>
    </Header>
  );
}
