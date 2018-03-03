import React from "react";
import styled from "styled-components";
import { media } from "../../../Media";
import plane_start from "./plane-start.svg";
import plane_end from "./plane-end.svg";
import plane_mobile from "./plane-mobile.svg";
import clock_mobile from "./clock-mobile.svg";
import pin from "./pin.svg";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import { translate } from "../../../Translation";

const Wrapper = styled.div`
  display: flex;
  padding: 5px 0;
  align-items: center;

  ${media.md`
    align-items: unset;
    padding: 15px 0;
    border-bottom: dashed 1px #dddddd;
  `};

  &:last-of-type {
    border-bottom: none;
  }
`;

const Origin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  order: 1;

  ${media.md`
    order: 1;
  `};
`;

const Destination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  order: 2;
  margin-right: 10%;

  ${media.md`
    order: 3;
    margin-right: 0;
    min-width: 95px;
  `};
`;

const Time = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #323333;
  line-height: 1;
  display: flex;
  align-items: center;

  ${Origin} & {
    &:after {
      content: "—";
      padding: 0 5px;

      ${media.md`
        display: none;
      `};
    }
  }

  ${media.md`
    font-size: 1.75rem;
  `};
`;

const City = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: #9ca5a8;
  line-height: 1;
  font-weight: 500;
  margin-top: 8px;
  display: none;

  ${media.md`
    display: block;
  `};
`;

const FligthDate = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: #9ca5a8;
  line-height: 1;
  margin-top: 7px;
  display: none;

  ${media.md`
    display: block;
  `};
`;

const Route = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: space-between;
  order: 3;

  ${media.md`
    flex: 1 1;
    order: 2;
    margin: 0 25px;
  `};
`;

const Duration = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  ${media.md`
    margin-top: 5px;
  `};
`;

const DurationTime = styled.p`
  margin: 0;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  color: #4a4a4a;
  ${media.md`
    display: inline;
    color: #a0b0b9;
  `};
`;

const TimeLabel = styled.span`
  display: none;
  ${media.md`
    display: inline;
  `};
`;

const StartIcon = styled.img`
  display: none;
  ${media.md`
    display: inline;
  `};
`;

const EndIcon = styled.img`
  display: none;
  ${media.md`
    display: inline;
  `};
`;

const Points = styled.div`
  display: none;
  justify-content: space-between;
  position: relative;

  ${media.md`
    display: flex;
  `};

  &:after {
    content: "";
    display: block;
    border-bottom: solid 1px #a0b0b9;
    position: absolute;
    top: 6px;
    left: 17px;
    right: 17px;
  }
`;

const Point = styled.div`
  padding: 6px 6px 5px 5px;
  border: solid 1px #a0b0b9;
  border-radius: 50%;
`;

const Airports = styled.div`
  display: none;
  justify-content: space-between;
  ${media.md`
    display: flex;
  `};
`;

const Airport = styled.p`
  margin: 0;
  font-size: 0.625rem;
`;

const TimeIcon = styled.img`
  margin-right: 8px;
  ${media.md`
    display: none;
  `};
`;

const Plane = styled.img`
  margin: 0 8px 0 5px;
  ${media.md`
    display: none;
  `};

  ${Wrapper}:last-of-type & {
    transform: rotate(180deg);
  }
`;

const Transfer = styled.p`
  order: 4;
  margin: 0;
  flex: 1 1;
  display: block;
  text-align: right;
  color: #4a4a4a;
  font-size: 0.875rem;
  ${media.md`
    display: none;
  `};
`;

const ThisVariant = styled.button`
  display: none;
  padding: 0;
  border: 0;
  background: none;
  margin-right: 8px;
  margin-bottom: 2px;
  ${media.md`
    display: block;
  `};
`;

const PinIcon = styled.img`
  display: block;
`;

const formatDuration = duration => {
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

export default props => {
  return (
    <Wrapper>
      <Plane src={plane_mobile} alt="Время рейса" />
      <Origin>
        <Time>
          <ThisVariant>
            <PinIcon
              src={pin}
              alt="Показать билеты только с этим вариантом перелета"
            />
          </ThisVariant>
          {format(props.origin.dateTime * 1000, "HH:mm", { locale: ru })}
        </Time>
        <City>{translate(props.origin.city)}</City>
        <FligthDate>
          {format(props.origin.dateTime * 1000, "D MMM YYYY, dd", {
            locale: ru
          })}
        </FligthDate>
      </Origin>
      <Route>
        <Duration>
          <StartIcon src={plane_start} alt={props.origin.airport} />
          <DurationTime>
            <TimeIcon src={clock_mobile} alt="Всего в пути" />
            <TimeLabel>Всего: </TimeLabel>
            {formatDuration(props.duration)}
          </DurationTime>
          <EndIcon src={plane_end} alt={props.destination.airport} />
        </Duration>
        <Points>
          <Point />
          <Point />
        </Points>
        <Airports>
          <Airport>{props.origin.airport}</Airport>
          <Airport>{props.destination.airport}</Airport>
        </Airports>
      </Route>
      <Destination>
        <Time>
          {format(props.destination.dateTime * 1000, "HH:mm", { locale: ru })}
        </Time>
        <City>{translate(props.destination.city)}</City>
        <FligthDate>
          {format(props.destination.dateTime * 1000, "D MMM YYYY, dd", {
            locale: ru
          })}
        </FligthDate>
      </Destination>
      <Transfer>Прямой</Transfer>
    </Wrapper>
  );
};
