import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import pluralize from 'pluralize-ru';
import GradeControl from './GradeControl';
import Counter from './Counter';
import { media } from '../Media';
import { translate } from '../translate';

const Button = styled.button`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 0;
  flex: 1 1;
  line-height: 2.25rem;
  padding: 9px 34px 9px 18px;
  position: relative;
  z-index: 10;
  margin: 1px;
  background: #fff;
  text-align: left;
  position: relative;
  white-space: nowrap;
  box-shadow: ${props => (props.panelOpened ? '0 0 0 2px #ff8e41' : 'none')};

  ${media.sm`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: ${props => (props.headerSize === 'full' ? '3px' : '0')};
  `};

  ${media.xl`
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  `};

  &:after {
    content: '';
    display: block;
    line-height: 0;
    height: 0;
    border: 5px transparent solid;
    border-top-color: #262626;
    position: absolute;
    right: 18px;
    top: 25px;
  }

  &:focus {
    outline: none;
  }
`;

const Grade = styled.span`
  color: #a0b0b9;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: ${props => (props.headerSize === 'full' ? '1 1' : '50% 1')};
  max-width: ${props => (props.headerSize === 'full' ? 'auto' : '50%')};
  ${media.xl`
    min-width: 20%;
  `};
`;

const Panel = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 3px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2), 0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
  padding: 15px;
  z-index: 35;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Text = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
  margin-right: 10px;
`;
const Name = styled.p`
  margin: 0;
  font-size: 0.875rem;
  white-space: nowrap;
`;
const Note = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: #a0b0b9;
  margin-top: 5px;
`;

class Passengers extends React.Component {
  state = {
    isOpened: false,
  };

  handleClickOutside = () => {
    this.setState({
      isOpened: false,
    });
  };

  clickHandle = () => {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  };

  render() {
    const {
      headerSize, adults, childs, infants, setSearchParams, grade,
    } = this.props;

    return (
      <Wrapper headerSize={headerSize}>
        <Button
          type="button"
          panelOpened={this.state.isOpened}
          onClick={this.clickHandle}
          headerSize={headerSize}
        >
          {pluralize(
            adults + childs + infants,
            'нет пассажиров',
            '%d пассажир',
            '%d пассажира',
            '%d пассажиров',
          )}, <Grade>{translate(grade)}</Grade>
        </Button>
        {this.state.isOpened && (
          <Panel>
            <Row>
              <Text>
                <Name>Взрослые</Name>
              </Text>
              <Counter
                name="adults"
                setSearchParams={setSearchParams}
                value={adults}
                adults={adults}
                childs={childs}
                infants={infants}
                min={infants > 0 ? infants : 1}
                max={9 - childs - infants}
              />
            </Row>
            <Row>
              <Text>
                <Name>Дети до 12 лет</Name>
              </Text>
              <Counter
                name="childs"
                setSearchParams={setSearchParams}
                value={childs}
                adults={adults}
                childs={childs}
                infants={infants}
                min={0}
                max={9 - adults - infants}
              />
            </Row>
            <Row>
              <Text>
                <Name>Дети до 2 лет</Name>
                <Note>Без места</Note>
              </Text>
              <Counter
                name="infants"
                setSearchParams={setSearchParams}
                value={infants}
                adults={adults}
                childs={childs}
                infants={infants}
                min={0}
                max={infants < adults ? 9 - adults - childs : adults}
              />
            </Row>
            <GradeControl grade={grade} setSearchParams={setSearchParams} label="Бизнес-класс" />
          </Panel>
        )}
      </Wrapper>
    );
  }
}

Passengers.propTypes = {
  headerSize: PropTypes.string,
  setSearchParams: PropTypes.func,
  adults: PropTypes.number,
  childs: PropTypes.number,
  infants: PropTypes.number,
  grade: PropTypes.string,
};

Passengers.defaultProps = {
  headerSize: '',
  setSearchParams: () => {},
  adults: 1,
  childs: 0,
  infants: 0,
  grade: '',
};

export default onClickOutside(Passengers);
