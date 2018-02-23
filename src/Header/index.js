import React from "react";
import styled from "styled-components";
import SearchForm from "../SearchForm";
import LogoRow from "./LogoRow";

const Header = styled.header`
  background: linear-gradient(to left, #196ebd, #01b0dd);
  height: ${props => (props.page === "home" ? "100vh" : "auto")};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default props => {
  return (
    <Header page={props.page}>
      <LogoRow page={props.page} />
      <SearchForm page={props.page} />
    </Header>
  );
};
