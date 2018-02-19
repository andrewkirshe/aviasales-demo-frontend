import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import Fields from "./Fields";
import Button from "./Button";

const SearchForm = styled.section`
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

const Form = styled.div``;

export default () => {
  return (
    <SearchForm>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-10">
            <Title>
              Поиск дешевых авиабилетов
              <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
            </Title>
            <Form action="">
              <Fields />
              <Button />
            </Form>
          </div>
        </div>
      </div>
    </SearchForm>
  );
};
