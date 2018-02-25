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
    if (disabled) {
      return;
    }
    this.props.onSelectDates({
      toDate: day,
      enteredToDate: day
    });
    this.props.onToggleTo(false);
  };

  handleDayMouseEnter = (day, { selected, disabled }) => {
    if (disabled) {
      return;
    }
    this.props.onSelectDates({
      enteredToDate: day
    });
  };

  handleClickOutside = e => {
    this.close();
  };

  close = () => {
    this.props.onToggleTo(false);
  };

  open = e => {
    e.preventDefault();
    this.props.onToggleTo(true);
  };

  toggle = e => {
    e.preventDefault();
    this.setState({ isOpened: !this.state.isOpened });
  };

  oneWayticket = e => {
    this.props.onSelectDates({
      toDate: null,
      enteredToDate: null
    });
    this.close();
  };

  render() {
    const from = this.props.from;
    const to = this.props.to;
    const enteredTo = this.props.enteredTo;
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
          name={this.props.name}
          id={this.props.id}
          placeholder={this.props.label}
          onChange={this.open}
          onClick={this.open}
          value={
            this.props.to
              ? format(this.props.to, "DD MMMM, dd", { locale: ru })
              : ""
          }
        />
        <Label htmlFor={this.props.id}>{this.props.label}</Label>
        {this.props.button && (
          <Button onClick={this.open}>
            <Img src={this.props.button} alt={this.props.label} />
          </Button>
        )}
        {this.props.isOpen && (
          <Wrapper className="DayPicker-to">
            <Options>
              <OneWay onClick={this.oneWayticket}>
                Обратный билет не нужен
              </OneWay>
            </Options>
            <DayPicker
              className="Range"
              locale="ru"
              month={this.props.to ? this.props.to : this.props.from}
              months={this.props.months}
              weekdaysLong={this.props.weekdaysLong}
              weekdaysShort={this.props.weekdaysShort}
              firstDayOfWeek={1}
              onDayClick={this.handleDayClick}
              onDayMouseEnter={this.handleDayMouseEnter}
              disabledDays={{ before: this.props.from || new Date() }}
              selectedDays={selectedDays}
              modifiers={modifiers}
              renderDay={this.props.renderDay}
            />
          </Wrapper>
        )}
      </div>
    );
  }
}

export default onClickOutside(DateTo);
