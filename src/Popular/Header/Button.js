import React from 'react';
import styled from 'styled-components';
import { media } from '../../Media';
import { translate } from '../../translate';
import edit from './edit.svg';

const Button = styled.button`
  color: #00ace2;
  font-weight: 500;
  position: relative;
  padding: 0;
  border: none;
  background: transparent;
  display: block;
  margin: auto;
  margin-top: 5px;

  ${media.md`
    font-size: 1.5rem;
    display: inline-block;
  `};
`;

const Img = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 5px;
`;

export default () => (
  <Button>
    {translate('Moscow')}
    <Img src={edit} alt="Редактировать" />
  </Button>
);
