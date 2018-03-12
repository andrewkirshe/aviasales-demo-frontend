import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../../Media';
import Airline from './Airline';
import Route from './Route';
import share from './share.svg';
import { translate } from '../../../translate';

const Wrapper = styled.div`
  flex: 1 1;
  padding: 12px 0;

  ${media.sm`
    padding: 12px 8px;
  `};
  ${media.md`
    padding: 15px;
  `};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${media.md`
    justify-content:none;
    display: flex;
  `};
`;

const Airlines = styled.div`
  display: flex;
  flex: none;

  ${media.md`
    flex: 1 1;
  `};
`;

const Type = styled.button`
  background: none;
  border: solid 1px #2196f3;
  border-radius: 100px;
  font-size: 0.625rem;
  line-height: 1;
  padding: 8px 10px 7px 10px;
  display: none;

  ${media.md`
    display: inline;
  `};
`;

const Share = styled.button`
  background: none;
  border: none;
  margin-left: 5px;
  display: none;

  ${media.md`
    display: inline;
  `};
`;

const Routes = styled.div`
  margin-top: 5px;
  ${media.md`
    margin-top: 0;
  `};
`;

const Info = (props) => {
  const airlines = props.airlines.map(airline => (
    <Airline
      key={airline.id}
      name={airline.name}
      logo={airline.logo}
      size={props.airlines.length > 1 ? 'small' : 'large'}
    />
  ));

  return (
    <Wrapper>
      <Header>
        <Airlines>{airlines}</Airlines>
        {props.type && <Type>{translate(props.type)}</Type>}
        <Share>
          <img src={share} alt="Поделиться" />
        </Share>
      </Header>
      <Routes>
        <Route
          origin={props.outbound.origin}
          destination={props.outbound.destination}
          duration={props.outbound.duration}
        />
        <Route
          origin={props.return.origin}
          destination={props.return.destination}
          duration={props.return.duration}
        />
      </Routes>
    </Wrapper>
  );
};

Info.propTypes = {
  outbound: PropTypes.shape({
    origin: PropTypes.shape({
      city: PropTypes.string,
      airport: PropTypes.string,
      dateTime: PropTypes.number,
    }),
    destination: PropTypes.shape({
      city: PropTypes.string,
      airport: PropTypes.string,
      dateTime: PropTypes.number,
    }),
    duration: PropTypes.number,
  }),
  return: PropTypes.shape({
    origin: PropTypes.shape({
      city: PropTypes.string,
      airport: PropTypes.string,
      dateTime: PropTypes.number,
    }),
    destination: PropTypes.shape({
      city: PropTypes.string,
      airport: PropTypes.string,
      dateTime: PropTypes.number,
    }),
    duration: PropTypes.number,
  }),
  type: PropTypes.string,
  airlines: PropTypes.arrayOf(PropTypes.shape),
};

Info.defaultProps = {
  outbound: {
    origin: {
      city: '',
      airport: '',
      dateTime: 0,
    },
    destination: {
      city: '',
      airport: '',
      dateTime: 0,
    },
    duration: 0,
  },
  return: {
    origin: {
      city: '',
      airport: '',
      dateTime: 0,
    },
    destination: {
      city: '',
      airport: '',
      dateTime: 0,
    },
    duration: 0,
  },
  type: '',
  airlines: [],
};

export default Info;
