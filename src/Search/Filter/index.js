import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import FlyDates from './FlyDates';
import FlyDuration from './FlyDuration';
import Checkbox from './Checkbox';
import Reset from './Reset';
import { transfers, flyDates, flyDurations, airlines } from './filtersData';

const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
`;

const GroupTitle = styled.h4`
  font-size: 0.75rem;
  margin: 20px 0 10px 0;
`;

const Filters = () => (
  <Wrapper>
    <Filter label="ПЕРЕСАДКИ" isOpened reset>
      {transfers.map(transfer => (
        <Checkbox
          key={transfer.id}
          label={transfer.label}
          price={transfer.price}
          description={transfer.description}
          checked={transfer.checked}
        />
      ))}
    </Filter>
    <Filter label="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" isOpened>
      {flyDates.map(flyDate => (
        <FlyDates key={flyDate.id} flight={flyDate.flight} ranges={flyDate.ranges} />
      ))}
    </Filter>
    <Filter label="Багаж" />
    <Filter label="Длительность пересадки" />
    <Filter label="Время в пути" isOpened>
      {flyDurations.map(flyDuration => (
        <FlyDuration key={flyDuration.id} flight={flyDuration.flight} ranges={flyDuration.ranges} />
      ))}
    </Filter>
    <Filter label="Авиакомпании" count={43} isOpened>
      <Checkbox
        label="Несколько авиакомпаний"
        description="Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную"
      />
      <GroupTitle>Альянсы</GroupTitle>
      {airlines.alliances.map(alliance => (
        <Checkbox
          key={alliance.id}
          label={alliance.label}
          price={alliance.price}
          checked={alliance.checked}
        />
      ))}
      <GroupTitle>Авиакомпании</GroupTitle>
      {airlines.companies.map(company => (
        <Checkbox
          key={company.id}
          label={company.label}
          price={company.price}
          checked={company.checked}
        />
      ))}
    </Filter>
    <Filter label="Аэропорты" />
    <Filter label="Аэропорт пересадки" count={71} />
    <Filter label="Агенства" count={26} />
    <Reset />
  </Wrapper>
);

export default Filters;
