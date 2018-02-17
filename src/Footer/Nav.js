import React from "react";
import Link from "./Link";
import styled from "styled-components";

const Nav = styled.nav`
  display: block;
  padding: 10px;
  margin: 0 0 20px 0;
`;
const Title = styled.h3`
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

  > * + * {
    margin-top: 10px;
  }

  a {
    font-size: 0.75rem;
    color: #5b5b5c;
    text-decoration: none;
  }
`;

const ShowAll = styled.a`
  font-weight: 500;
`;

export default props => {
  const links = props.data.links.map((link, index) => {
    return <Link key={index} data={link} />;
  });
  return (
    <Nav>
      <Title>{props.data.title}</Title>
      <List>
        {links}
        {(() => {
          if (props.data.all) {
            return (
              <li>
                <ShowAll href={props.data.all.url}>
                  {props.data.all.text} →
                </ShowAll>
              </li>
            );
          }
        })()}
      </List>
    </Nav>
  );
};
