import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import Highlighter from 'react-highlight-words';
import onClickOutside from 'react-onclickoutside';
import { translate } from '../translate';
import './autocomlete.css';

const Wrapper = styled.div``;

const AirportName = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 18px;
  font-size: 0.8125rem;
  height: 54px;
  line-height: 3.375rem;
  color: #aeaeae;
  pointer-events: none;
  z-index: 11;
  padding-top: 1px;
`;

const Label = styled.label`
  display: none;
`;

const City = styled.p`
  margin: 0;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 3px;
`;

const Country = styled.p`
  margin: 0;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #a0b0b9;
`;

const Code = styled.p`
  margin: 0;
  position: absolute;
  right: 18px;
  font-size: 0.75rem;
  color: #a0b0b9;
`;

const AirportMatch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  line-height: 1.8rem;
  padding: 9px 50px 9px 18px;
  font-size: 0.875rem;
  text-align: left;

  &:nth-child(2n) {
    background: #f4f4f4;
  }

  ${props =>
    props.highlighted &&
    css`
      background: #20a6cb;
      color: #fff;
      &:nth-child(2n) {
        background: #20a6cb;
      }
    `};

  ${Code} {
    ${props =>
    props.highlighted &&
      css`
        color: #fff;
      `};
  }

  ${Country} {
    ${props =>
    props.highlighted &&
      css`
        color: #fff;
      `};
  }
`;

const queryText = styled.span`
  font-weight: bold;
`;

const AirportsList = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2), 0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
  z-index: 30;
  margin-top: 4px;
`;

const renderMenu = items => <AirportsList>{items}</AirportsList>;

class DestinationCity extends React.Component {
  state = {
    query: '',
    isOpened: false,
  };

  getItemValue = airport => airport.city;

  changeHandle = (e) => {
    this.setState({
      query: e.target.value,
      isOpened: !!e.target.value.replace(/\s/g, ''),
    });

    this.props.setSearchParams({
      destination: {
        city: e.target.value,
      },
    });
  };

  handleClickOutside = () => {
    this.setState({
      isOpened: false,
    });
  };

  handleSelect = (city, airport) => {
    this.setState({
      isOpened: false,
    });

    this.props.setSearchParams({
      destination: airport,
    });
  };

  shouldItemRenderHandle = (airport, value) => {
    const renderItems =
      translate(airport.city)
        .toLowerCase()
        .indexOf(value.toLowerCase()) > -1 ||
      translate(airport.country)
        .toLowerCase()
        .indexOf(value.toLowerCase()) > -1 ||
      airport.code.toLowerCase().indexOf(value.toLowerCase()) > -1;

    return renderItems;
  };

  renderInput = props => (
    <Wrapper>
      <input
        id="destination"
        className="autocomplete-input autocomplete-destination"
        placeholder="Город прибытия"
        {...props}
      />
      <Label htmlFor="destination">Город прибытия</Label>
      <AirportName>{this.props.destination.code}</AirportName>
    </Wrapper>
  );

  render() {
    return (
      <Autocomplete
        items={this.props.airportsData}
        shouldItemRender={this.shouldItemRenderHandle}
        getItemValue={this.getItemValue}
        renderItem={(airport, highlighted) => (
          <AirportMatch highlighted={highlighted} key={airport.code}>
            <City>
              <Highlighter
                searchWords={[this.state.query]}
                autoEscape
                textToHighlight={translate(airport.city)}
                highlightTag={queryText}
              />,
            </City>
            <Country>
              <Highlighter
                searchWords={[this.state.query]}
                autoEscape
                textToHighlight={translate(airport.country)}
                highlightTag={queryText}
              />
            </Country>
            <Code>
              <Highlighter
                searchWords={[this.state.query]}
                autoEscape
                textToHighlight={airport.code}
                highlightTag={queryText}
              />
            </Code>
          </AirportMatch>
        )}
        wrapperProps={{ className: 'autocomplete-wrapper' }}
        wrapperStyle={{}}
        menuStyle={{}}
        renderMenu={renderMenu}
        open={this.state.isOpened}
        value={translate(this.props.destination.city)}
        onChange={this.changeHandle}
        onSelect={this.handleSelect}
        renderInput={this.renderInput}
      />
    );
  }
}

DestinationCity.propTypes = {
  airportsData: PropTypes.arrayOf(PropTypes.shape),
  setSearchParams: PropTypes.func,
  destination: PropTypes.objectOf(PropTypes.shape),
};

DestinationCity.defaultProps = {
  airportsData: [],
  setSearchParams: () => {},
  destination: {},
};

export default onClickOutside(DestinationCity);
