import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import clear from './clear.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: #f1fcff;
  }
`;

const Name = styled.button`
  padding: 18px 16px 17px 34px;
  background: 0;
  border: 0;
  position: relative;
  font-size: 0.75rem;
  flex: 1 1;
  text-align: left;
  text-transform: uppercase;
  outline: none;

  &:after {
    content: '';
    display: block;
    line-height: 0;
    height: 0;
    border: 5px transparent solid;
    border-top-color: #a0b0b9;
    position: absolute;
    left: 19px;
    top: 18px;
    transform: rotate(-90deg);

    ${props =>
    props.isOpened &&
      css`
        left: 16px;
        top: 21px;
        transform: rotate(0);
      `};
  }
`;

const Reset = styled.button`
  padding: 12px 16px;
  background: 0;
  border: 0;
`;

const Icon = styled.img`
  display: block;
`;

const Counter = styled.span`
  color: #a0b0b9;
  margin-left: 8px;
`;

const Header = props => (
  <Wrapper>
    <Name onClick={props.toggleFilter} isOpened={props.isOpened}>
      {props.label}
      {!!props.count && <Counter>{props.count}</Counter>}
    </Name>
    {props.showReset && (
      <Reset onClick={props.reset}>
        <Icon src={clear} alt="Сбросить фильтр" />
      </Reset>
    )}
  </Wrapper>
);

Header.propTypes = {
  toggleFilter: PropTypes.func,
  isOpened: PropTypes.bool,
  label: PropTypes.string,
  count: PropTypes.number,
  showReset: PropTypes.bool,
  reset: PropTypes.func,
};

Header.defaultProps = {
  toggleFilter: () => {},
  isOpened: false,
  label: '',
  count: 0,
  showReset: false,
  reset: () => {},
};

export default Header;
