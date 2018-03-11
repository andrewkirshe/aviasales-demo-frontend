import React from "react";
import styled from "styled-components";
import { media } from "../../Media";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  ${media.md`
    display: none;
  `};
`;

const Button = styled.button`
  font-size: 0.875rem;
  font-weight: 900;
  line-height: 1;
  border-radius: 100px;
  border: none;
  padding: 7px 17px;
  color: #fff;
  background: rgba(0, 172, 226, 0.5);
  margin: 0 0 16px 0;
`;

export default () => {
  return (
    <Wrapper>
      <Button>НАВЕРХ</Button>
    </Wrapper>
  );
};
