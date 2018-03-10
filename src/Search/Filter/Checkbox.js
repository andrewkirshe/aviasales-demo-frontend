import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import checked from './checked.svg';

const Wrapper = styled.div``;

const Name = styled.p`
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: block;
    border: solid 1px #a0b0b9;
    border-radius: 4px;
    left: 0;
    padding: 9px;
    margin-right: 8px;
  }
`;

const RightWrapper = styled.div`
  flex: 1 1;
  text-align: right;
  position: relative;
`;

const Price = styled.p`
  margin: 0;
  color: #a0b0b9;
  position: relative;
  transition: all 0.15s ease-out;
  top: 0;
  opacity: 1;
`;

const Only = styled.button`
  margin: 0;
  color: #0fb5df;
  text-align: right;
  background: none;
  border: none;
  padding: 10px 0;
  position: absolute;
  right: 0;
  top: 20px;
  transition: all 0.15s ease-out;
  font-size: 0.875rem;
  opacity: 0;
  outline: none;

  &:hover {
    color: #ff9d1b;
  }
`;

const Label = styled.label`
  display: flex;
  padding: 8px 16px;
  font-size: 0.75rem;
  position: relative;
  align-items: center;
  overflow: hidden;

  &:hover {
    background: #f1fcff;

    ${Price} {
      top: -23px;
      opacity: 0;
    }

    ${Only} {
      top: -13px;
      opacity: 1;
    }
  }
`;

const Input = styled.input`
  margin-right: 10px;
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + ${Name} {
    &:before {
      background: #e1f8ff;
      border: solid 1px #00ace2;
    }

    &:after {
      content: '';
      display: block;
      background: url(${checked});
      width: 8px;
      height: 6px;
      position: absolute;
      left: 6px;
      top: 7px;
    }
  }
`;

const Description = styled.p`
  font-size: 0.75rem;
  margin: 0 16px 15px 16px;
  line-height: 1.5;
`;

const Checkbox = (props) => {
  const handleChange = () => {
    props.setCheckboxes(props.id);
  };

  const setOnlyHandle = () => {
    props.setOnlyCheckbox(props.id);
  };

  return (
    <Wrapper>
      <Label>
        <Input type="checkbox" checked={props.checked} onChange={handleChange} />
        <Name>{props.label}</Name>
        {!!props.price && (
          <RightWrapper>
            <Price>
              <FormattedNumber
                value={props.price}
                style={String('currency')}
                currency="RUB"
                minimumFractionDigits={0}
                maximumFractionDigits={0}
              />
            </Price>
            <Only type="button" onClick={setOnlyHandle}>
              только
            </Only>
          </RightWrapper>
        )}
      </Label>
      {props.description && <Description>{props.description}</Description>}
    </Wrapper>
  );
};

Checkbox.propTypes = {
  id: PropTypes.number,
  checked: PropTypes.bool,
  label: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  setCheckboxes: PropTypes.func,
  setOnlyCheckbox: PropTypes.func,
};

Checkbox.defaultProps = {
  id: 0,
  checked: false,
  label: '',
  price: 0,
  description: '',
  setCheckboxes: () => {},
  setOnlyCheckbox: () => {},
};

export default Checkbox;
