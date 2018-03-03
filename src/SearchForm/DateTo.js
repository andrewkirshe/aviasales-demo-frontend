import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import { media } from "../Media";
import DayPicker from "react-day-picker";
import onClickOutside from "react-onclickoutside";

const Wrapper = styled.div`
  position: absolute;
  z-index: 99;
  left: 0;
  top: 0;
  background: #fff;
  box-shadow: 0px 0px 11px 0px rgba(74, 74, 74, 0.2);

  ${media.xs`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `};

  ${media.sm`
    position: absolute;
    left: 0;
    top: 0;
    right: auto;
    transform: none;
  `};
`;

const Input = styled.input`
  background: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-appearance: none;
  border: 0;
  box-sizing: border-box;
  line-height: 2.25rem;
  padding: 9px 48px 9px 18px;
  position: relative;
  transition: all 0.3s;
  box-shadow: inset 0 0 0 2px transparent;
  z-index: 10;
  width: 100%;
  background: #fff;

  &::placeholder {
    color: #a0b0b9;
  }

  &:focus {
    outline: none;
  }
`;

const Label = styled.div`
  display: none;
`;

const Button = styled.button`
  position: absolute;
  z-index: 20;
  right: 16px;
  top: 18px;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
`;

const Img = styled.img`
  width: 17px;
  height: 20px;
`;

const Options = styled.div`
  padding: 12px 24px 12px 24px;
`;

const OneWay = styled.button`
  display: block;
  font-size: 0.75rem;
  text-decoration: none;
  text-align: center;
  background: #fff;
  line-height: 2.5rem;
  border: 1px solid #f8e8cc;
  color: #ff8c17;
  background-color: #fff4e1;
  border-radius: 5px;
  width: 100%;
`;

class DateTo extends React.Component {
  handleDayClick = (day, { selected, disabled }) => {
    if (!disabled) {
      this.props.selectDates({
        toDate: day,
        enteredToDate: day
      });
      this.props.onToggleTo(false);
    }
  };

  handleDayMouseEnter = (day, { selected, disabled }) => {
    if (!disabled) {
      this.props.selectDates({
        enteredToDate: day
      });
    }
  };

  handleClickOutside = () => {
    this.close();
  };

  close = () => {
    this.props.onToggleTo(false);
  };

  open = () => {
    this.props.onToggleTo(true);
  };

  oneWayticket = () => {
    this.props.selectDates({
      toDate: null,
      enteredToDate: null
    });
    this.close();
  };

  render() {
    const {
      from,
      to,
      enteredTo,
      name,
      id,
      label,
      button,
      isOpened,
      months,
      weekdaysLong,
      weekdaysShort,
      renderDay
    } = this.props;
    const modifiers = {
      start: from,
      end: enteredTo,
      to: to
    };
    const selectedDays = [from, { from, to: enteredTo }];
    return (
      <div>
        <Input
          type="text"
          name={name}
          id={id}
          placeholder={label}
          onChange={this.open}
          onClick={this.open}
          value={to ? format(to, "DD MMMM, dd", { locale: ru }) : ""}
        />
        <Label htmlFor={id}>{label}</Label>
        {button && (
          <Button type="button" onClick={to ? this.oneWayticket : this.open}>
            <Img src={button} alt={label} />
          </Button>
        )}
        {isOpened && (
          <Wrapper className="DayPicker-to">
            <Options>
              <OneWay onClick={this.oneWayticket}>
                Обратный билет не нужен
              </OneWay>
            </Options>
            <DayPicker
              className="Range"
              locale="ru"
              month={to ? to : from}
              months={months}
              weekdaysLong={weekdaysLong}
              weekdaysShort={weekdaysShort}
              firstDayOfWeek={1}
              onDayClick={this.handleDayClick}
              onDayMouseEnter={this.handleDayMouseEnter}
              disabledDays={{ before: from || new Date() }}
              selectedDays={selectedDays}
              modifiers={modifiers}
              renderDay={renderDay}
            />
          </Wrapper>
        )}
      </div>
    );
  }
}

export default onClickOutside(DateTo);
