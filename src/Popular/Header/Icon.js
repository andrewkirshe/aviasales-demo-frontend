import React from "react";
import styled from "styled-components";
import compass from "./compass.svg";

const Wrapper = styled.div`
  margin: 0 auto 20px;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background: #e2f8ff 50% 50% no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 38px;
  height: 38px;
`;

export default () => {
  return (
    <Wrapper>
      <Icon src={compass} alt="Популярные направления перелетов" />
    </Wrapper>
  );
};
