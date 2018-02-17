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
  height: 12px;
  margin-right: 5px;
`;

export default props => {
  if (props.data.icon) {
    return (
      <Li>
        <Link href={props.data.url}>
          <Icon src={props.data.icon} alt="" />
          {props.data.text}
        </Link>
      </Li>
    );
  } else {
    return (
      <Li>
        <Link href={props.data.url}>{props.data.text}</Link>
      </Li>
    );
  }
};
