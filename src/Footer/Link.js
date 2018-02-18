import React from "react";
import styled from "styled-components";
import { media } from "../Media";

const Li = styled.li`
  margin: 0 20px 5px 0;

  ${media.lg`
      margin-right: 15px;
    `};
`;

const Link = styled.a`
  font-size: 0.75rem;
  color: #5b5b5c;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
`;

const Icon = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 5px;
`;

export default props => {
  if (props.icon) {
    return (
      <Li>
        <Link href={props.url}>
          <Icon src={props.icon} alt={props.text} />
          {props.text}
        </Link>
      </Li>
    );
  } else {
    return (
      <Li>
        <Link href={props.url}>{props.text}</Link>
      </Li>
    );
  }
};
