import React from "react";
import styled from "styled-components";
import { media } from "../Media";

const SearchParams = styled.div`
  flex: 1 1;
  color: #fff;
  ${media.md`
    display: none;
  `};
`;

const Flight = styled.p`
  margin: 0;
  line-height: 1.25;
`;

const Params = styled.p`
  font-size: 0.75rem;
  line-height: 1.33;
  margin: 2px 0 0 0;
`;

export default () => {
  return (
    <SearchParams>
      <Flight>Москва — Барселона</Flight>
      <Params>24 фев — 3 март, 1 пассажир</Params>
    </SearchParams>
  );
};
