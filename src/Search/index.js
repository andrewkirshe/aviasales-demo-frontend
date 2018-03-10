import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { media } from '../Media';
import Header from '../Header';
import Filter from './Filter';
import Flights from './Flights';
import Footer from '../Footer';

const Wrapper = styled.section`
  background: #eaeaea;
  padding: 8px 0 0 0;
  ${media.xl`
    padding: 56px 0 0 0;
  `};
`;

const HeaderWithRouter = withRouter(Header);

const Search = (props) => {
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
        <title>Страница поиска</title>
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
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl-3">
              <Filter
                fromDate={fromDate}
                toDate={toDate}
                origin={origin}
                destination={destination}
              />
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

Search.propTypes = {
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

Search.defaultProps = {
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

export default Search;
