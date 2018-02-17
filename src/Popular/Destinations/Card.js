import React from "react";
import styled from "styled-components";
import { media } from "../../Media";

const Card = styled.div`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  margin-bottom: 12px;
  ${media.sm`
        margin-bottom: 23px;
      `};

  ${media.lg`
        margin-bottom: 31px;
      `};
`;

const Image = styled.div`
  max-height: 212px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  ${media.md`
        margin-top: -3%;
      `};
`;

const Bar = styled.div`
  background: #fff;
  padding: 15px 15px 20px 15px;
  position: relative;
  ${media.sm`
          padding: 15px 15px 20px 70px;
        `};

  ${media.lg`
          padding: 15px 25px 20px 73px;
        `};
`;

const Flag = styled.img`
  display: none;
  ${media.sm`
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    position: absolute;
    top: 18px;
    left: 23px;
    box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
  `};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const City = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #5b5b5c;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
  text-align: left;
  margin: 0 10px 0 0;
  ${media.sm`
          font-size: 1.375rem;
          line-height: 1.2;
      `};
`;

const Country = styled.p`
  text-transform: uppercase;
  color: #a0b0b9;
  letter-spacing: 0.03125rem;
  font-size: 0.75rem;
  margin: 10px 0 0 0;
  text-align: left;
`;

const Find = styled.a`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #00ace2;
  text-align: right;
  white-space: nowrap;
  text-decoration: none;
  ${media.sm`
          font-size: 1.375rem;
          line-height: 1.2;
      `};
`;

const FlightDate = styled.p`
  font-size: 0.75rem;
  color: #9ab0b9;
  text-align: right;
  margin: 10px 0 0 0;
`;

export default props => {
  return (
    <Card>
      <Image>
        <Img src={props.data.image} alt={props.data.city} />
      </Image>
      <Bar>
        <Flag src={props.data.flag} alt={props.data.country} />
        <Row>
          <City>{props.data.city}</City>
          <Find href="http://">Найти от {props.data.price} ₽</Find>
        </Row>
        <Row>
          <Country>{props.data.country}</Country>
          <FlightDate>{props.data.date}</FlightDate>
        </Row>
      </Bar>
    </Card>
  );
};
