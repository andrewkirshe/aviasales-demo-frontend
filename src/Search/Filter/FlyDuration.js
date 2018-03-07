import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'rc-slider/assets/index.css';
import Flight from './Flight';
import RangeDuration from './RangeDuration';

const Wrapper = styled.div``;

const FlyDuration = props => (
  <Wrapper>
    {props.flight && <Flight from={props.flight.from} to={props.flight.to} />}
    {props.ranges.map(range => (
      <RangeDuration
        key={range.id}
        notes={range.notes}
        fromLabel={range.fromLabel}
        toLabel={range.toLabel}
        fromTime={range.fromTime}
        toTime={range.toTime}
      />
    ))}
  </Wrapper>
);

FlyDuration.propTypes = {
  flight: PropTypes.objectOf(PropTypes.string),
  ranges: PropTypes.arrayOf(PropTypes.shape),
};

FlyDuration.defaultProps = {
  flight: {},
  ranges: [],
};

export default FlyDuration;
