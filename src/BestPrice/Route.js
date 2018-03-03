import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";
import { translate } from "../Translation";

const Route = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 5px 8px;
`;

const City = styled.p`
  flex: 1 1;
  color: #4a4a4a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.8125rem;
  text-decoration: none;
  margin: 0;
`;

const Price = styled.a`
  padding-left: 10px;
  color: #00ace2;
  white-space: nowrap;
  text-decoration: none;
`;

export default props => {
  return (
    <Route>
      <City>
        {translate("From")} {translate(props.from)}
      </City>
      <Price href="http://">
        {translate("from")}{" "}
        <FormattedNumber
          value={props.price}
          style={`currency`}
          currency="RUB"
          minimumFractionDigits={0}
          maximumFractionDigits={0}
        />
      </Price>
    </Route>
  );
};
