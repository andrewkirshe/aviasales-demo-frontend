import React from 'react';
import styled from 'styled-components';
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

const GroupTitle = styled.h4`
  font-size: 0.75rem;
  margin: 20px 16px 10px 16px;
`;

class Airlines extends React.Component {
  state = {
    checkboxes: map(this.props.airlines.alliances.concat(this.props.airlines.companies), 'id'),
  };

  setCheckboxes = (value) => {
    const allChecked = map(
      this.props.airlines.alliances.concat(this.props.airlines.companies),
      'id',
    );

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
      checkboxes: map(this.props.airlines.alliances.concat(this.props.airlines.companies), 'id'),
    });
  };

  render() {
    const { airlines } = this.props;
    return (
      <Filter
        label="Авиакомпании"
        isOpened
        showReset={
          this.state.checkboxes.length !==
          map(airlines.alliances.concat(airlines.companies), 'id').length
        }
        reset={this.reset}
        count={airlines.alliances.concat(airlines.companies).length}
      >
        <GroupTitle>Альянсы</GroupTitle>
        {airlines.alliances.map(alliance => (
          <Checkbox
            key={alliance.id}
            id={alliance.id}
            label={alliance.label}
            price={alliance.price}
            description={alliance.description}
            checked={includes(this.state.checkboxes, alliance.id)}
            setCheckboxes={this.setCheckboxes}
            setOnlyCheckbox={this.setOnlyCheckbox}
          />
        ))}
        <GroupTitle>Авиакомпании</GroupTitle>
        {airlines.companies.map(company => (
          <Checkbox
            key={company.id}
            id={company.id}
            label={company.label}
            price={company.price}
            description={company.description}
            checked={includes(this.state.checkboxes, company.id)}
            setCheckboxes={this.setCheckboxes}
            setOnlyCheckbox={this.setOnlyCheckbox}
          />
        ))}
      </Filter>
    );
  }
}

Airlines.propTypes = {
  airlines: PropTypes.objectOf(PropTypes.shape),
};

Airlines.defaultProps = {
  airlines: {},
};

export default Airlines;
