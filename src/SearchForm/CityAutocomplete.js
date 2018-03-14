import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import Highlighter from 'react-highlight-words';
import { media } from '../Media';
import { translate } from '../translate';
import arrow from './arrow.svg';

const Input = styled.input`
  background: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 0;
  box-sizing: border-box;
  line-height: 2.25rem;
  padding: 9px 18px;
  padding-right: 50px;
  position: relative;
  transition: all 0.3s;
  box-shadow: inset 0 0 0 2px transparent;
  z-index: 10;
  width: 100%;
  background: #fff;
  &:focus {
    box-shadow: 0 0 0 2px #ff8e41;
    outline: none;
    z-index: 11;
  }

  &::placeholder {
    color: #a0b0b9;
  }

  ${props =>
    props.type === 'origin' &&
    css`
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;

      ${media.sm`
        border-top-right-radius: 0;
      `};

      ${media.xl`
        border-bottom-left-radius: 3px;
      `};
    `};

  ${props =>
    props.type === 'destination' &&
    css`
      ${media.sm`
        border-top-right-radius: 3px;
      `};

      ${media.xl`
        border-top-right-radius: 0;
      `};
    `};

  ${props =>
    props.swapButton &&
    css`
      padding-right: 75px;
    `};
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

const AirportCode = styled.div`
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

  ${props =>
    props.swapButton &&
    css`
      right: 43px;
    `};
`;

const CityAutocomplete = (props) => {
  const { type } = props;

  const swapCities = () => {
    props.setSearchParams({
      origin: props.destination,
      destination: props.origin,
    });
  };

  const handleChange = (airport) => {
    props.setSearchParams({
      [type]: airport,
    });
  };

  return (
    <Downshift
      onChange={handleChange}
      itemToString={i => (i !== null ? translate(i.city) : '')}
      defaultInputValue={translate(props[type].city)}
      render={({
 getInputProps, getItemProps, isOpen, inputValue, highlightedIndex,
}) => (
  <div>
    <Input
      {...getInputProps({
              placeholder: translate(props.placeholder),
              swapButton: props.swapButton,
              type,
            })}
    />
    <AirportCode swapButton={props.swapButton}>{props[type].code}</AirportCode>
    {isOpen && (
    <AirportsList>
      {props.airportsData
                .filter(item =>
                  Object.values(item)
                    .map(field => translate(field))
                    .join('')
                    .toLowerCase()
                    .includes(inputValue.toLowerCase()))
                .map((item, index) => (
                  <AirportMatch
                    {...getItemProps({ item })}
                    key={item.code}
                    highlighted={highlightedIndex === index}
                  >
                    <City>
                      <Highlighter
                        searchWords={[inputValue]}
                        autoEscape
                        textToHighlight={translate(item.city)}
                        highlightTag={queryText}
                      />,
                    </City>
                    <Country>
                      <Highlighter
                        searchWords={[inputValue]}
                        autoEscape
                        textToHighlight={translate(item.country)}
                        highlightTag={queryText}
                      />
                    </Country>
                    <Code>
                      <Highlighter
                        searchWords={[inputValue]}
                        autoEscape
                        textToHighlight={item.code}
                        highlightTag={queryText}
                      />
                    </Code>
                  </AirportMatch>
                ))}
    </AirportsList>
          )}
    {props.swapButton && (
    <Button type="button" onClick={swapCities}>
      <ArrowLeft src={arrow} alt="Left" />
      <ArrowRight src={arrow} alt="Right" />
    </Button>
          )}
  </div>
      )}
    />
  );
};

CityAutocomplete.propTypes = {
  airportsData: PropTypes.arrayOf(PropTypes.shape),
  setSearchParams: PropTypes.func,
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
  type: PropTypes.string,
  placeholder: PropTypes.string,
  swapButton: PropTypes.bool,
};

CityAutocomplete.defaultProps = {
  airportsData: [],
  setSearchParams: () => {},
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
  type: '',
  placeholder: '',
  swapButton: false,
};

export default CityAutocomplete;
