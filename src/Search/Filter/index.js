import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Filter from './Filter';
import FlyDates from './FlyDates';
import FlyDuration from './FlyDuration';
import Reset from './Reset';
import Transfers from './Transfers';
import Airlines from './Airlines';
import { transfers, flyDates, flyDurations, airlines } from './filtersData';

const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
`;

const Filters = (props) => {
  const { origin, destination } = props;

  return (
    <Wrapper>
      <Transfers transfers={transfers} />
      <Filter label="departure-time-and-arrivals" isOpened>
        <FlyDates ranges={flyDates[0].ranges} origin={origin} destination={destination} />
        <FlyDates ranges={flyDates[1].ranges} origin={destination} destination={origin} />
      </Filter>
      <Filter label="baggage" />
      <Filter label="duration-of-transfer" />
      <Filter label="travel-time" isOpened>
        <FlyDuration ranges={flyDurations[0].ranges} origin={origin} destination={destination} />
        <FlyDuration ranges={flyDurations[1].ranges} origin={destination} destination={origin} />
      </Filter>
      <Airlines airlines={airlines} />
      <Filter label="airports" />
      <Filter label="airport-transfer" count={71} />
      <Filter label="agencies" count={26} />
      <Reset />
    </Wrapper>
  );
};

Filters.propTypes = {
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
};

Filters.defaultProps = {
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
};

export default Filters;
