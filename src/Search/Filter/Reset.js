import React from "react";
import styled from "styled-components";
import clear from "./clear.svg";

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  padding: 18px 16px 17px 16px;
  color: #00bde4;
`;

const Name = styled.p`
  position: relative;
  font-size: 0.75rem;
  flex: 1 1;
  text-align: left;
  text-transform: uppercase;
  margin: 0;
`;

const Icon = styled.img`
  display: block;
`;

export default props => {
  return (
    <Button>
      <Name>СБРОСИТЬ ВСЕ ФИЛЬТРЫ</Name>
      <Icon src={clear} alt="Сбросить все фильтры" />
    </Button>
  );
};
