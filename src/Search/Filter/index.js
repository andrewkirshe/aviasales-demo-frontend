import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Checkbox from "./Checkbox";
import Flight from "./Flight";
import Range from "./Range";
import Reset from "./Reset";

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

const Content = styled.div`
  padding: 0 16px 16px 16px;
`;

const GroupTitle = styled.h4`
  font-size: 0.75rem;
  margin: 20px 0 10px 0;
`;

export default props => {
  return (
    <Wrapper>
      <Filter>
        <Header label="ПЕРЕСАДКИ" reset />
        <Content>
          <Checkbox label="Все" />
          <Checkbox label="Без пересадок" notes="7 712 ₽" />
          <Checkbox label="1 пересадка" notes="11 150 ₽" checked />
          <Checkbox label="2 пересадки" notes="16 821 ₽" />
          <Checkbox label="3 пересадки" notes="23 986 ₽" />
        </Content>
      </Filter>
      <Filter>
        <Header label="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" />
        <Content>
          <Flight from="Москва" to="Барселона" />
          <Range
            notes="Вылет из Москвы:"
            fromLabel="c 00:05, 24 фев"
            toLabel="до 23:45, 24 фев"
          />
          <Range
            notes="Прибытие в Барселону:"
            fromLabel="c 03:05, 24 фев"
            toLabel="до 13:50, 26 фев"
          />
          <Flight from="Барселона" to="Москва" />
          <Range
            notes="Вылет из Барселоны:"
            fromLabel="c 06:00, 3 мар"
            toLabel="до 23:45, 3 мар"
          />
          <Range
            notes="Прибытие в Москву:"
            fromLabel="c 15:00, 3 мар"
            toLabel="до 09:55, 5 мар"
          />
        </Content>
      </Filter>
      <Filter>
        <Header label="Багаж" collapse />
      </Filter>
      <Filter>
        <Header label="Длительность пересадки" collapse />
      </Filter>
      <Filter>
        <Header label="Время в пути" />
        <Content>
          <Flight from="Москва" to="Барселона" />
          <Range fromLabel="от 04ч 20м" toLabel="до 48ч 50м" />
          <Flight from="Барселона" to="Москва" />
          <Range fromLabel="от 04ч 10м" toLabel="до 41ч 20м" />
        </Content>
      </Filter>
      <Filter>
        <Header label="Авиакомпании" count="43" />
        <Content>
          <Checkbox
            label="Несколько авиакомпаний"
            description="Показывать билеты с перелетами, выполняемыми несколькими
            авиакомпаниями, включая выбранную"
          />
          <GroupTitle>Альянсы</GroupTitle>
          <Checkbox label="Все" checked />
          <Checkbox label="Star Alliance" checked />
          <Checkbox label="OneWorld" checked />
          <Checkbox label="SkyTeam" checked />
          <GroupTitle>Авиакомпании</GroupTitle>
          <Checkbox label="Все" checked />
          <Checkbox label="Aegean Airlines" checked />
          <Checkbox label="Air Algerie" checked />
          <Checkbox label="Air Europa" checked />
          <Checkbox label="Air France" checked />
          <Checkbox label="Air Moldova" checked />
          <Checkbox label="Alitalia" checked />
          <Checkbox label="Alitalia CityLiner" checked />
          <Checkbox label="Belle Air" checked />
          <Checkbox label="British Airways" checked />
          <Checkbox label="Brussels Airlines" checked />
          <Checkbox label="Bulgaria Air" checked />
        </Content>
      </Filter>
      <Filter>
        <Header label="Аэропорты" collapse />
      </Filter>
      <Filter>
        <Header label="Аэропорт пересадки" count="71" collapse />
      </Filter>
      <Filter>
        <Header label="Агенства" count="26" collapse />
      </Filter>
      <Reset />
    </Wrapper>
  );
};
