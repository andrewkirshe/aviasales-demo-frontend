import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import Highlighter from 'react-highlight-words';
import onClickOutside from 'react-onclickoutside';
import { translate } from '../translate';
import arrow from './arrow.svg';
import './autocomlete.css';

const Wrapper = styled.div``;

const AirportName = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 43px;
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

const ArrowLeft = styled.img`
  width: 16px;
  height: 8px;
  transition: transform 0.2s ease-in-out;
`;

const ArrowRight = styled.img`
  width: 16px;
  height: 8px;
  transform: rotate(180deg);
  margin-top: 2px;
  transition: transform 0.2s ease-in-out;
`;

const Button = styled.button`
  position: absolute;
  z-index: 20;
  right: 16px;
  top: 18px;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  &:hover {
    ${ArrowLeft} {
      transform: translateX(-2px);
    }

    ${ArrowRight} {
      transform: rotate(180deg) translateX(-2px);
    }
  }
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
  margin-top: 4px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2), 0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
  z-index: 30;
`;

const renderMenu = items => <AirportsList>{items}</AirportsList>;

class OriginCity extends React.Component {
  state = {
    query: '',
    isOpened: false,
  };

  getItemValue = item => item.city;

  changeHandle = (e) => {
    this.setState({
      query: e.target.value,
      isOpened: !!e.target.value.replace(/\s/g, ''),
    });

    this.props.setSearchParams({
      origin: {
        city: e.target.value,
      },
    });
  };

  handleClickOutside = () => {
    this.setState({
      isOpened: false,
    });
  };

  selectHandle = (city, airport) => {
    this.setState({
      isOpened: false,
    });

    this.props.setSearchParams({
      origin: airport,
    });
  };

  swapCities = () => {
    const { origin, destination } = this.props;

    this.props.setSearchParams({
      origin: destination,
      destination: origin,
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
        id="origin"
        className="autocomplete-input autocomplete-origin"
        placeholder="Город вылета"
        {...props}
      />
      <Label htmlFor="origin">Город вылета</Label>
      <AirportName>{this.props.origin.code}</AirportName>
      <Button type="button" onClick={this.swapCities}>
        <ArrowLeft src={arrow} alt="Left" />
        <ArrowRight src={arrow} alt="Right" />
      </Button>
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
        value={translate(this.props.origin.city)}
        onChange={this.changeHandle}
        onSelect={this.selectHandle}
        renderInput={this.renderInput}
      />
    );
  }
}

OriginCity.propTypes = {
  airportsData: PropTypes.arrayOf(PropTypes.shape),
  setSearchParams: PropTypes.func,
  origin: PropTypes.objectOf(PropTypes.shape),
  destination: PropTypes.objectOf(PropTypes.shape),
};

OriginCity.defaultProps = {
  airportsData: [],
  setSearchParams: () => {},
  origin: {},
  destination: {},
};

export default onClickOutside(OriginCity);
