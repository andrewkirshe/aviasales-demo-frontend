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
  ranges: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    notes: PropTypes.string,
    fromLabel: PropTypes.string,
    fromDate: PropTypes.number,
    toLabel: PropTypes.string,
    toDate: PropTypes.number,
  })),
  fromDate: PropTypes.number,
  toDate: PropTypes.number,
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

FlyDates.defaultProps = {
  ranges: [],
  fromDate: 0,
  toDate: 0,
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

export default FlyDates;
