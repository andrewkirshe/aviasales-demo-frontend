import React from "react";
import styled from "styled-components";
import { translate } from "../../Translation";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
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

const formatTime = duration => {
  if (duration % 3600 === 0) {
    return Math.floor(duration / 3600) + "ч";
  }

  return (
    Math.floor(duration / 3600) +
    "ч " +
    Math.floor((duration % 3600) / 60) +
    " м"
  );
};

const trackStyle = [{ backgroundColor: "#00ACDE", height: "2px" }];

const handleStyle = [
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
];

const railStyle = {
  backgroundColor: "#FAFAFA",
  height: "2px",
  boxShadow: "inset 0 1px 1px #f0f0f0"
};

export default props => {
  return (
    <Wrapper>
      {props.notes && <Notes>{props.notes}</Notes>}
      {props.fromLabel &&
        props.toLabel && (
          <Labels>
            <Label>
              {translate(props.fromLabel)}{" "}
              {props.type === "range-time" && formatTime(props.fromTime)}
              {props.type === "range-date-time" &&
                format(props.fromDate * 1000, "HH:mm, DD MMM", {
                  locale: ru
                })}
            </Label>
            <Label>
              {translate(props.toLabel)}{" "}
              {props.type === "range-time" && formatTime(props.toTime)}
              {props.type === "range-date-time" &&
                format(props.toDate * 1000, "HH:mm, DD MMM", {
                  locale: ru
                })}
            </Label>
          </Labels>
        )}
      <Row>
        {props.type === "range-time" && (
          <Range
            min={props.fromTime}
            max={props.toTime}
            defaultValue={[props.fromTime, props.toTime]}
            tipFormatter={value => `${formatTime(value)}`}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            railStyle={railStyle}
          />
        )}
        {props.type === "range-date-time" && (
          <Range
            min={props.fromDate}
            max={props.toDate}
            defaultValue={[props.fromDate, props.toDate]}
            tipFormatter={value =>
              `${format(value * 1000, "HH:mm, DD MMM", {
                locale: ru
              })}`
            }
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            railStyle={railStyle}
          />
        )}
      </Row>
    </Wrapper>
  );
};
