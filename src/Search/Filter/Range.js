import React from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Wrapper = styled.div`
  margin-bottom: 15px;
`;

const Row = styled.div`
  padding: 0 7px;
`;

const Notes = styled.p`
  margin: 0;
  font-size: 0.75rem;
  margin-bottom: 7px;
`;

const Labels = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  font-size: 0.75rem;
  margin-bottom: 7px;
`;

const Label = styled.span``;

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default props => {
  return (
    <Wrapper>
      {props.notes && <Notes>{props.notes}</Notes>}
      {props.fromLabel &&
        props.toLabel && (
          <Labels>
            <Label>{props.fromLabel}</Label>
            <Label>{props.toLabel}</Label>
          </Labels>
        )}
      <Row>
        <Range
          min={0}
          max={1000}
          defaultValue={[0, 1000]}
          tipFormatter={value => `${value}`}
          trackStyle={[{ backgroundColor: "#00ACDE", height: "2px" }]}
          handleStyle={[
            {
              backgroundColor: "#fff",
              width: "16px",
              height: "16px",
              marginTop: "-7px",
              border: "solid 1px #D6D9DA"
            },
            {
              backgroundColor: "#fff",
              width: "16px",
              height: "16px",
              marginTop: "-7px",
              border: "solid 1px #D6D9DA"
            }
          ]}
          railStyle={{
            backgroundColor: "#FAFAFA",
            height: "2px",
            boxShadow: "inset 0 1px 1px #f0f0f0"
          }}
        />
      </Row>
    </Wrapper>
  );
};
