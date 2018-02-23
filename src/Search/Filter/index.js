import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Checkbox from "./Checkbox";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
`;

const Filter = styled.div`
  border-bottom: solid 1px #dddddd;

  &:last-child {
    border-bottom: none;
  }
`;

const Controls = styled.div`
  padding-bottom: 10px;
`;

export default props => {
  return (
    <Wrapper>
      <Filter>
        <Header label="ПЕРЕСАДКИ" reset />
        <Controls>
          <Checkbox label="Все" />
          <Checkbox label="Без пересадок" notes="7 712 ₽" />
          <Checkbox label="1 пересадка" notes="11 150 ₽" checked />
          <Checkbox label="2 пересадки" notes="16 821 ₽" />
          <Checkbox label="3 пересадки" notes="23 986 ₽" />
        </Controls>
      </Filter>
      <Filter>
        <Header label="Багаж" collapse />
      </Filter>
      <Filter>
        <Header label="Длительность пересадки" collapse />
      </Filter>
    </Wrapper>
  );
};
