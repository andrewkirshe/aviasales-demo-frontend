import React, { Component } from "react";
import styled from "styled-components";
import Route from "./Route";

class Destination extends Component {
  render() {
    const Container = styled.div``;
    const Header = styled.div`
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      padding-left: 7px;
    `;
    const Flag = styled.div`
      margin-right: 12px;
      margin-bottom: 14px;

      img {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        display: block;
        box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
      }
    `;
    const Title = styled.div``;
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
    return this.props.data.map(function(item, index) {
      return (
        <Container key={index}>
          <Header>
            <Flag>
              <img src={item.flag} alt={item.country} />
            </Flag>
            <Title>
              <City>{item.city}</City>
              <Country>{item.country}</Country>
            </Title>
          </Header>
          <Routes>
            <Route data={item.routes} />
          </Routes>
        </Container>
      );
    });
  }
}

export default Destination;
