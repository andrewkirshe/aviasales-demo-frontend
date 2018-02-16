import React from "react";
import styled from "styled-components";
// import { media } from "../Media";
import BlockTitle from "./BlockTitle";
import IconsList from "./IconsList";
import Specific from "./Specific";

const Popular = styled.div`
  padding: 60px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f8fcff;
`;

export default function() {
  return (
    <Popular>
      <BlockTitle />
      <IconsList />
      <Specific />
    </Popular>
  );
}
