import React from "react";
import styled from "styled-components";
import { media } from "../../Media";
import ToTop from "./ToTop";
import Flight from "./Flight";
import Filtrate from "./Filtrate";

import flightsData from "./flightsData";

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flights = styled.div`
  order: 1;

  ${media.md`
    order: 2;
  `};
`;

const MoreFlights = styled.button`
  display: none;

  ${media.md`
    display: block;
    order: 3;
    background: #00ACDE;
    border-radius: 4px;
    border: none;
    font-size: 0.875rem;
    color: #fff;
    font-weight: 600;
    padding: 20px;
    margin-bottom: 40px;
  `};
`;

const flights = flightsData.map((flight, index) => {
  return (
    <Flight
      key={index}
      outbound={flight.outbound}
      return={flight.return}
      type={flight.type}
      airlines={flight.airlines}
      dealers={flight.dealers}
      tag={flight.tag}
    />
  );
});

export default () => {
  return (
    <Main>
      <ToTop />
      <Flights>{flights}</Flights>
      <Filtrate />
      <MoreFlights>ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!</MoreFlights>
    </Main>
  );
};
