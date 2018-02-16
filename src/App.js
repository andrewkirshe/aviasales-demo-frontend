import React, { Component } from "react";
// import styled from "styled-components";
import Header from "./Header/index";
import SearchForm from "./SearchForm";
import Popular from "./Popular";
import BestPrice from "./BestPrice";
import CheapTickets from "./CheapTickets";
import Subscribe from "./Subscribe";
import SpecialOffers from "./SpecialOffers";
import Faq from "./Faq";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";
import "normalize.css";
import "roboto-fontface";
import "flexboxgrid2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm />
        <Popular />
        <BestPrice />
        <CheapTickets />
        <Subscribe />
        <SpecialOffers />
        <Faq />
        <DownloadApp />
        <Footer />
      </div>
    );
  }
}

export default App;
