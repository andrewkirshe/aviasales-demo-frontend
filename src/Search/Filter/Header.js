import React from "react";
import styled from "styled-components";
import clear from "./clear.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.button`
  padding: 20px 16px 20px 34px;
  background: 0;
  border: 0;
  position: relative;
  font-size: 0.75rem;
  flex: 1 1;
  text-align: left;
  text-transform: uppercase;

  &:after {
    content: "";
    display: block;
    line-height: 0;
    height: 0;
    border: 5px transparent solid;
    border-top-color: #a0b0b9;
    position: absolute;
    left: ${props => (props.collapse ? "19px" : "16px")};
    top: ${props => (props.collapse ? "20px" : "23px")};
    transform: rotate(${props => (props.collapse ? "-90deg" : "0")});
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

export default props => {
  return (
    <Wrapper>
      <Name collapse={props.collapse}>{props.label}</Name>
      {props.reset && (
        <Reset>
          <Icon src={clear} alt="Сбросить фильтр" />
        </Reset>
      )}
    </Wrapper>
  );
};
