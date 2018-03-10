import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm';
import LogoRow from './LogoRow';

const HeaderWrapper = styled.header`
  background: linear-gradient(to left, #196ebd, #01b0dd);
  height: ${props => (props.headerSize === 'full' ? '100vh' : 'auto')};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const pages = {
  '/': 'full',
  '/search': 'small',
};

const Header = (props) => {
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
    <HeaderWrapper headerSize={pages[props.location.pathname]}>
      <LogoRow
        headerSize={pages[props.location.pathname]}
        fromDate={fromDate}
        toDate={toDate}
        origin={origin}
        destination={destination}
        passengersCount={adults + childs + infants}
      />
      <SearchForm
        headerSize={pages[props.location.pathname]}
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
    </HeaderWrapper>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  setSearchParams: PropTypes.func,
  fromDate: PropTypes.instanceOf(Date),
  toDate: PropTypes.instanceOf(Date),
  enteredToDate: PropTypes.instanceOf(Date),
  origin: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    code: PropTypes.string,
  }),
  destination: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    code: PropTypes.string,
  }),
  adults: PropTypes.number,
  childs: PropTypes.number,
  infants: PropTypes.number,
  grade: PropTypes.string,
};

Header.defaultProps = {
  location: {
    pathname: '/',
  },
  setSearchParams: () => {},
  fromDate: {},
  toDate: {},
  enteredToDate: {},
  origin: {
    city: '',
    country: '',
    code: '',
  },
  destination: {
    city: '',
    country: '',
    code: '',
  },
  adults: 1,
  childs: 0,
  infants: 0,
  grade: '',
};

export default Header;
