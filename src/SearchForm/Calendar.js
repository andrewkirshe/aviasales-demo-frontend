import React from "react";
import styled from "styled-components";
import { media } from "../Media";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import onClickOutside from "react-onclickoutside";

const MONTHS = [
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
const WEEKDAYS_LONG = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];
const WEEKDAYS_SHORT = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

const Picker = styled(DayPicker)`
  position: absolute;
  z-index: 99;
  left: 0;
  top: 0;
  background: #fff;
  box-shadow: 0px 0px 11px 0px rgba(74, 74, 74, 0.2);
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

  ${media.sm`
    border-bottom-left-radius: ${props =>
      props.id === "depart_date" ? "3px" : "0"};
  `};

  ${media.xl`
    border-bottom-left-radius: 0;
  `};

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

class Calendar extends React.Component {
  state = {
    isOpened: false
  };

  handleClickOutside = e => {
    this.close();
  };

  close = () => {
    this.setState({ isOpened: false });
  };

  toggle = e => {
    e.preventDefault();
    this.setState({ isOpened: !this.state.isOpened });
  };

  render() {
    return (
      <div>
        <Input
          type="text"
          name={this.props.name}
          id={this.props.id}
          placeholder={this.props.label}
          onClick={this.toggle}
        />
        <Label htmlFor={this.props.id}>{this.props.label}</Label>
        {this.props.button && (
          <Button onClick={this.toggle}>
            <Img src={this.props.button} alt={this.props.label} />
          </Button>
        )}

        {this.state.isOpened && (
          <Picker
            locale="ru"
            months={MONTHS}
            weekdaysLong={WEEKDAYS_LONG}
            weekdaysShort={WEEKDAYS_SHORT}
            firstDayOfWeek={1}
          />
        )}
      </div>
    );
  }
}

export default onClickOutside(Calendar);
