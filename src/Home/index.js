import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Header from '../Header';
import Popular from '../Popular';
import BestPrice from '../BestPrice';
import CheapTickets from '../CheapTickets';
import Subscribe from '../Subscribe';
import SpecialOffers from '../SpecialOffers';
import Faq from '../Faq';
import DownloadApp from '../DownloadApp';
import Footer from '../Footer';

const HeaderWithRouter = withRouter(Header);

const Home = (props) => {
  const {
    fromDate,
    toDate,
    enteredToDate,
    origin,
    destination,
    adults,
    childs,
    infants,
    setSearchParams,
    grade,
  } = props;

  return (
    <div>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <HeaderWithRouter
        setSearchParams={setSearchParams}
        fromDate={fromDate}
        toDate={toDate}
        enteredToDate={enteredToDate}
        origin={origin}
        destination={destination}
        adults={adults}
        childs={childs}
        infants={infants}
        grade={grade}
      />
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

Home.propTypes = {
  setSearchParams: PropTypes.func,
  fromDate: PropTypes.objectOf(PropTypes.shape),
  toDate: PropTypes.objectOf(PropTypes.shape),
  enteredToDate: PropTypes.objectOf(PropTypes.shape),
  origin: PropTypes.objectOf(PropTypes.shape),
  destination: PropTypes.objectOf(PropTypes.shape),
  adults: PropTypes.number,
  childs: PropTypes.number,
  infants: PropTypes.number,
  grade: PropTypes.string,
};

Home.defaultProps = {
  setSearchParams: () => {},
  fromDate: {},
  toDate: {},
  enteredToDate: {},
  origin: {},
  destination: {},
  adults: 1,
  childs: 0,
  infants: 0,
  grade: '',
};

export default Home;
