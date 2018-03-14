import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';

const Wrapper = styled.div`
  border-bottom: solid 1px #dddddd;

  &:last-child {
    border-bottom: none;
  }
`;

const Controls = styled.div`
  padding: 0 0 16px 0;
`;

class Filter extends React.Component {
  state = {
    isOpened: this.props.isOpened,
  };

  toggleFilter = () => {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  };

  render() {
    return (
      <Wrapper>
        <Header
          label={this.props.label}
          count={this.props.count}
          isOpened={this.state.isOpened}
          toggleFilter={this.toggleFilter}
          showReset={this.props.showReset}
          reset={this.props.reset}
          groups={this.props.groups}
        />
        {this.state.isOpened && <Controls>{this.props.children}</Controls>}
      </Wrapper>
    );
  }
}

Filter.propTypes = {
  isOpened: PropTypes.bool,
  count: PropTypes.number,
  label: PropTypes.string,
  showReset: PropTypes.bool,
  reset: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.shape),
  groups: PropTypes.arrayOf(PropTypes.string),
};

Filter.defaultProps = {
  isOpened: false,
  count: 0,
  label: '',
  showReset: false,
  reset: () => {},
  children: [],
  groups: [],
};

export default Filter;
