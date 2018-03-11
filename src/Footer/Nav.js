import React from "react";
import { translate } from "../translate";
import Link from "./Link";
import styled from "styled-components";

const Nav = styled.nav`
  display: block;
  padding: 10px 0;
  margin: 0 0 20px 0;
`;

const Title = styled.h4`
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #4a4a4a;
  margin: 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
`;

const ShowAll = styled.a`
  font-weight: 500;
  font-size: 0.75rem;
  color: #5b5b5c;
  text-decoration: none;
`;

export default props => {
  const links = props.links.map((link, index) => {
    return <Link key={index} text={link.text} url={link.url} />;
  });
  return (
    <Nav>
      <Title>{translate(props.title)}</Title>
      <List>
        {links}
        {props.all && (
          <li>
            <ShowAll href={props.all.url}>
              {translate(props.all.text)} →
            </ShowAll>
          </li>
        )}
      </List>
    </Nav>
  );
};
