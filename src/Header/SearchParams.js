import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { media } from '../Media';
import { translate } from '../translate';

const Wrapper = styled.div`
  flex: 1 1;
  color: #fff;
  ${media.md`
    display: none;
  `};
`;

const Flight = styled.p`
  margin: 0;
  line-height: 1.25;
`;

const Params = styled.p`
  font-size: 0.75rem;
  line-height: 1.33;
  margin: 2px 0 0 0;
`;

const FromDate = styled.span``;
const ToDate = styled.span``;

const SearchParams = props => (
  <Wrapper>
    <Flight>
      {translate('Moscow')} — {translate('Barcelona')}
    </Flight>
    <Params>
      <FromDate>{format(props.fromDate, 'DD MMM', { locale: ru })}</FromDate>
      {props.toDate && <ToDate> — {format(props.toDate, 'DD MMM', { locale: ru })}</ToDate>}, 1
      пассажир
    </Params>
  </Wrapper>
);

SearchParams.propTypes = {
  fromDate: PropTypes.objectOf(PropTypes.shape),
  toDate: PropTypes.objectOf(PropTypes.shape),
};

SearchParams.defaultProps = {
  fromDate: {},
  toDate: {},
};

export default SearchParams;
