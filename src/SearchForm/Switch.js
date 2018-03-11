import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  padding: 6px 0;
  font-size: 0.75rem;
  margin-bottom: 5px;
  position: relative;
  align-items: center;
  padding-left: 47px;
`;

const Name = styled.p`
  margin: 0;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 37px;
    height: 22px;
    background: #bccdd6;
    box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.15);
    border-radius: 100px;
    transition: background 0.15s ease-out;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    background: #fff;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
    width: 16px;
    height: 16px;
    border-radius: 8px;
    top: 0;
    bottom: 0;
    margin: auto 2px;
    left: 0;
    transition: transform 0.15s ease-out;
  }
`;

const Input = styled.input`
  margin-right: 10px;
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + ${Name} {
    &:before {
      background: #9ccc66;
    }

    &:after {
      transform: translateX(17px);
    }
  }
`;

export default props => {
  return (
    <Label>
      <Input type="checkbox" />
      <Name>{props.label}</Name>
    </Label>
  );
};
