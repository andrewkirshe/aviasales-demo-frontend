import React from "react";
import styled from "styled-components";
import { media } from "../Media";

const Card = styled.div`
  margin-bottom: 12px;
`;

const Header = styled.div`
  background: #cd2027;
  align-items: center;
  padding: 18px 60px 18px 18px;
  position: relative;
`;

const Title = styled.h3`
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-weight: normal;
`;

const Icon = styled.img`
  position: absolute;
  right: 14px;
  top: 9px;
  width: 38px;
  height: 38px;
`;

const Content = styled.div`
  background: #fff;
  padding: 15px 8px;
`;

const Company = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

const Logo = styled.img`
  width: 122px;
  ${media.md`
          width: 100px;
        `};

  ${media.lg`
          width: 120px;
        `};
`;

const Info = styled.div`
  text-align: right;
  color: #5c5c5c;
`;

const Price = styled.div`
  text-align: right;
  font-size: 1.25rem;
`;

const From = styled.span`
  font-size: 0.7rem;
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

export default props => {
  return (
    <Card>
      <Header>
        <Title>{props.title}</Title>
        <Icon
          src={props.logo.x1}
          srcSet={`${props.logo.x2} 2x`}
          alt={props.title}
        />
      </Header>
      <Content>
        <Company>
          <Logo src={props.company} alt="" />
          <Info>
            <Price>
              <From>от</From> {props.price} ₽
            </Price>
            <Dayleft>{props.dayLeft}</Dayleft>
          </Info>
        </Company>
        <Notes>{props.text}</Notes>
        <More>Узнать подробности</More>
      </Content>
    </Card>
  );
};
