import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import pluralize from 'pluralize-ru';
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
    {(props.origin.city || props.destination.city) && (
      <Flight>
        {translate(props.origin.city)}
        {props.destination.city && ' — '}
        {translate(props.destination.city)}
      </Flight>
    )}

    <Params>
      <FromDate>{format(props.fromDate, 'DD MMM', { locale: ru })}</FromDate>
      {props.toDate && <ToDate> — {format(props.toDate, 'DD MMM', { locale: ru })}</ToDate>}, {}
      {pluralize(
        props.passengersCount,
        'нет пассажиров',
        '%d пассажир',
        '%d пассажира',
        '%d пассажиров',
      )}
    </Params>
  </Wrapper>
);

SearchParams.propTypes = {
  fromDate: PropTypes.instanceOf(Date),
  toDate: PropTypes.instanceOf(Date),
  origin: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    code: PropTypes.string,
  }),
  destination: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    code: PropTypes.string,
  }),
  passengersCount: PropTypes.number,
};

SearchParams.defaultProps = {
  fromDate: {},
  toDate: {},
  origin: {
    city: '',
    country: '',
    code: '',
  },
  destination: {
    city: '',
    country: '',
    code: '',
  },
  passengersCount: 1,
};

export default SearchParams;
