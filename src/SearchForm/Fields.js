import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import arrows from "./arrows.svg";
import calendar from "./calendar.svg";

const Fields = styled.div`
  display: flex;
  flex-wrap: wrap;
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
      flex: 30% 1;
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
  padding: 9px 18px;
  position: relative;
  transition: all 0.3s;
  box-shadow: inset 0 0 0 2px transparent;
  z-index: 10;
  flex: 1 1;
  margin: 1px;
  background: #fff;
  text-align: left;
  position: relative;
  ${media.sm`
    border-bottom-left-radius: 0;
  `};

  ${media.xl`
    min-width: 20%;
    border-top-right-radius: 3px;
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

  ${DateFiled} & {
    padding: 9px 48px 9px 18px;
  }

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

const Depart = styled(Input)`
  ${media.sm`
    border-bottom-left-radius: 3px;
  `};

  ${media.xl`
    border-bottom-left-radius: 0;
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

export default () => {
  return (
    <Fields>
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
      <Row>
        <DateFiled>
          <Depart
            type="text"
            name="depart_date"
            id="depart_date"
            placeholder="Туда"
          />

          <Label htmlFor="origin">Туда</Label>
          <Button>
            <Img src={calendar} alt="Город вылета" />
          </Button>
        </DateFiled>
        <DateFiled>
          <Input
            type="text"
            name="return_date"
            id="return_date"
            placeholder="Обратно"
          />
          <Label htmlFor="return_date">Обратно</Label>
          <Button>
            <Img src={calendar} alt="Город вылета" />
          </Button>
        </DateFiled>
      </Row>
      <Row>
        <Passengers>
          1 пассажир, <Grade>эконом</Grade>
        </Passengers>
      </Row>
    </Fields>
  );
};
