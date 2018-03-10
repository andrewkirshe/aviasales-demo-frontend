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
      <Filter label="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" isOpened>
        <FlyDates ranges={flyDates[0].ranges} origin={origin} destination={destination} />
        <FlyDates ranges={flyDates[1].ranges} origin={destination} destination={origin} />
      </Filter>
      <Filter label="Багаж" />
      <Filter label="Длительность пересадки" />
      <Filter label="Время в пути" isOpened>
        <FlyDuration ranges={flyDurations[0].ranges} origin={origin} destination={destination} />
        <FlyDuration ranges={flyDurations[1].ranges} origin={destination} destination={origin} />
      </Filter>
      <Airlines airlines={airlines} />
      <Filter label="Аэропорты" />
      <Filter label="Аэропорт пересадки" count={71} />
      <Filter label="Агенства" count={26} />
      <Reset />
    </Wrapper>
  );
};

Filters.propTypes = {
  origin: PropTypes.objectOf(PropTypes.shape),
  destination: PropTypes.objectOf(PropTypes.shape),
};

Filters.defaultProps = {
  origin: {},
  destination: {},
};

export default Filters;
