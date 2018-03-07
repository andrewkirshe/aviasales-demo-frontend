import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Flight from './Flight';
import RangeDates from './RangeDates';

const Wrapper = styled.div``;

const FlyDates = props => (
  <Wrapper>
    {props.flight && <Flight from={props.flight.from} to={props.flight.to} />}
    {props.ranges.map(range => (
      <RangeDates
        key={range.id}
        notes={range.notes}
        fromLabel={range.fromLabel}
        toLabel={range.toLabel}
        fromDate={range.fromDate}
        toDate={range.toDate}
      />
    ))}
  </Wrapper>
);

FlyDates.propTypes = {
  flight: PropTypes.objectOf(PropTypes.string),
  ranges: PropTypes.arrayOf(PropTypes.shape),
};

FlyDates.defaultProps = {
  flight: {},
  ranges: [],
};

export default FlyDates;
