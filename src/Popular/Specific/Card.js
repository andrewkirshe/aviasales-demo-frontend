import React, { Component } from "react";
import styled from "styled-components";
import { media } from "../../Media";

class Card extends Component {
  render() {
    const item = this.props.data;

    const Card = styled.div`
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
      margin-bottom: 12px;
      ${media.sm`
        margin-top: 23px;
      `};

      ${media.md`
        margin-top: 31px;
      `};
    `;

    const Image = styled.div`
      max-height: 212px;
      overflow: hidden;
    `;

    const Img = styled.img`
      width: 100%;
      ${media.sm`
        margin-top: -3%;
      `};
    `;

    const Bar = styled.div`
      background: #fff;
      padding: 15px 15px 20px 15px;
      position: relative;
      ${media.xs`
          padding: 15px 15px 20px 70px;
        `};

      ${media.md`
          padding: 15px 25px 20px 73px;
        `};

      &:after {
        ${media.xs`
          content: '';
          display: block;
          width: 30px;
          height: 30px;
          border-radius: 15px;
          background: url(${item.flag}) no-repeat;
          background-size: cover;
          position: absolute;
          top: 18px;
          left: 23px;
          box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
        `};
      }
    `;

    const BarRow = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;

    const City = styled.div`
      font-size: 0.95rem;
      line-height: 1.6;
      color: #5b5b5c;
      font-weight: bold;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 100%;
      text-align: left;
      margin-right: 10px;
      ${media.xs`
          font-size: 1.375rem;
          line-height: 1.2;
      `};
    `;

    const Country = styled.div`
      text-transform: uppercase;
      color: #a0b0b9;
      letter-spacing: 0.03125rem;
      font-size: 0.75rem;
      margin-top: 10px;
      text-align: left;
    `;

    const Find = styled.div`
      font-size: 0.875rem;
      line-height: 1.6;
      color: #00ace2;
      text-align: right;
      white-space: nowrap;
      ${media.xs`
          font-size: 1.375rem;
          line-height: 1.2;
      `};
    `;
    const FlightDate = styled.div`
      font-size: 0.75rem;
      color: #9ab0b9;
      text-align: right;
      margin-top: 10px;
    `;

    return (
      <Card>
        <Image>
          <Img src={item.image} alt={item.city} />
        </Image>
        <Bar>
          <BarRow>
            <City>{item.city}</City>
            <Find>Найти от {item.price} ₽</Find>
          </BarRow>
          <BarRow>
            <Country>{item.country}</Country>
            <FlightDate>{item.date}</FlightDate>
          </BarRow>
        </Bar>
      </Card>
    );
  }
}

export default Card;
