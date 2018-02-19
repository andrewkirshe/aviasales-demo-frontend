import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Icons from "./Icons";
import Destinations from "./Destinations";

const Popular = styled.section`
  padding: 60px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f8fcff;
`;

export default () => {
  return (
    <Popular>
      <div className="container">
        <Header />
        <div className="row center-xs">
          <div className="col-xs-12 col-md-10 col-lg-8 col-xl-6">
            <Icons />
          </div>
        </div>
        <Destinations />
      </div>
    </Popular>
  );
};
