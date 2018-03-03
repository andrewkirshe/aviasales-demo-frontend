import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import { translate } from "../Translation";
import Route from "./Route";

const Destination = styled.div`
  position: relative;
  border-bottom: 1px dashed #e4e7e8;
  padding: 0 0 24px 0;
  margin: 0 0 24px 0;

  ${media.xl`
    border-bottom: none;
    border-right: 1px dashed #e4e7e8;
    padding: 0 34px;
    flex: 1;
  `};

  &:first-child {
    ${media.xl`
      padding: 0 34px 0 0;
    `};
  }

  &:last-child {
    border-bottom: none;
    padding: 0;
    margin: 0;
    ${media.xl`
      border-right: none;
      padding: 0 0 0 34px;
    `};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 7px;
`;

const Flag = styled.div`
  margin-right: 12px;
  margin-bottom: 14px;
`;

const CityInfo = styled.div``;

const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: block;
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
`;

const City = styled.p`
  font-weight: 600;
  font-size: 1.375rem;
  color: #5b5b5c;
  margin: 0;
  line-height: 1.6375rem;
`;

const Country = styled.p`
  margin: 0;
  line-height: 1.5625rem;
  font-size: 0.75rem;
  color: #a0b0b9;
  text-transform: uppercase;
`;

const Routes = styled.div``;

export default props => {
  const routes = props.routes.map((route, index) => {
    return <Route key={index} from={route.from} price={route.price} />;
  });
  return (
    <Destination>
      <Header>
        <Flag>
          <Img
            src={props.flag.x1}
            srcSet={`${props.flag.x2} 2x`}
            alt={translate(props.country)}
          />
        </Flag>
        <CityInfo>
          <City>{translate(props.city)}</City>
          <Country>{translate(props.country)}</Country>
        </CityInfo>
      </Header>
      <Routes>{routes}</Routes>
    </Destination>
  );
};
