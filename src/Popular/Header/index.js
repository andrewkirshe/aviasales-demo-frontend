import React from 'react';
import styled from 'styled-components';
import { media } from '../../Media';
import Icon from './Icon';
import Button from './Button';

const Header = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h2`
  color: #4a4a4a;
  font-size: 1.125rem;
  line-height: 1.35;
  font-weight: 500;
  text-align: center;
  margin: 0;
  ${media.md`
    font-size: 1.5rem;
  `};
`;

export default () => (
  <Header>
    <Icon />
    <Title>
      Популярные направления перелетов из города <Button />
    </Title>
  </Header>
);
