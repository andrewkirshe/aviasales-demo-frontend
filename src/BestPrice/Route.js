import React, { Component } from "react";
import styled from "styled-components";

class Route extends Component {
  render() {
    const Route = styled.div`
      display: flex;
      align-items: center;
      overflow: hidden;
      padding: 5px 8px;
    `;
    const City = styled.div`
      flex: 1 1;
      color: #4a4a4a;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.8125rem;
      text-decoration: none;
    `;
    const Price = styled.div`
      padding-left: 10px;
      color: #00ace2;
      white-space: nowrap;
    `;
    const item = this.props.data;
    return (
      <Route>
        <City>Из {item.from}</City>
        <Price>от {item.price} ₽</Price>
      </Route>
    );
  }
}

export default Route;
