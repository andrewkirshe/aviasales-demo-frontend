import React from "react";
import styled from "styled-components";

const Airline = styled.a`
  margin-right: 12px;
  display: block;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Logo = styled.img`
  border: ${props => (props.size === "small" ? "solid 1px #DDDDDD" : "none")};
  border-radius: ${props => (props.size === "small" ? "4px" : "0")};
  padding: ${props => (props.size === "small" ? "4px" : "1px 0")};
  display: block;
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
