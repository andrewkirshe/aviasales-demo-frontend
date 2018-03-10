import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormattedDuration from 'react-intl-formatted-duration';
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

const Text = styled.span``;

const Wrapper = styled.div`
  margin-bottom: 15px;
  padding: 0 16px;
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

class RangeDurtion extends React.Component {
  state = {
    fromTime: this.props.fromTime,
    toTime: this.props.toTime,
  };

  onChangeHandle = (value) => {
    this.setState({
      fromTime: value[0],
      toTime: value[1],
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
                <FormattedDuration
                  seconds={this.state.fromTime}
                  textComponent={Text}
                  format="extra_short"
                />
              </Label>
              <Label>
                {translate(toLabel)}{' '}
                <FormattedDuration
                  seconds={this.state.toTime}
                  textComponent={Text}
                  format="extra_short"
                />
              </Label>
            </Labels>
          )}
        <Row>
          <Range
            min={this.props.fromTime}
            max={this.props.toTime}
            defaultValue={[this.props.fromTime, this.props.toTime]}
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

RangeDurtion.propTypes = {
  notes: PropTypes.string,
  fromLabel: PropTypes.string,
  toLabel: PropTypes.string,
  fromTime: PropTypes.number,
  toTime: PropTypes.number,
};

RangeDurtion.defaultProps = {
  notes: '',
  fromLabel: '',
  toLabel: '',
  fromTime: 0,
  toTime: 0,
};

export default RangeDurtion;
