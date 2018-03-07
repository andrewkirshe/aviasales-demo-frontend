import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import handbag from './handbag.svg';
import baggage from './baggage.svg';
import noBaggage from './no_baggage.svg';

const Tab = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 50% 1;
  border: none;
  background: none;
  padding: ${props => (props.single ? '10px 10px 0 10px' : '10px 10px')};
  border-right: solid 1px #dddddd;
  border-bottom: solid 1px ${props => (props.active || props.single ? '#ffffff' : '#dddddd')};
  background: ${props => (props.active || props.single ? '#ffffff' : '#f8fbfb')};

  &:last-child {
    border-right: 0;
  }

  &:first-child {
    border-top-left-radius: 4px;
  }
`;

const Handbag = styled.div`
  width: 19px;
  height: 20px;
  background: url(${handbag});
  font-size: 0.625rem;
  font-weight: 600;
  color: #9ab0b9;
  text-align: center;
  padding-top: 7px;
  margin: 3px 2px 0 2px;
  opacity: ${props => (props.available ? '1' : '0.4')};
`;

const Baggage = styled.div`
  width: 17px;
  height: 23px;
  background: url(${props => (props.available ? baggage : noBaggage)});
  font-size: 0.625rem;
  font-weight: 600;
  color: #9ab0b9;
  text-align: center;
  padding-top: 8px;
  margin: 0 2px;
`;

const Types = styled.div`
  display: flex;
`;

const AditionalPrice = styled.div`
  white-space: nowrap;
  font-size: 0.625rem;
  color: ${props => (props.available ? '#66D295' : '#9ab0b9')};
  font-weight: ${props => (props.available ? '500' : '400')};
  margin-top: 5px;
`;

const Luggage = props => (
  <Tab active={props.active} single={props.single}>
    <Types>
      <Handbag available={props.handbag}>{props.handbag ? props.handbag : '?'}</Handbag>
      <Baggage available={props.baggage.weight}>
        {props.baggage.weight > 0 && props.baggage.weight}
      </Baggage>
    </Types>
    {!props.single &&
      props.handbag && (
        <AditionalPrice available={props.baggage.weight}>
          {props.baggage && props.baggage.weight ? (
            <span>
              -
              <FormattedNumber
                value={props.baggage.price}
                style={String('currency')}
                currency="RUB"
                minimumFractionDigits={0}
                maximumFractionDigits={0}
              />
            </span>
          ) : (
            'Нет багажа'
          )}
        </AditionalPrice>
      )}
  </Tab>
);

Luggage.propTypes = {
  active: PropTypes.bool,
  single: PropTypes.bool,
  handbag: PropTypes.number,
  baggage: PropTypes.objectOf(PropTypes.number),
};

Luggage.defaultProps = {
  active: false,
  single: false,
  handbag: 0,
  baggage: {},
};

export default Luggage;
