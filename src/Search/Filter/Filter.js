import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  border-bottom: solid 1px #dddddd;

  &:last-child {
    border-bottom: none;
  }
`;

const Controls = styled.div`
  padding: 0 16px 16px 16px;
`;

class Filter extends React.Component {
  state = {
    isOpened: this.props.isOpened
  };

  toggleFilter = () => {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened
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
          reset={this.props.reset}
        />
        {this.state.isOpened && <Controls>{this.props.children}</Controls>}
      </Wrapper>
    );
  }
}

export default Filter;
