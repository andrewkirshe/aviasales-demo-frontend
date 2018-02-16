import React, { Component } from "react";
import styled from "styled-components";
import { media } from "../Media";

class Card extends Component {
  render() {
    const Container = styled.div`
      box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
      margin-bottom: 12px;
    `;
    const Header = styled.div`
      background: #cd2027;
      align-items: center;
      padding: 18px 60px 18px 18px;
      position: relative;
    `;
    const Title = styled.div`
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
    const Icon = styled.div`
      position: absolute;
      right: 14px;
      top: 7px;
      img {
        display: block;
      }
    `;
    const Content = styled.div`
      background: #fff;
      padding: 15px 8px;
    `;
    const Company = styled.div`
      display: flex;
      align-items: center;
      margin-bottom: 14px;
    `;
    const Logo = styled.div`
      flex: 1 1;

      img {
        ${media.sm`
          width: 100px;
        `};

        ${media.md`
          width: 120px;
        `};
      }
    `;
    const Info = styled.div`
      text-align: right;
      color: #5c5c5c;
    `;
    const Price = styled.div`
      text-align: right;
      font-size: 1.25rem;

      span {
        font-size: 0.7rem;
      }
    `;
    const Dayleft = styled.div`
      font-size: 0.7rem;
      color: #d93633;
      margin-top: 7px;
    `;
    const Notes = styled.div`
      color: #242424;
      font-size: 0.7rem;
      line-height: 1.6;
      min-height: 70px;
    `;
    const More = styled.button`
      border: 2px solid #cd1f27;
      border-radius: 3px;
      color: #d93533;
      background: none;
      width: 100%;
      padding: 10px 20px;
    `;

    const item = this.props.data;

    return (
      <Container>
        <Header>
          <Title>{item.offer}</Title>
          <Icon>
            <img src={item.logo} alt={item.offer} />
          </Icon>
        </Header>
        <Content>
          <Company>
            <Logo>
              <img src={item.company} alt="" />
            </Logo>
            <Info>
              <Price>
                <span>от</span> {item.price} ₽
              </Price>
              <Dayleft>{item.dayleft}</Dayleft>
            </Info>
          </Company>
          <Notes>{item.text}</Notes>
          <More>Узнать подробности</More>
        </Content>
      </Container>
    );
  }
}

export default Card;
