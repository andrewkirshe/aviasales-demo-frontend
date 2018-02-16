import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import aero from "./aero.svg";
import arrows from "./arrows.svg";
import calendar from "./calendar.svg";

const Container = styled.div`
  padding: 10px;
  background: #01b0dd;
  background: -o-linear-gradient(right, #196ebd, #01b0dd);
  background: linear-gradient(to left, #196ebd, #01b0dd);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  text-transform: none;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 0 0 20px;
  text-align: center;
  font-weight: 500;

  ${media.sm`
    font-size: 2rem;
    line-height: 1.5;
    margin-bottom: 40px;
  `};

  ${media.md`
    font-size: 2.5rem;
  `};
`;

const SubTitle = styled.span`
  display: none;
  font-size: 1.25rem;
  ${media.sm`
      display: block;
    `};

  ${media.md`
      font-size: 1.5rem;
    `};
`;

const FormFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1px;
  margin: -1px;
  max-width: 1026px;
`;

const FormRow = styled.div`
  display: flex;
  min-width: 100%;
  flex: 1 1;
  ${media.xs`
    min-width: 50%;
  `};

  ${media.lg`
    min-width: 23%;
  `};

  &:nth-child(3) {
    ${media.lg`
      min-width: 30%;
    `};
  }
`;

const FormInput = styled.div`
  position: relative;
  flex: 1 1;
  margin: 1px;
`;

const Label = styled.div`
  display: none;
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

const Origin = styled(Input)`
  padding-right: 67px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  ${media.xs`
    border-top-right-radius: 0;
  `};

  ${media.lg`
    border-bottom-left-radius: 5px;
  `};
`;

const Destination = styled(Input)`
  ${media.xs`
    border-top-right-radius: 5px;
  `};

  ${media.lg`
    border-top-right-radius: 0;
  `};
`;

const Depart = styled(Input)`
  ${media.xs`
    border-bottom-left-radius: 5px;
  `};

  ${media.lg`
    border-bottom-left-radius: 0;
  `};
`;

const Return = styled(Input)``;

const Date = styled(FormInput)`
  &:before {
    content: "";
    display: block;
    pointer-events: none;
    width: 17px;
    height: 20px;
    position: absolute;
    top: 16px;
    right: 18px;
    opacity: 1;
    z-index: 13;
    background: url(${calendar}) no-repeat;
  }
`;

const Passengers = styled.button`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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
  ${media.xs`
    border-bottom-left-radius: 0;
  `};

  ${media.lg`
    min-width: 20%;
    border-top-right-radius: 5px;
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

const Find = styled.button`
  font-weight: 600;
  position: relative;
  background-color: #ff8e41;
  border: 0;
  color: #fff;
  display: block;
  text-align: center;
  border-radius: 5px;
  height: 55px;
  line-height: 3.4375rem;
  font-size: 1.375rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 16px;
  padding: 0 30px 0 0;
  max-width: 308px;

  ${media.sm`
    font-size: 1.75rem;
    height: 64px;
    padding: 0 37px 0 0;
    margin-top: 32px;
  `};

  ${media.lg`
    margin-top: 48px;
  `};

  &:after {
    content: "";
    display: block;
    width: 26px;
    height: 21px;
    position: absolute;
    background: url(${aero}) no-repeat;
    top: 50%;
    right: 50%;
    margin-right: -106px;
    margin-top: -10px;

    ${media.sm`
      margin-right: -120px;
    `};
  }
`;

const SwapIcon = styled.div`
  background: url(${arrows}) no-repeat;
  cursor: pointer;
  position: absolute;
  z-index: 20;
  right: 16px;
  top: 18px;
  width: 18px;
  height: 18px;
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

const Form = styled.form`
  display: block;

  ${media.sm`
    padding: 0 70px;
  `};
`;

export default function() {
  return (
    <Container>
      <Title>
        Поиск дешевых авиабилетов
        <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
      </Title>
      <Form action="">
        <FormFields>
          <FormRow>
            <FormInput>
              <Origin
                br_tl={[{ base: "5px" }]}
                br_tr={[{ base: "5px" }]}
                br_bl={[{ base: "0" }]}
                br_br={[{ base: "0" }]}
                type="text"
                name="origin"
                id="origin"
                placeholder="Город вылета"
              />
              <Label htmlFor="origin">Город вылета</Label>
              <SwapIcon />
              <AirportName>VIN</AirportName>
            </FormInput>
          </FormRow>
          <FormRow>
            <FormInput>
              <Destination
                type="text"
                name="destination"
                id="destination"
                placeholder="Город прибытия"
              />
              <Label htmlFor="destination">Город прибытия</Label>
            </FormInput>
          </FormRow>
          <FormRow>
            <Date>
              <Depart
                type="text"
                name="depart_date"
                id="depart_date"
                placeholder="Туда"
              />
              <Label htmlFor="origin">Туда</Label>
            </Date>
            <Date>
              <Return
                type="text"
                name="return_date"
                id="return_date"
                placeholder="Обратно"
              />
              <Label htmlFor="return_date">Обратно</Label>
            </Date>
          </FormRow>
          <Passengers>
            1 пассажир, <Grade>эконом</Grade>
          </Passengers>
        </FormFields>
        <Find>Найти билеты</Find>
      </Form>
    </Container>
  );
}
