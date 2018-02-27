import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import SearchForm from "../SearchForm";
import LogoRow from "./LogoRow";

const Header = styled.header`
  background: linear-gradient(to left, #196ebd, #01b0dd);
  height: ${props => (props.pathname === "/search" ? "auto" : "100vh")};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const LogoRowWithRouter = withRouter(LogoRow);
const SearchFormWithRouter = withRouter(SearchForm);

export default props => {
  return (
    <Header pathname={props.location.pathname}>
      <LogoRowWithRouter />
      <SearchFormWithRouter />
    </Header>
  );
};
