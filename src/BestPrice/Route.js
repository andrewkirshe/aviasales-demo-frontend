import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { translate } from '../translate';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 5px 8px;
`;

const City = styled.p`
  flex: 1 1;
  color: #4a4a4a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.8125rem;
  text-decoration: none;
  margin: 0;
`;

const Price = styled.a`
  padding-left: 10px;
  color: #00ace2;
  white-space: nowrap;
  text-decoration: none;
`;

const Route = props => (
  <Wrapper>
    <City>
      {translate('from-city')} {translate(props.from)}
    </City>
    <Price href="http://">
      {translate('from-price')}{' '}
      <FormattedNumber
        value={props.price}
        style={String('currency')}
        currency="RUB"
        minimumFractionDigits={0}
        maximumFractionDigits={0}
      />
    </Price>
  </Wrapper>
);

Route.propTypes = {
  from: PropTypes.string,
  price: PropTypes.number,
};

Route.defaultProps = {
  from: '',
  price: 0,
};

export default Route;
