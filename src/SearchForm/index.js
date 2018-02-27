import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import DateRange from "./DateRange";
import arrows from "./arrows.svg";
import FindButton from "./FindButton";

const SearchForm = styled.div`
  display: ${props => (props.pathname === "/" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.md`
    display: flex;
    margin-bottom: ${props => (props.pathname === "/" ? "inherit" : "30px")} 
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
    flex-wrap: ${props => (props.pathname === "/" ? "wrap" : "nowrap")};
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
      flex: ${props => (props.pathname === "/" ? "30% 1" : "46% 1")};
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
  flex: ${props => (props.pathname === "/" ? "1 1" : "50% 1")};
  margin: 1px;
  background: #fff;
  text-align: left;
  position: relative;
  white-space: nowrap;
  ${media.sm`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: ${props =>
      props.pathname === "/" ? "3px" : "0"};
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
    0: {
      price: 42130,
      tag: "DayPicker-Best-Price"
    },
    1: {
      price: 56434,
      tag: "DayPicker-Best-Price"
    },
    2: {
      price: 23234,
      tag: "DayPicker-Best-Price"
    },
    3: {
      price: 34534
    },
    4: {
      price: 85754
    },
    5: {
      price: 34323
    },
    6: {
      price: 56756,
      tag: "DayPicker-Best-Price"
    },
    7: {
      price: 34544,
      tag: "DayPicker-Best-Price"
    },
    8: {
      price: 56887,
      tag: "DayPicker-Best-Price"
    },
    9: {
      price: 23421,
      tag: "DayPicker-Best-Price"
    },
    10: {
      price: 23455,
      tag: "DayPicker-Best-Price"
    },
    11: {
      price: 67887
    },
    12: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    13: {
      price: 32423,
      tag: "DayPicker-Best-Price"
    },
    14: {
      price: 32435
    },
    15: {
      price: 45335
    },
    16: {
      price: 65654,
      tag: "DayPicker-Best-Price"
    },
    17: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    18: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    19: {
      price: 23434,
      tag: "DayPicker-Best-Price"
    },
    20: {
      price: 23412,
      tag: "DayPicker-Best-Price"
    },
    21: {
      price: 43545,
      tag: "DayPicker-Best-Price"
    },
    22: {
      price: 45646,
      tag: "DayPicker-Best-Price"
    },
    23: {
      price: 23432,
      tag: "DayPicker-Best-Price"
    },
    24: {
      price: 43545
    },
    25: {
      price: 34534,
      tag: "DayPicker-Best-Price"
    },
    26: {
      price: 56734,
      tag: "DayPicker-Best-Price"
    },
    27: {
      price: 23423
    },
    28: {
      price: 98008
    },
    29: {
      price: 23456
    },
    30: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    31: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    }
  },
  2: {
    0: {
      price: 42130,
      tag: "DayPicker-Best-Price"
    },
    1: {
      price: 56434,
      tag: "DayPicker-Best-Price"
    },
    2: {
      price: 23234,
      tag: "DayPicker-Best-Price"
    },
    3: {
      price: 34534
    },
    4: {
      price: 85754
    },
    5: {
      price: 34323
    },
    6: {
      price: 56756,
      tag: "DayPicker-Best-Price"
    },
    7: {
      price: 34544,
      tag: "DayPicker-Best-Price"
    },
    8: {
      price: 56887,
      tag: "DayPicker-Best-Price"
    },
    9: {
      price: 23421,
      tag: "DayPicker-Best-Price"
    },
    10: {
      price: 23455,
      tag: "DayPicker-Best-Price"
    },
    11: {
      price: 67887
    },
    12: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    13: {
      price: 32423,
      tag: "DayPicker-Best-Price"
    },
    14: {
      price: 32435
    },
    15: {
      price: 45335
    },
    16: {
      price: 65654,
      tag: "DayPicker-Best-Price"
    },
    17: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    18: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    19: {
      price: 23434,
      tag: "DayPicker-Best-Price"
    },
    20: {
      price: 23412,
      tag: "DayPicker-Best-Price"
    },
    21: {
      price: 43545,
      tag: "DayPicker-Best-Price"
    },
    22: {
      price: 45646,
      tag: "DayPicker-Best-Price"
    },
    23: {
      price: 23432,
      tag: "DayPicker-Best-Price"
    },
    24: {
      price: 43545
    },
    25: {
      price: 34534,
      tag: "DayPicker-Best-Price"
    },
    26: {
      price: 56734,
      tag: "DayPicker-Best-Price"
    },
    27: {
      price: 23423
    },
    28: {
      price: 98008
    },
    29: {
      price: 23456
    },
    30: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    31: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    }
  },
  3: {
    0: {
      price: 42130,
      tag: "DayPicker-Best-Price"
    },
    1: {
      price: 56434,
      tag: "DayPicker-Best-Price"
    },
    2: {
      price: 23234,
      tag: "DayPicker-Best-Price"
    },
    3: {
      price: 34534
    },
    4: {
      price: 85754
    },
    5: {
      price: 34323
    },
    6: {
      price: 56756,
      tag: "DayPicker-Best-Price"
    },
    7: {
      price: 34544,
      tag: "DayPicker-Best-Price"
    },
    8: {
      price: 56887,
      tag: "DayPicker-Best-Price"
    },
    9: {
      price: 23421,
      tag: "DayPicker-Best-Price"
    },
    10: {
      price: 23455,
      tag: "DayPicker-Best-Price"
    },
    11: {
      price: 67887
    },
    12: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    13: {
      price: 32423,
      tag: "DayPicker-Best-Price"
    },
    14: {
      price: 32435
    },
    15: {
      price: 45335
    },
    16: {
      price: 65654,
      tag: "DayPicker-Best-Price"
    },
    17: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    18: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    19: {
      price: 23434,
      tag: "DayPicker-Best-Price"
    },
    20: {
      price: 23412,
      tag: "DayPicker-Best-Price"
    },
    21: {
      price: 43545,
      tag: "DayPicker-Best-Price"
    },
    22: {
      price: 45646,
      tag: "DayPicker-Best-Price"
    },
    23: {
      price: 23432,
      tag: "DayPicker-Best-Price"
    },
    24: {
      price: 43545
    },
    25: {
      price: 34534,
      tag: "DayPicker-Best-Price"
    },
    26: {
      price: 56734,
      tag: "DayPicker-Best-Price"
    },
    27: {
      price: 23423
    },
    28: {
      price: 98008
    },
    29: {
      price: 23456
    },
    30: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    31: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    }
  },
  4: {
    0: {
      price: 42130,
      tag: "DayPicker-Best-Price"
    },
    1: {
      price: 56434,
      tag: "DayPicker-Best-Price"
    },
    2: {
      price: 23234,
      tag: "DayPicker-Best-Price"
    },
    3: {
      price: 34534
    },
    4: {
      price: 85754
    },
    5: {
      price: 34323
    },
    6: {
      price: 56756,
      tag: "DayPicker-Best-Price"
    },
    7: {
      price: 34544,
      tag: "DayPicker-Best-Price"
    },
    8: {
      price: 56887,
      tag: "DayPicker-Best-Price"
    },
    9: {
      price: 23421,
      tag: "DayPicker-Best-Price"
    },
    10: {
      price: 23455,
      tag: "DayPicker-Best-Price"
    },
    11: {
      price: 67887
    },
    12: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    13: {
      price: 32423,
      tag: "DayPicker-Best-Price"
    },
    14: {
      price: 32435
    },
    15: {
      price: 45335
    },
    16: {
      price: 65654,
      tag: "DayPicker-Best-Price"
    },
    17: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    18: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    19: {
      price: 23434,
      tag: "DayPicker-Best-Price"
    },
    20: {
      price: 23412,
      tag: "DayPicker-Best-Price"
    },
    21: {
      price: 43545,
      tag: "DayPicker-Best-Price"
    },
    22: {
      price: 45646,
      tag: "DayPicker-Best-Price"
    },
    23: {
      price: 23432,
      tag: "DayPicker-Best-Price"
    },
    24: {
      price: 43545
    },
    25: {
      price: 34534,
      tag: "DayPicker-Best-Price"
    },
    26: {
      price: 56734,
      tag: "DayPicker-Best-Price"
    },
    27: {
      price: 23423
    },
    28: {
      price: 98008
    },
    29: {
      price: 23456
    },
    30: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    },
    31: {
      price: 12312,
      tag: "DayPicker-Best-Price"
    }
  }
};

export default props => {
  return (
    <SearchForm pathname={props.location.pathname}>
      <div className="container">
        <div className="row center-xs">
          <div
            className={
              props.location.pathname === "/"
                ? "col-xs-12 col-md-10"
                : "col-xs-12"
            }
          >
            {props.location.pathname === "/" && (
              <Title>
                Поиск дешевых авиабилетов
                <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
              </Title>
            )}
            <Form action="">
              <Fields pathname={props.location.pathname}>
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
                <Row pathname={props.location.pathname}>
                  <DateRange prices={prices} />
                </Row>
                <Row>
                  <Passengers pathname={props.location.pathname}>
                    1 пассажир, <Grade>эконом</Grade>
                  </Passengers>
                  {props.location.pathname === "/search" && (
                    <FindButton pathname={props.location.pathname} />
                  )}
                </Row>
                {props.location.pathname === "/" && (
                  <FindButton pathname={props.location.pathname} />
                )}
              </Fields>
            </Form>
          </div>
        </div>
      </div>
    </SearchForm>
  );
};
