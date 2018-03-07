import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm';
import LogoRow from './LogoRow';

const HeaderWrapper = styled.header`
  background: linear-gradient(to left, #196ebd, #01b0dd);
  height: ${props => (props.headerSize === 'full' ? '100vh' : 'auto')};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const pages = {
  '/': 'full',
  '/search': 'small',
};

class Header extends React.Component {
  state = {
    fromDate: new Date(),
    toDate: null,
    enteredToDate: null,
  };

  selectDates = (dates) => {
    this.setState(dates);
  };

  render() {
    return (
      <HeaderWrapper headerSize={pages[this.props.location.pathname]}>
        <LogoRow
          headerSize={pages[this.props.location.pathname]}
          fromDate={this.state.fromDate}
          toDate={this.state.toDate}
        />
        <SearchForm
          headerSize={pages[this.props.location.pathname]}
          selectDates={this.selectDates}
          fromDate={this.state.fromDate}
          toDate={this.state.toDate}
          enteredToDate={this.state.enteredToDate}
        />
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  location: PropTypes.objectOf(PropTypes.shape),
};

Header.defaultProps = {
  location: {},
};

export default Header;
