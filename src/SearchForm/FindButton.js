import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { media } from '../Media';
import aero from './aero.svg';

const Button = styled(Link)`
  font-weight: 900;
  position: relative;
  background-color: #ff8e41;
  border: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  line-height: 3.5rem;
  font-size: 1.375rem;
  margin: 0 auto;
  margin-top: 0;
  padding: 0 22px;
  max-width: 308px;
  width: 100%;
  text-decoration: none;

  ${media.sm`
    font-size: 1.25rem;
    flex: 50% 1;
    line-height: 1.5rem;
    margin: 1px;
    border-bottom-right-radius: 3px;
  `};

  ${media.xl`
    margin-top: 0;
    white-space: nowrap;
    border-radius: 4px;
    flex: 46% 1;
  `};
`;

const Find = styled.div`
  width: 100%;
  display: flex;

  ${media.sm`
    flex: 50% 1;
  `};

  ${media.xl`
    flex: 46% 1;
    margin-left: 15px;
    ${props =>
    props.headerSize === 'full' &&
      css`
        margin-left: 0;
      `};
  `};

  ${Button} {
    ${props =>
    props.headerSize === 'full' &&
      css`
        border-radius: 4px;
        margin-top: 16px;
      `};

    ${media.sm`
      ${props =>
    props.headerSize === 'full' &&
        css`
          font-size: 1.75rem;
          flex: none;
          line-height: 4rem;
          margin: auto;
          margin-top: 32px;
        `};
    `};

    ${media.xl`
      ${props =>
    props.headerSize === 'full' &&
        css`
          margin-top: 48px;
          margin-left: auto;
          flex: none;
        `};
    `};
  }
`;

const Img = styled.img`
  width: 26px;
  height: 21px;
  margin-left: 16px;
  display: block;
`;

const FindButton = props => (
  <Find headerSize={props.headerSize}>
    <Button to="/search">
      Найти билеты
      {props.headerSize === 'full' && <Img src={aero} alt="Найти билеты" />}
    </Button>
  </Find>
);

FindButton.propTypes = {
  headerSize: PropTypes.string,
};

FindButton.defaultProps = {
  headerSize: '',
};

export default FindButton;
