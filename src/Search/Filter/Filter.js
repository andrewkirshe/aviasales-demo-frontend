import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Checkbox from "./Checkbox";
import Flight from "./Flight";
import Range from "./Range";

const Wrapper = styled.div`
  border-bottom: solid 1px #dddddd;

  &:last-child {
    border-bottom: none;
  }
`;

const Controls = styled.div`
  padding: 0 16px 16px 16px;
`;

const GroupTitle = styled.h4`
  font-size: 0.75rem;
  margin: 20px 0 10px 0;
`;

const controlType = (control, index) => {
  if (control.type === "checkbox") {
    return (
      <Checkbox
        key={index}
        label={control.label}
        price={control.price}
        description={control.description}
        checked={control.checked}
      />
    );
  }
  if (control.type === "range-date-time") {
    return (
      <div key={index}>
        {control.flight && (
          <Flight from={control.flight.from} to={control.flight.to} />
        )}
        {control.ranges.map((range, index) => (
          <Range
            key={index}
            notes={range.notes}
            fromLabel={range.fromLabel}
            toLabel={range.toLabel}
            fromDate={range.fromDate}
            toDate={range.toDate}
            type={control.type}
          />
        ))}
      </div>
    );
  }

  if (control.type === "range-time") {
    return (
      <div key={index}>
        {control.flight && (
          <Flight from={control.flight.from} to={control.flight.to} />
        )}
        {control.ranges.map((range, index) => (
          <Range
            key={index}
            notes={range.notes}
            fromLabel={range.fromLabel}
            toLabel={range.toLabel}
            fromTime={range.fromTime}
            toTime={range.toTime}
            type={control.type}
          />
        ))}
      </div>
    );
  }
  if (control.type === "group") {
    return <GroupTitle key={index}>{control.label}</GroupTitle>;
  }
};

class Filter extends React.Component {
  state = {
    isOpened: this.props.isOpened
  };

  controls = this.props.controls.map((control, index) => {
    return controlType(control, index);
  });

  toggleFilter = () => {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened
    }));
  };

  render() {
    return (
      <Wrapper>
        <Header
          label={this.props.label}
          count={this.props.count}
          isOpened={this.state.isOpened}
          toggleFilter={this.toggleFilter}
          reset={this.props.reset}
        />
        {this.state.isOpened && <Controls>{this.controls}</Controls>}
      </Wrapper>
    );
  }
}

export default Filter;
