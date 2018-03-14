import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { media } from '../Media';
import Currency from './Currency';
import SearchParams from './SearchParams';
import Back from './Back';
import logo from './logo.svg';

const Logo = styled.div`
  display: ${props => (props.headerSize === 'small' ? 'none' : 'block')};

  ${media.md`
    display: block;
  `};
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  margin-right: 12px;
`;

const Name = styled.span`
  font-size: 1.25rem;
  text-transform: lowercase;
`;

const Wrapper = styled.div`
  position: ${props => (props.headerSize === 'small' ? 'relative' : 'absolute')};
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding: 12px 0;
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoRow = props => (
  <Wrapper headerSize={props.headerSize}>
    <div className="container">
      <Layout>
        {props.headerSize === 'small' && <Back />}
        <Logo headerSize={props.headerSize}>
          <HomeLink to="/">
            <Img src={logo} alt="logo" />
            <Name className="hidden-xs hidden-sm">Aviasales</Name>
          </HomeLink>
        </Logo>
        {props.headerSize === 'small' && (
          <SearchParams
            fromDate={props.fromDate}
            toDate={props.toDate}
            origin={props.origin}
            destination={props.destination}
            passengersCount={props.passengersCount}
          />
        )}
        {props.headerSize === 'small' && <Currency />}
      </Layout>
    </div>
  </Wrapper>
);

LogoRow.propTypes = {
  headerSize: PropTypes.string,
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

LogoRow.defaultProps = {
  headerSize: '',
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

export default LogoRow;
