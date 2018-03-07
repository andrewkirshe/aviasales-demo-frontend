import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { translate } from '../../translate';

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

const Wrapper = styled.div`
  margin-bottom: 15px;
`;

const trackStyle = [{ backgroundColor: '#00ACDE', height: '2px' }];

const handleStyle = [
  {
    backgroundColor: '#fff',
    width: '16px',
    height: '16px',
    marginTop: '-7px',
    border: 'solid 1px #D6D9DA',
  },
  {
    backgroundColor: '#fff',
    width: '16px',
    height: '16px',
    marginTop: '-7px',
    border: 'solid 1px #D6D9DA',
  },
];

const railStyle = {
  backgroundColor: '#FAFAFA',
  height: '2px',
  boxShadow: 'inset 0 1px 1px #f0f0f0',
};

class RangeDates extends React.Component {
  state = {
    fromDate: this.props.fromDate,
    toDate: this.props.toDate,
  };

  onChangeHandle = (value) => {
    this.setState({
      fromDate: value[0],
      toDate: value[1],
    });
  };

  render() {
    const { notes, fromLabel, toLabel } = this.props;

    return (
      <Wrapper>
        {notes && <Notes>{notes}</Notes>}
        {fromLabel &&
          toLabel && (
            <Labels>
              <Label>
                {translate(fromLabel)}{' '}
                {format(this.state.fromDate * 1000, 'HH:mm, DD MMM', {
                  locale: ru,
                })}
              </Label>
              <Label>
                {translate(toLabel)}{' '}
                {format(this.state.toDate * 1000, 'HH:mm, DD MMM', {
                  locale: ru,
                })}
              </Label>
            </Labels>
          )}
        <Row>
          <Range
            min={this.props.fromDate}
            max={this.props.toDate}
            defaultValue={[this.props.fromDate, this.props.toDate]}
            trackStyle={trackStyle}
            handleStyle={handleStyle}
            railStyle={railStyle}
            onChange={this.onChangeHandle}
          />
        </Row>
      </Wrapper>
    );
  }
}

RangeDates.propTypes = {
  notes: PropTypes.string,
  fromLabel: PropTypes.string,
  toLabel: PropTypes.string,
  fromDate: PropTypes.number,
  toDate: PropTypes.number,
};

RangeDates.defaultProps = {
  notes: '',
  fromLabel: '',
  toLabel: '',
  fromDate: 0,
  toDate: 0,
};

export default RangeDates;
