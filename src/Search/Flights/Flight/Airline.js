import React from "react";
import styled, { css } from "styled-components";

const Airline = styled.a`
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
    props.size === "small" &&
    css`
      border: solid 1px #dddddd;
      border-radius: 4px;
      padding: 4px;
    `};
`;

export default props => {
  return (
    <Airline href="http://">
      <Logo
        src={props.size === "small" ? props.logo.s.x1 : props.logo.l.x1}
        srcSet={
          props.size === "small"
            ? `${props.logo.s.x2} 2x`
            : `${props.logo.l.x2} 2x`
        }
        alt={props.name}
        size={props.size}
      />
    </Airline>
  );
};
