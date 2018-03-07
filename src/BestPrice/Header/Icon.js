import React from 'react';
import styled from 'styled-components';
import calendar from './calendar.svg';

const Wrapper = styled.div`
  margin: 0 auto 20px;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background: #e2f8ff 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

export default () => (
  <Wrapper>
    <Icon src={calendar} alt="Популярные направления перелетов" />
  </Wrapper>
);
