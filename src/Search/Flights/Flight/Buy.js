import React from "react";
import styled from "styled-components";
import { media } from "../../../Media";
import Luggage from "./Luggage";

const Wrapper = styled.div`
  position: absolute;
  top: 18px;
  left: 0;

  ${media.sm`
    left: 8px;
  `};

  ${media.md`
    top: auto;
    left: auto;
    border-right: solid 1px #dddddd;
    position: relative;
  `};
`;

const LuggageTabs = styled.div`
  display: none;
  ${media.md`
    display: flex;
  `};
`;

const Button = styled.button`
  background: none;
  border: none;
  font-weight: 600;
  color: #ff9241;
  padding: 0;
  font-size: 1.375rem;

  ${media.md`
    min-width: 162px;
    padding: 6px 15px;
    border-radius: 4px;
    background: #ff6d00;
    color: #fff;
    font-size: 1rem;
  `};
`;

const Price = styled.p`
  margin: 0;
  display: block;
  font-weight: 600;
  ${media.md`
    font-weight: 400;
  `};
`;

const PriceFor = styled.span`
  display: none;
  ${media.md`
    display: inline;
  `};
`;

const Dealers = styled.div`
  padding: 0;
  ${media.md`
    padding: 10px 24px 16px 24px;
  `};
`;

const MainDealer = styled.div`
  margin-top: 10px;
  text-align: center;
  color: #a0b0b9;
  font-size: 0.75rem;
  margin-bottom: 28px;
  display: none;

  ${media.md`
    display: block;
  `};
`;

const MoreDealers = styled.div`
  display: none;

  ${media.md`
    display: block;
  `};
`;

const DealerRow = styled.a`
  display: flex;
  justify-content: space-between;
  color: #59bce5;
  font-size: 0.75rem;
  text-decoration: none;
  margin-bottom: 6px;
`;

const MoreOffers = styled.a`
  display: none;
  text-align: center;
  color: #59bce5;
  font-size: 0.75rem;
  text-decoration: none;
  margin-top: 14px;

  ${media.md`
    display: block;
  `};
`;

const Buy = styled.span`
  display: none;
  ${media.md`
    display: inline;
  `};
`;

export default props => {
  const luggage = props.dealers[0].luggage.map((luggage, index) => {
    return (
      <Luggage
        key={index}
        handbag={luggage.handbag}
        baggage={luggage.baggage}
        active={props.dealers[0].luggage.length > 1 && index === 0}
        single={props.dealers[0].luggage.length === 1}
      />
    );
  });

  const moreDealers = props.dealers.slice(1, 3).map((dealer, index) => {
    return (
      <DealerRow key={index} href="http://">
        <span>{dealer.name}</span>
        <span>{dealer.price} ₽</span>
      </DealerRow>
    );
  });

  return (
    <Wrapper>
      <LuggageTabs>{luggage}</LuggageTabs>
      <Dealers>
        <Button>
          <Buy>Купить</Buy>
          <Price>
            <PriceFor>за </PriceFor>
            {props.dealers[0].price} ₽
          </Price>
        </Button>
        <MainDealer>на {props.dealers[0].name}</MainDealer>
        {moreDealers && <MoreDealers>{moreDealers}</MoreDealers>}
        {props.dealers.length > 3 && (
          <MoreOffers>+ Еще {props.dealers.length - 3} предложения</MoreOffers>
        )}
      </Dealers>
    </Wrapper>
  );
};
