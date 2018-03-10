import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'rc-slider/assets/index.css';
import Flight from './Flight';
import RangeDuration from './RangeDuration';

const Wrapper = styled.div``;

const FlyDuration = props => (
  <Wrapper>
    {props.origin.city &&
      props.destination.city && <Flight from={props.origin.city} to={props.destination.city} />}
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
  ranges: PropTypes.arrayOf(PropTypes.shape),
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

FlyDuration.defaultProps = {
  ranges: [],
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

export default FlyDuration;
