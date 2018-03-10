import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { map, includes, pull } from 'lodash';
import Filter from './Filter';
import Checkbox from './Checkbox';

const knock = (arr, val) => {
  if (arr.length === pull(arr, val).length) {
    arr.push(val);
  }
  return arr;
};

class Transfers extends React.Component {
  state = {
    checkboxes: map(this.props.transfers, 'id'),
  };

  setCheckboxes = (value) => {
    const allChecked = map(this.props.transfers, 'id');

    if (value === 1) {
      this.setState({
        checkboxes: includes(this.state.checkboxes, value) ? [] : allChecked,
      });
    } else {
      this.setState({
        checkboxes: knock(this.state.checkboxes, value),
      });
    }

    if (this.state.checkboxes.length === allChecked.length - 1) {
      if (includes(this.state.checkboxes, 1)) {
        this.setState({
          checkboxes: pull(this.state.checkboxes, 1),
        });
      } else {
        this.reset();
      }
    }
  };

  setOnlyCheckbox = (value) => {
    this.setState({
      checkboxes: [value],
    });
  };

  reset = () => {
    this.setState({
      checkboxes: map(this.props.transfers, 'id'),
    });
  };

  render() {
    const { transfers } = this.props;
    return (
      <Filter
        label="ПЕРЕСАДКИ"
        isOpened
        showReset={this.state.checkboxes.length !== map(this.props.transfers, 'id').length}
        reset={this.reset}
      >
        {transfers.map(transfer => (
          <Checkbox
            key={transfer.id}
            id={transfer.id}
            label={transfer.label}
            price={transfer.price}
            description={transfer.description}
            checked={includes(this.state.checkboxes, transfer.id)}
            setCheckboxes={this.setCheckboxes}
            setOnlyCheckbox={this.setOnlyCheckbox}
          />
        ))}
      </Filter>
    );
  }
}

Transfers.propTypes = {
  transfers: PropTypes.arrayOf(PropTypes.shape),
};

Transfers.defaultProps = {
  transfers: [],
};

export default Transfers;
