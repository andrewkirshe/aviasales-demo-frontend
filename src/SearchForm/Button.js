import React from 'react';
import styled from 'styled-components';
import { media } from '../Media';
import aero from './aero.svg';

const Button = styled.button`
  font-weight: 900;
  position: relative;
  background-color: #ff8e41;
  border: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  line-height: 3.5rem;
  font-size: 1.375rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 16px;
  padding: 0 20px;
  max-width: 308px;

  ${media.sm`
    font-size: 1.75rem;
    line-height: 4rem;
    margin-top: 32px;
  `};

  ${media.xl`
    margin-top: 48px;
  `};
`;

const Img = styled.img`
  width: 26px;
  height: 21px;
  margin-left: 16px;
`;

export default () => (
  <Button>
    Найти билеты
    <Img src={aero} alt="Найти билеты" />
  </Button>
);
