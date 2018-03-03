import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import { translate } from "../Translation";

const Li = styled.li`
  margin: 0 20px 10px 0;

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
  return (
    <Li>
      <Link href={props.url}>
        {props.icon && <Icon src={props.icon} alt={translate(props.text)} />}
        {translate(props.text)}
      </Link>
    </Li>
  );
};
