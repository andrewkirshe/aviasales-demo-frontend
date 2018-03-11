import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { media } from "../Media";
import { withRouter } from "react-router";
import Header from "../Header";
import Filter from "./Filter";
import Flights from "./Flights";
import Footer from "../Footer";

const Wrapper = styled.section`
  background: #eaeaea;
  padding: 8px 0 0 0;
  ${media.xl`
    padding: 56px 0 0 0;
  `};
`;

const HeaderWithRouter = withRouter(Header);

export default () => {
  return (
    <div>
      <Helmet>
        <title>Страница поиска</title>
      </Helmet>
      <HeaderWithRouter />
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl-3">
              <Filter />
            </div>
            <div className="col-xs-12 col-xl-7">
              <Flights />
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};
