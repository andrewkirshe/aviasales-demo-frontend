import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";
import checked from "./checked.svg";

const Wrapper = styled.div``;

const Label = styled.label`
  display: flex;
  padding: 6px 0;
  font-size: 0.75rem;
  margin-bottom: 5px;
  position: relative;
  align-items: center;
`;

const Name = styled.p`
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    display: block;
    border: solid 1px #a0b0b9;
    border-radius: 4px;
    left: 0;
    padding: 9px;
    margin-right: 8px;
  }
`;

const Price = styled.p`
  margin: 0;
  color: #a0b0b9;
  flex: 1 1;
  text-align: right;
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
      content: "";
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
  margin: 0 0 15px 0;
  line-height: 1.5;
`;

export default props => {
  return (
    <Wrapper>
      <Label>
        <Input type="checkbox" defaultChecked={props.checked} />
        <Name>{props.label}</Name>
        {props.price && (
          <Price>
            <FormattedNumber
              value={props.price}
              style={`currency`}
              currency="RUB"
              minimumFractionDigits={0}
              maximumFractionDigits={0}
            />
          </Price>
        )}
      </Label>
      {props.description && <Description>{props.description}</Description>}
    </Wrapper>
  );
};
