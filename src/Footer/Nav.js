import React, { Component } from "react";
import Link from "./Link";
import styled from "styled-components";

class Nav extends Component {
  render() {
    const Nav = styled.nav`
      display: block;
      padding: 10px;
      margin: 0 0 20px 0;
    `;
    const Title = styled.div`
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: 500;
      color: #4a4a4a;
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

    const AllLink = styled.a`
      font-weight: 500;
    `;

    const item = this.props.data;

    const links = item.list.map(function(item, index) {
      return <Link key={index} data={item} />;
    });

    return (
      <Nav>
        <Title>{item.title}</Title>
        <List>
          {links}
          {(() => {
            if (item.all) {
              return (
                <li className="footer__all">
                  <AllLink href={item.all.url}>{item.all.text} →</AllLink>
                </li>
              );
            }
          })()}
        </List>
      </Nav>
    );
  }
}

export default Nav;
