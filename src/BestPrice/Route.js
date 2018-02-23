import React from "react";
import styled from "styled-components";

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
      <City>Из {props.from}</City>
      <Price href="http://">от {props.price} ₽</Price>
    </Route>
  );
};
