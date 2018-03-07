import React from 'react';
import styled from 'styled-components';
import { media } from '../../Media';
import filtrate from './filtrate.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  order: 2;

  ${media.md`
    order: 1;
  `};

  ${media.xl`
    display: none;
  `};
`;

const Button = styled.button`
  font-weight: 900;
  line-height: 1;
  border-radius: 100px;
  border: none;
  padding: 12px 25px;
  color: #fff;
  background: #00ace2;
  margin: 4px 0 16px 0;

  ${media.md`
    padding: 17px 24px;
    border-radius: 10px;
    margin: 8px 0 16px 0;
  `};
`;

const Text = styled.span`
  display: inline;
  ${media.md`
    display: none;
  `};
`;

const Icon = styled.img`
  display: none;
  ${media.md`
    display: block;
    width: 18px;
    height: 14px;
  `};
`;

export default () => (
  <Wrapper>
    <Button>
      <Text>Фильтровать</Text>
      <Icon src={filtrate} alt="Фильтровать" />
    </Button>
  </Wrapper>
);
