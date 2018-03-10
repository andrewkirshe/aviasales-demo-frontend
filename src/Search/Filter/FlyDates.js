import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Flight from './Flight';
import RangeDates from './RangeDates';

const Wrapper = styled.div``;

const FlyDates = props => (
  <Wrapper>
    {props.origin.city &&
      props.destination.city && <Flight from={props.origin.city} to={props.destination.city} />}
    <RangeDates
      notes="Вылет из "
      city={props.origin.city}
      fromLabel="c"
      toLabel="до"
      fromDate={props.ranges[0].fromDate}
      toDate={props.ranges[0].toDate}
    />
    <RangeDates
      notes="Прибытие в "
      city={props.destination.city}
      fromLabel="c"
      toLabel="до"
      fromDate={props.ranges[1].fromDate}
      toDate={props.ranges[1].toDate}
    />
  </Wrapper>
);

FlyDates.propTypes = {
  ranges: PropTypes.arrayOf(PropTypes.shape),
  fromDate: PropTypes.objectOf(PropTypes.shape),
  toDate: PropTypes.objectOf(PropTypes.shape),
  origin: PropTypes.objectOf(PropTypes.shape),
  destination: PropTypes.objectOf(PropTypes.shape),
};

FlyDates.defaultProps = {
  ranges: [],
  fromDate: {},
  toDate: {},
  origin: {},
  destination: {},
};

export default FlyDates;
