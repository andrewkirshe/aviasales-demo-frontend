import React from "react";
import styled from "styled-components";
import compass from "./compass.svg";

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
  width: 38px;
  height: 38px;
`;

export default () => {
  return (
    <Icon>
      <Img src={compass} alt="Популярные направления перелетов" />
    </Icon>
  );
};
