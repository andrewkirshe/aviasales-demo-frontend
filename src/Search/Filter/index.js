import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { map, includes } from 'lodash';
import pluralize from 'pluralize-ru';
import Filter from './Filter';
import FlyDates from './FlyDates';
import FlyDuration from './FlyDuration';
import Reset from './Reset';
import Checkbox from './Checkbox';
import { translate } from '../../translate';
import { transfers, flyDates, flyDurations, airlines } from './filtersData';

const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
`;

const GroupTitle = styled.h4`
  font-size: 0.75rem;
  margin: 20px 16px 10px 16px;
`;

const defaultListState = {
  transfers: map(transfers.list, 'id'),
  alliances: map(airlines.alliances.list, 'id'),
  aircompanies: map(airlines.aircompanies.list, 'id'),
};

class Filters extends React.Component {
  state = {
    transfers: {
      all: true,
      list: defaultListState.transfers,
    },
    alliances: {
      all: true,
      list: defaultListState.alliances,
    },
    aircompanies: {
      all: true,
      list: defaultListState.aircompanies,
    },
  };

  setCheckboxes = (id, group) => {
    const list = includes(this.state[group].list, id)
      ? this.state[group].list.filter(value => value !== id)
      : [...this.state[group].list, id];

    this.setState({
      [group]: {
        all: list.length === defaultListState[group].length,
        list,
      },
    });
  };

  setCheckboxesAll = (id, group) => {
    const allChecked = !this.state[group].all;
    this.setState({
      [group]: {
        all: allChecked,
        list: allChecked ? defaultListState[group] : [],
      },
    });
  };

  setOnlyCheckbox = (id, group) => {
    this.setState({
      [group]: {
        all: false,
        list: [id],
      },
    });
  };

  resetCheckboxes = (groups) => {
    groups.map(group =>
      this.setState({
        [group]: {
          all: true,
          list: defaultListState[group],
        },
      }));
  };

  render() {
    const { origin, destination } = this.props;
    return (
      <Wrapper>
        <Filter
          label="transfers"
          isOpened
          showReset={this.state.transfers.list.length !== defaultListState.transfers.length}
          reset={this.resetCheckboxes}
          groups={['transfers']}
          count={defaultListState.transfers.length}
        >
          <Checkbox
            label={translate(transfers.all.label)}
            checked={this.state.transfers.all}
            setCheckboxes={this.setCheckboxesAll}
            group="transfers"
          />
          {transfers.list.map(transfer => (
            <Checkbox
              key={transfer.id}
              id={transfer.id}
              group="transfers"
              label={pluralize(
                transfer.label,
                translate('no-transfer'),
                translate('one-transfer'),
                translate('two-transfers'),
                translate('five-transfers'),
              )}
              price={transfer.price}
              description={transfer.description}
              checked={includes(this.state.transfers.list, transfer.id)}
              setCheckboxes={this.setCheckboxes}
              setOnlyCheckbox={this.setOnlyCheckbox}
            />
          ))}
        </Filter>
        <Filter label="departure-time-and-arrivals" isOpened>
          <FlyDates ranges={flyDates[0].ranges} origin={origin} destination={destination} />
          <FlyDates ranges={flyDates[1].ranges} origin={destination} destination={origin} />
        </Filter>
        <Filter label="baggage" />
        <Filter label="duration-of-transfer" />
        <Filter label="travel-time" isOpened>
          <FlyDuration ranges={flyDurations[0].ranges} origin={origin} destination={destination} />
          <FlyDuration ranges={flyDurations[1].ranges} origin={destination} destination={origin} />
        </Filter>
        <Filter
          label="alliances"
          isOpened
          showReset={
            this.state.alliances.list.length !== defaultListState.alliances.length ||
            this.state.aircompanies.list.length !== defaultListState.aircompanies.length
          }
          reset={this.resetCheckboxes}
          groups={['alliances', 'aircompanies']}
          count={defaultListState.alliances.length + defaultListState.aircompanies.length}
        >
          <GroupTitle>{translate('alliances')}</GroupTitle>
          <Checkbox
            label={translate(airlines.alliances.all.label)}
            checked={this.state.alliances.all}
            setCheckboxes={this.setCheckboxesAll}
            group="alliances"
          />
          {airlines.alliances.list.map(alliance => (
            <Checkbox
              key={alliance.id}
              id={alliance.id}
              group="alliances"
              label={alliance.label}
              price={alliance.price}
              description={alliance.description}
              checked={includes(this.state.alliances.list, alliance.id)}
              setCheckboxes={this.setCheckboxes}
              setOnlyCheckbox={this.setOnlyCheckbox}
            />
          ))}
          <GroupTitle>{translate('airlines')}</GroupTitle>
          <Checkbox
            label={translate(airlines.aircompanies.all.label)}
            checked={this.state.aircompanies.all}
            setCheckboxes={this.setCheckboxesAll}
            group="aircompanies"
          />
          {airlines.aircompanies.list.map(aircompany => (
            <Checkbox
              key={aircompany.id}
              id={aircompany.id}
              group="aircompanies"
              label={aircompany.label}
              price={aircompany.price}
              description={aircompany.description}
              checked={includes(this.state.aircompanies.list, aircompany.id)}
              setCheckboxes={this.setCheckboxes}
              setOnlyCheckbox={this.setOnlyCheckbox}
            />
          ))}
        </Filter>
        <Filter label="airports" />
        <Filter label="airport-transfer" count={71} />
        <Filter label="agencies" count={26} />
        <Reset />
      </Wrapper>
    );
  }
}

Filters.propTypes = {
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
};

Filters.defaultProps = {
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
};

export default Filters;
