import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import checked from './checked.svg';

const Wrapper = styled.div``;

const Label = styled.label`
  display: flex;
  padding: 0;
  font-size: 0.75rem;
  position: relative;
  align-items: center;
  padding-top: 15px;
  border-top: solid 1px #dbdbdb;
`;

const Name = styled.p`
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: block;
    border: solid 1px #1b91b6;
    border-radius: 2px;
    left: 0;
    padding: 8px;
    margin-right: 8px;
  }
`;

const Input = styled.input`
  margin-right: 10px;
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + ${Name} {
    &:before {
      background: #1b91b6;
      border: solid 1px #1b91b6;
    }

    &:after {
      content: '';
      display: block;
      background: url(${checked}) center no-repeat;
      background-size: 12px;
      width: 12px;
      height: 12px;
      position: absolute;
      left: 3px;
      top: 3px;
    }
  }
`;

const Checkbox = (props) => {
  const changeHandle = () => {
    props.setSearchParams({
      grade: props.grade === 'business' ? 'econom' : 'business',
    });
  };

  return (
    <Wrapper>
      <Label>
        <Input
          type="checkbox"
          onChange={changeHandle}
          defaultChecked={props.grade === 'business'}
        />
        <Name>{props.label}</Name>
      </Label>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  grade: PropTypes.string,
  label: PropTypes.string,
  setSearchParams: PropTypes.func,
};

Checkbox.defaultProps = {
  grade: '',
  label: '',
  setSearchParams: () => {},
};

export default Checkbox;
