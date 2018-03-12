import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Link = styled.a`
  margin-right: 12px;
  display: block;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Logo = styled.img`
  border: none;
  border-radius: 0;
  padding: 1px 0;
  display: block;

  ${props =>
    props.size === 'small' &&
    css`
      border: solid 1px #dddddd;
      border-radius: 4px;
      padding: 4px;
    `};
`;

const Airline = props => (
  <Link href="http://">
    <Logo
      src={props.size === 'small' ? props.logo.s.x1 : props.logo.l.x1}
      srcSet={props.size === 'small' ? `${props.logo.s.x2} 2x` : `${props.logo.l.x2} 2x`}
      alt={props.name}
      size={props.size}
    />
  </Link>
);

Airline.propTypes = {
  size: PropTypes.string,
  logo: PropTypes.shape({
    s: PropTypes.shape({
      x1: PropTypes.string,
      x2: PropTypes.string,
    }),
    l: PropTypes.shape({
      x1: PropTypes.string,
      x2: PropTypes.string,
    }),
  }),
  name: PropTypes.string,
};

Airline.defaultProps = {
  size: '',
  logo: {
    s: {
      x1: '',
      x2: '',
    },
    l: {
      x1: '',
      x2: '',
    },
  },
  name: '',
};

export default Airline;
