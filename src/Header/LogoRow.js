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
  fromDate: PropTypes.objectOf(PropTypes.shape),
  toDate: PropTypes.objectOf(PropTypes.shape),
  origin: PropTypes.objectOf(PropTypes.shape),
  destination: PropTypes.objectOf(PropTypes.shape),
  passengersCount: PropTypes.number,
};

LogoRow.defaultProps = {
  headerSize: '',
  fromDate: {},
  toDate: {},
  origin: {},
  destination: {},
  passengersCount: 1,
};

export default LogoRow;
