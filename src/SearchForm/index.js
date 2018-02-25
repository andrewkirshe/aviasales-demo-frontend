import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import DateRange from "./DateRange";
import arrows from "./arrows.svg";
import FindButton from "./FindButton";

const SearchForm = styled.div`
  display: ${props => (props.page === "home" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.md`
    display: flex;
    margin-bottom: ${props => (props.page === "home" ? "inherit" : "30px")} 
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
    flex-wrap: ${props => (props.page === "home" ? "wrap" : "nowrap")};
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
  `};

  &:nth-child(3) {
    ${media.xl`
      flex: ${props => (props.page === "home" ? "30% 1" : "46% 1")};
    `};
  }
`;

const Field = styled.div`
  position: relative;
  flex: 1 1;
  margin: 1px;
`;

const DateFiled = styled(Field)``;

const Passengers = styled.button`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-appearance: none;
  border: 0;
  line-height: 2.25rem;
  padding: 9px 34px 9px 18px;
  position: relative;
  transition: all 0.3s;
  box-shadow: inset 0 0 0 2px transparent;
  z-index: 10;
  flex: ${props => (props.page === "home" ? "1 1" : "50% 1")};
  margin: 1px;
  background: #fff;
  text-align: left;
  position: relative;
  white-space: nowrap;
  ${media.sm`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: ${props =>
      props.page === "home" ? "3px" : "0"};
  `};

  ${media.xl`
    min-width: 20%;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  `};

  &:after {
    content: "";
    display: block;
    line-height: 0;
    height: 0;
    border: 5px transparent solid;
    border-top-color: #262626;
    position: absolute;
    right: 18px;
    top: 25px;
  }
`;

const Grade = styled.span`
  color: #a0b0b9;
`;

const Input = styled.input`
  background: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-appearance: none;
  border: 0;
  box-sizing: border-box;
  line-height: 2.25rem;
  padding: 9px 18px;
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
`;

const Label = styled.div`
  display: none;
`;

const Origin = styled(Input)`
  padding-right: 67px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  ${media.sm`
    border-top-right-radius: 0;
  `};

  ${media.xl`
    border-bottom-left-radius: 3px;
  `};
`;

const Destination = styled(Input)`
  ${media.sm`
    border-top-right-radius: 3px;
  `};

  ${media.xl`
    border-top-right-radius: 0;
  `};
`;

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
`;

const Img = styled.img`
  width: 16px;
  height: 18px;

  ${DateFiled} & {
    width: 17px;
    height: 20px;
  }
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
`;

const prices = {
  1: {
    0: 42130,
    1: 56434,
    2: 23234,
    3: 34534,
    4: 85754,
    5: 34323,
    6: 56756,
    7: 34544,
    8: 56887,
    9: 23421,
    10: 23455,
    11: 67887,
    12: 12312,
    13: 32423,
    14: 32435,
    15: 45335,
    16: 65654,
    17: 12312,
    18: 12312,
    19: 23434,
    20: 23412,
    21: 43545,
    22: 45646,
    23: 23432,
    24: 43545,
    25: 34534,
    26: 56734,
    27: 23423,
    28: 23456
  },
  2: {
    0: 42130,
    1: 56434,
    2: 23234,
    3: 34534,
    4: 85754,
    5: 34323,
    6: 56756,
    7: 34544,
    8: 56887,
    9: 23421,
    10: 23455,
    11: 67887,
    12: 12312,
    13: 32423,
    14: 32435,
    15: 45335,
    16: 65654,
    17: 12312,
    18: 12312,
    19: 23434,
    20: 23412,
    21: 43545,
    22: 45646,
    23: 23432,
    24: 43545,
    25: 34534,
    26: 56734,
    27: 23423,
    28: 45634,
    29: 23456,
    30: 12312,
    31: 12312
  },
  3: {
    0: 42130,
    1: 56434,
    2: 23234,
    3: 34534,
    4: 85754,
    5: 34323,
    6: 56756,
    7: 34544,
    8: 56887,
    9: 23421,
    10: 23455,
    11: 67887,
    12: 12312,
    13: 32423,
    14: 32435,
    15: 45335,
    16: 65654,
    17: 12312,
    18: 12312,
    19: 23434,
    20: 23412,
    21: 43545,
    22: 45646,
    23: 23432,
    24: 43545,
    25: 34534,
    26: 56734,
    27: 23423,
    28: 98008,
    29: 23456,
    30: 12312,
    31: 12312
  }
};

export default props => {
  return (
    <SearchForm page={props.page}>
      <div className="container">
        <div className="row center-xs">
          <div
            className={
              "col-xs-12" + (props.page === "home" ? " col-md-10" : "")
            }
          >
            {props.page === "home" && (
              <Title>
                Поиск дешевых авиабилетов
                <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
              </Title>
            )}
            <Form action="">
              <Fields page={props.page}>
                <Row>
                  <Field>
                    <Origin
                      type="text"
                      name="origin"
                      id="origin"
                      placeholder="Город вылета"
                    />
                    <Label htmlFor="origin">Город вылета</Label>
                    <AirportName>VIN</AirportName>
                    <Button>
                      <Img src={arrows} alt="Город вылета" />
                    </Button>
                  </Field>
                </Row>
                <Row>
                  <Field>
                    <Destination
                      type="text"
                      name="destination"
                      id="destination"
                      placeholder="Город прибытия"
                    />
                    <Label htmlFor="destination">Город прибытия</Label>
                  </Field>
                </Row>
                <Row page={props.page}>
                  <DateRange prices={prices} />
                </Row>
                <Row>
                  <Passengers page={props.page}>
                    1 пассажир, <Grade>эконом</Grade>
                  </Passengers>
                  {props.page !== "home" && <FindButton page={props.page} />}
                </Row>
                {props.page === "home" && <FindButton page={props.page} />}
              </Fields>
            </Form>
          </div>
        </div>
      </div>
    </SearchForm>
  );
};
