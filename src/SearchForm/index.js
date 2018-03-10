import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import OriginCity from './OriginCity';
import DestinationCity from './DestinationCity';
import Passengers from './Passengers';
import { media } from '../Media';
import DateRange from './DateRange';
import FindButton from './FindButton';
import datePrices from './datePrices';
import airportsData from './airportsData';

const Wrapper = styled.div`
  display: ${props => (props.headerSize === 'full' ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.md`
    display: flex;
    margin-bottom: ${props => (props.headerSize === 'full' ? 'inherit' : '30px')} 
  `};
`;

const Title = styled.h1`
  color: #fff;
  text-transform: none;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 0 0 20px;
  text-align: center;
  font-weight: 500;

  ${media.md`
    font-size: 2rem;
    line-height: 1.5;
    margin-bottom: 40px;
  `};

  ${media.lg`
    font-size: 2.5rem;
  `};
`;

const SubTitle = styled.span`
  display: none;
  font-size: 1.25rem;
  ${media.md`
      display: block;
    `};

  ${media.lg`
      font-size: 1.5rem;
    `};
`;

const Form = styled.form``;

const Fields = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.xl`
    flex-wrap: ${props => (props.headerSize === 'full' ? 'wrap' : 'nowrap')};
  `};
`;

const Row = styled.div`
  display: flex;
  flex: 100% 1;
  ${media.sm`
    flex: 50% 1;
  `};

  ${media.xl`
    flex: 23% 1;
    max-width: 33%;
  `};

  &:nth-child(3) {
    ${media.xl`
      flex: ${props => (props.headerSize === 'full' ? '30% 1' : '46% 1')};
    `};
  }

  &:nth-child(4) {
    ${media.xl`
      max-width: ${props => (props.headerSize === 'full' ? '22%' : '33%')};
    `};
  }
`;

const Field = styled.div`
  position: relative;
  flex: 1 1;
  margin: 1px;
`;

const SearchForm = (props) => {
  const {
    headerSize,
    fromDate,
    toDate,
    enteredToDate,
    origin,
    destination,
    adults,
    childs,
    infants,
    setSearchParams,
    grade,
  } = props;

  return (
    <Wrapper headerSize={headerSize}>
      <div className="container">
        <div className="row center-xs">
          <div className={headerSize === 'full' ? 'col-xs-12 col-md-10' : 'col-xs-12'}>
            {headerSize === 'full' && (
              <Title>
                Поиск дешевых авиабилетов
                <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
              </Title>
            )}
            <Form action="">
              <Fields headerSize={headerSize}>
                <Row>
                  <Field>
                    <OriginCity
                      setSearchParams={setSearchParams}
                      origin={origin}
                      destination={destination}
                      airportsData={airportsData}
                    />
                  </Field>
                </Row>
                <Row>
                  <Field>
                    <DestinationCity
                      setSearchParams={setSearchParams}
                      destination={destination}
                      airportsData={airportsData}
                    />
                  </Field>
                </Row>
                <Row headerSize={headerSize}>
                  <DateRange
                    prices={datePrices}
                    setSearchParams={setSearchParams}
                    fromDate={fromDate}
                    toDate={toDate}
                    enteredToDate={enteredToDate}
                  />
                </Row>
                <Row headerSize={headerSize}>
                  <Passengers
                    headerSize={headerSize}
                    adults={adults}
                    childs={childs}
                    infants={infants}
                    grade={grade}
                    setSearchParams={setSearchParams}
                  />
                  {headerSize === 'small' && <FindButton headerSize={headerSize} />}
                </Row>
                {headerSize === 'full' && <FindButton headerSize={headerSize} />}
              </Fields>
            </Form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

SearchForm.propTypes = {
  setSearchParams: PropTypes.func,
  headerSize: PropTypes.string,
  fromDate: PropTypes.objectOf(PropTypes.shape),
  toDate: PropTypes.objectOf(PropTypes.shape),
  enteredToDate: PropTypes.objectOf(PropTypes.shape),
  origin: PropTypes.objectOf(PropTypes.shape),
  destination: PropTypes.objectOf(PropTypes.shape),
  adults: PropTypes.number,
  childs: PropTypes.number,
  infants: PropTypes.number,
  grade: PropTypes.string,
};

SearchForm.defaultProps = {
  setSearchParams: () => {},
  headerSize: '',
  fromDate: {},
  toDate: {},
  enteredToDate: {},
  origin: {},
  destination: {},
  adults: 1,
  childs: 0,
  infants: 0,
  grade: '',
};

export default SearchForm;
