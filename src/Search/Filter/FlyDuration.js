import React from "react";
import styled from "styled-components";
import { translate } from "../../translate";
import FormattedDuration from "react-intl-formatted-duration";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Flight from "./Flight";

const Wrapper = styled.div``;

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

const RangeWrapper = styled.div`
  margin-bottom: 15px;
`;

const Text = styled.span``;

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
      {props.flight && <Flight from={props.flight.from} to={props.flight.to} />}
      {props.ranges.map((range, index) => (
        <RangeWrapper key={index}>
          {range.notes && <Notes>{range.notes}</Notes>}
          {range.fromLabel &&
            range.toLabel && (
              <Labels>
                <Label>
                  {translate(range.fromLabel)}{" "}
                  <FormattedDuration
                    seconds={range.fromTime}
                    textComponent={Text}
                    format="extra_short"
                  />
                </Label>
                <Label>
                  {translate(range.toLabel)}{" "}
                  <FormattedDuration
                    seconds={range.toTime}
                    textComponent={Text}
                    format="extra_short"
                  />
                </Label>
              </Labels>
            )}
          <Row>
            <Range
              min={range.fromTime}
              max={range.toTime}
              defaultValue={[range.fromTime, range.toTime]}
              trackStyle={trackStyle}
              handleStyle={handleStyle}
              railStyle={railStyle}
            />
          </Row>
        </RangeWrapper>
      ))}
    </Wrapper>
  );
};
