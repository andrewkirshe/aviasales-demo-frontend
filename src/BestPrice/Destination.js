import React, { Component } from "react";
import styled from "styled-components";
import { media } from "../Media";
import Route from "./Route";

class Destination extends Component {
  render() {
    const Destination = styled.div`
      border-bottom: ${props =>
        this.props.last === "last" ? "none" : "1px dashed #e4e7e8"};
      padding: 0 20px;
      position: relative;
      padding-bottom: ${props => (this.props.last === "last" ? "0" : "20px")};
      margin-bottom: ${props => (this.props.last === "last" ? "0" : "20px")};

      ${media.sm`
      border-bottom: none;
      padding-bottom: 0;
       margin-bottom: 0;
      `};

      &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: -7px;
        border-right: 1px dashed #e4e7e8;
        display: none;
        ${media.sm`
          border-bottom: none;
          display: ${props => (this.props.last === "last" ? "none" : "block")};
        `};
      }
    `;
    const Header = styled.div`
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      padding-left: 7px;
    `;
    const Flag = styled.div`
      margin-right: 12px;
      margin-bottom: 14px;
    `;
    const Title = styled.div``;
    const Img = styled.img`
      width: 30px;
      height: 30px;
      border-radius: 15px;
      display: block;
      box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
    `;

    const City = styled.div`
      font-weight: 600;
      font-size: 1.375rem;
      color: #5b5b5c;
      margin: 0;
      line-height: 1.6375rem;
    `;
    const Country = styled.div`
      margin: 0;
      line-height: 1.5625rem;
      font-size: 0.75rem;
      color: #a0b0b9;
      text-transform: uppercase;
    `;
    const Routes = styled.div``;
    const item = this.props.data;
    const routes = item.routes.map(function(item, index) {
      return <Route key={index} data={item} />;
    });
    return (
      <Destination>
        <Header>
          <Flag>
            <Img src={item.flag} alt={item.country} />
          </Flag>
          <Title>
            <City>{item.city}</City>
            <Country>{item.country}</Country>
          </Title>
        </Header>
        <Routes>{routes}</Routes>
      </Destination>
    );
  }
}

export default Destination;
