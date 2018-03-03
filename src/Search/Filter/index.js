import React from "react";
import styled from "styled-components";
import filtersData from "./filtersData";
import Filter from "./Filter";
import Reset from "./Reset";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
`;

const filters = filtersData.map((filter, index) => {
  return (
    <Filter
      key={index}
      label={filter.label}
      count={filter.count}
      isOpened={filter.isOpened}
      reset={filter.reset}
      controls={filter.controls}
    />
  );
});

export default props => {
  return (
    <Wrapper>
      {filters}
      <Reset />
    </Wrapper>
  );
};
