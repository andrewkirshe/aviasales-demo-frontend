import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";
import DateFrom from "./DateFrom";
import DateTo from "./DateTo";
import calendar from "./calendar.svg";
import dateclear from "./dateclear.svg";
import "react-day-picker/lib/style.css";
import "./daterange.css";

const Wrapper = styled.div`
  display: flex;
  flex: 1 1;
`;

const Field = styled.div`
  position: relative;
  flex: 1 1;
  margin: 1px;
`;

const DateField = styled(Field)``;

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];
const weekdaysLong = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];

const weekdaysShort = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

class DateRange extends React.Component {
  state = {
    fromIsOpened: false,
    toIsOpened: false,
    enteredToDate: null
  };

  toggleFrom = value => {
    this.setState({
      fromIsOpened: value
    });
  };

  toggleTo = value => {
    this.setState({
      toIsOpened: value
    });
  };

  selectDates = dates => {
    this.setState(dates);
  };

  renderDay = (day, { selected, disabled }) => {
    const date = day.getDate();
    const month = day.getMonth();
    return (
      <div>
        <div>{date}</div>

        <div className="DayPicker-Day-Price">
          {!disabled &&
            this.props.prices[month] &&
            this.props.prices[month][date] && (
              <div className={this.props.prices[month][date].tag}>
                <FormattedNumber
                  value={this.props.prices[month][date].price}
                  style={`decimal`}
                  minimumFractionDigits={0}
                  maximumFractionDigits={0}
                />
              </div>
            )}
        </div>
      </div>
    );
  };

  render() {
    return (
      <Wrapper>
        <DateField>
          <DateFrom
            id="depart_date"
            name="depart_date"
            label="Туда"
            button={calendar}
            from={this.props.fromDate}
            to={this.props.toDate}
            enteredTo={this.props.enteredToDate}
            isOpened={this.state.fromIsOpened}
            onToggleFrom={this.toggleFrom}
            onToggleTo={this.toggleTo}
            selectDates={this.props.selectDates}
            renderDay={this.renderDay}
            months={months}
            weekdaysLong={weekdaysLong}
            weekdaysShort={weekdaysShort}
          />
        </DateField>
        <DateField>
          <DateTo
            id="return_date"
            name="return_date"
            label="Обратно"
            button={this.props.toDate ? dateclear : calendar}
            from={this.props.fromDate}
            to={this.props.toDate}
            enteredTo={this.props.enteredToDate}
            isOpened={this.state.toIsOpened}
            onToggleFrom={this.toggleFrom}
            onToggleTo={this.toggleTo}
            selectDates={this.props.selectDates}
            renderDay={this.renderDay}
            months={months}
            weekdaysLong={weekdaysLong}
            weekdaysShort={weekdaysShort}
          />
        </DateField>
      </Wrapper>
    );
  }
}

export default DateRange;
