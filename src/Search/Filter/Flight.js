import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import plane from './plane.svg';
import { translate } from '../../translate';

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 2;
  padding: 0 16px;
`;

const Img = styled.img`
  display: block;
  width: 14px;
  height: 14px;
  margin: 0 5px;
`;

const Flight = props => (
  <Wrapper>
    {translate(props.from)}
    <Img src={plane} alt={`${translate(props.from)} - ${translate(props.to)}`} />
    {translate(props.to)}
  </Wrapper>
);

Flight.propTypes = {
  from: PropTypes.string,
  to: PropTypes.string,
};

Flight.defaultProps = {
  from: '',
  to: '',
};

export default Flight;
