import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import { media } from "../Media";
import DayPicker from "react-day-picker";
import Switch from "./Switch";
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

  ${media.sm`
    border-bottom-left-radius: 3px;
  `};

  ${media.xl`
    border-bottom-left-radius: 0;
  `};

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
  padding: 0 24px 12px 24px;
`;

class DateFrom extends React.Component {
  handleDayClick = (day, { selected, disabled }) => {
    if (!disabled) {
      this.props.selectDates({
        fromDate: day
      });

      this.props.onToggleFrom(false);
      this.props.onToggleTo(true);
    }
  };

  handleClickOutside = () => {
    this.close();
  };

  close = () => {
    this.props.onToggleFrom(false);
  };

  open = () => {
    this.props.onToggleFrom(true);
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

    const modifiers = { start: from, end: enteredTo, to: to };

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
          value={from ? format(from, "DD MMMM, dd", { locale: ru }) : ""}
        />
        <Label htmlFor={id}>{label}</Label>
        {button && (
          <Button type="button" onClick={this.open}>
            <Img src={button} alt={label} />
          </Button>
        )}
        {isOpened && (
          <Wrapper className="DayPicker-from">
            <DayPicker
              className="Range"
              locale="ru"
              month={from ? from : to}
              months={months}
              weekdaysLong={weekdaysLong}
              weekdaysShort={weekdaysShort}
              firstDayOfWeek={1}
              onDayClick={this.handleDayClick}
              disabledDays={{ before: new Date() }}
              selectedDays={selectedDays}
              modifiers={modifiers}
              renderDay={renderDay}
            />
            <Options>
              <Switch label="Показать цены в одну сторону" />
            </Options>
          </Wrapper>
        )}
      </div>
    );
  }
}

export default onClickOutside(DateFrom);
