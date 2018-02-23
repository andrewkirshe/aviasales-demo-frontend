import React from "react";
import styled from "styled-components";
import Currency from "./Currency";
import SearchParams from "./SearchParams";
import Back from "./Back";
import logo from "./logo.svg";

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

const Wrapper = styled.div`
  position: ${props => (props.page === "home" ? "absolute" : "relative")};
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding: 12px 0;
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default props => {
  return (
    <Wrapper page={props.page}>
      <div className="container">
        <Layout page={props.page}>
          {props.page === "search" && <Back />}
          <Logo
            href="/"
            className={props.page !== "home" && "hidden-xs hidden-sm"}
          >
            <Img src={logo} alt="logo" />
            <Name className="hidden-xs hidden-sm">Aviasales</Name>
          </Logo>
          {props.page === "search" && <SearchParams />}
          {props.page !== "home" && <Currency />}
        </Layout>
      </div>
    </Wrapper>
  );
};
