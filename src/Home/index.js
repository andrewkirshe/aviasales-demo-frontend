import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Header";
import Popular from "../Popular";
import BestPrice from "../BestPrice";
import CheapTickets from "../CheapTickets";
import Subscribe from "../Subscribe";
import SpecialOffers from "../SpecialOffers";
import Faq from "../Faq";
import DownloadApp from "../DownloadApp";
import Footer from "../Footer";

export default () => {
  return (
    <div>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <Header page="home" />
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
};
