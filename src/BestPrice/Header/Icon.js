import React from "react";
import styled from "styled-components";
import calendar from "./calendar.svg";

const Icon = styled.div`
  margin: 0 auto 20px;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background: #e2f8ff 50% 50% no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 28px;
  height: 28px;
`;

export default () => {
  return (
    <Icon>
      <Img src={calendar} alt="Популярные направления перелетов" />
    </Icon>
  );
};
