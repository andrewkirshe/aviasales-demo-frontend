import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 25px;
  text-align: center;
  border: none;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  text-align: center;
`;

const Minus = styled.button`
  font-size: 1.5rem;
  background: #fff;
  border: 1px solid #ccc;
  color: #ccc;
  width: 25px;
  height: 29px;
  padding: 0;
  padding-top: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 3px;
  outline: none;

  &:hover {
    border-color: #00b8e9;
    color: #00b8e9;
  }

  &:disabled {
    cursor: default;
    color: #e1e1e1;
    border-color: #e1e1e1;

    &:hover {
      cursor: default;
      color: #e1e1e1;
      border-color: #e1e1e1;
    }
  }
`;

const Plus = styled(Minus)`
  border-top-left-radius: 0px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 0px;
  padding-top: 0;
`;

const Counter = (props) => {
  const handleMinus = () => {
    props.setSearchParams({
      [props.name]: props.value - 1,
    });
  };

  const handlePlus = () => {
    props.setSearchParams({
      [props.name]: props.value + 1,
    });
  };
  return (
    <Wrapper>
      <Minus disabled={props.value === props.min} onClick={handleMinus} type="button">
        –
      </Minus>
      <Input type="text" value={props.value} readOnly />
      <Plus disabled={props.value === props.max} onClick={handlePlus} type="button">
        +
      </Plus>
    </Wrapper>
  );
};

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.number,
  setSearchParams: PropTypes.func,
};

Counter.defaultProps = {
  min: 0,
  max: 0,
  name: '',
  value: 0,
  setSearchParams: () => {},
};

export default Counter;
