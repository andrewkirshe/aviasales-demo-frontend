import React from "react";
import styled from "styled-components";
import { translate } from "../../translate";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
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
                  {format(range.fromDate * 1000, "HH:mm, DD MMM", {
                    locale: ru
                  })}
                </Label>
                <Label>
                  {translate(range.toLabel)}{" "}
                  {format(range.toDate * 1000, "HH:mm, DD MMM", {
                    locale: ru
                  })}
                </Label>
              </Labels>
            )}
          <Row>
            <Range
              min={range.fromDate}
              max={range.toDate}
              defaultValue={[range.fromDate, range.toDate]}
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
