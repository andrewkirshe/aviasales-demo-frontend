import React from "react";
import styled from "styled-components";
import { media } from "../../../Media";
import Airline from "./Airline";
import Route from "./Route";
import share from "./share.svg";
import { translate } from "../../../Translation";

const Wrapper = styled.div`
  flex: 1 1;
  padding: 12px 0;

  ${media.sm`
    padding: 12px 8px;
  `};
  ${media.md`
    padding: 15px;
  `};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${media.md`
    justify-content:none;
    display: flex;
  `};
`;

const Airlines = styled.div`
  display: flex;
  flex: none;

  ${media.md`
    flex: 1 1;
  `};
`;

const Type = styled.button`
  background: none;
  border: solid 1px #2196f3;
  border-radius: 100px;
  font-size: 0.625rem;
  line-height: 1;
  padding: 8px 10px 7px 10px;
  display: none;

  ${media.md`
    display: inline;
  `};
`;

const Share = styled.button`
  background: none;
  border: none;
  margin-left: 5px;
  display: none;

  ${media.md`
    display: inline;
  `};
`;

const Routes = styled.div`
  margin-top: 5px;
  ${media.md`
    margin-top: 0;
  `};
`;

export default props => {
  const airlines = props.airlines.map((airline, index) => {
    return (
      <Airline
        key={index}
        name={airline.name}
        logo={airline.logo}
        size={props.airlines.length > 1 ? "small" : "large"}
      />
    );
  });

  return (
    <Wrapper>
      <Header>
        <Airlines>{airlines}</Airlines>
        {props.type && <Type>{translate(props.type)}</Type>}
        <Share>
          <img src={share} alt="Поделиться" />
        </Share>
      </Header>
      <Routes>
        <Route
          origin={props.outbound.origin}
          destination={props.outbound.destination}
          duration={props.outbound.duration}
        />
        <Route
          origin={props.return.origin}
          destination={props.return.destination}
          duration={props.return.duration}
        />
      </Routes>
    </Wrapper>
  );
};
