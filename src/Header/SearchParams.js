import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import { media } from "../Media";
import { translate } from "../Translation";

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

const FromDate = styled.span``;
const ToDate = styled.span``;

export default props => {
  return (
    <SearchParams>
      <Flight>
        {translate("Moscow")} — {translate("Barcelona")}
      </Flight>
      <Params>
        <FromDate>{format(props.fromDate, "DD MMM", { locale: ru })}</FromDate>
        {props.toDate && (
          <ToDate> — {format(props.toDate, "DD MMM", { locale: ru })}</ToDate>
        )}, 1 пассажир
      </Params>
    </SearchParams>
  );
};
