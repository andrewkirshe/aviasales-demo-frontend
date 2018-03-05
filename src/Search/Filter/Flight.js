import React from "react";
import styled from "styled-components";
import plane from "./plane.svg";
import { translate } from "../../translate";

const Flight = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 2;
`;

const Img = styled.img`
  display: block;
  width: 14px;
  height: 14px;
  margin: 0 5px;
`;

export default props => {
  return (
    <Flight>
      {translate(props.from)}
      <Img
        src={plane}
        alt={`${translate(props.from)} - ${translate(props.to)}`}
      />
      {translate(props.to)}
    </Flight>
  );
};
