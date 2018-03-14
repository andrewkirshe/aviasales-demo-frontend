import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import Home from './Home';
import Search from './Search';

addLocaleData(ru);

const messages = {
  'react-intl-formatted-duration/custom-format/extra_short': '{hours} {minutes}',
  'react-intl-formatted-duration.duration': '{value} {unit}',
  'react-intl-formatted-duration.hoursUnit': '{value, plural, other{ч}}',
  'react-intl-formatted-duration.minutesUnit': '{value, plural, other{м}}',
};

class App extends React.Component {
  state = {
    fromDate: new Date(),
    toDate: null,
    enteredToDate: null,
    origin: {},
    destination: {},
    adults: 1,
    childs: 0,
    infants: 0,
    grade: 'econom',
  };

  setSearchParams = (dates) => {
    this.setState(dates);
  };

  render() {
    return (
      <IntlProvider locale="ru" messages={messages}>
        <BrowserRouter>
          <div className="App">
            <Route
              path="/"
              exact
              render={props => (
                <Home
                  {...props}
                  setSearchParams={this.setSearchParams}
                  fromDate={this.state.fromDate}
                  toDate={this.state.toDate}
                  enteredToDate={this.state.enteredToDate}
                  origin={this.state.origin}
                  destination={this.state.destination}
                  adults={this.state.adults}
                  childs={this.state.childs}
                  infants={this.state.infants}
                  grade={this.state.grade}
                />
              )}
            />
            <Route
              path="/search"
              render={props => (
                <Search
                  {...props}
                  setSearchParams={this.setSearchParams}
                  fromDate={this.state.fromDate}
                  toDate={this.state.toDate}
                  enteredToDate={this.state.enteredToDate}
                  origin={this.state.origin}
                  destination={this.state.destination}
                  adults={this.state.adults}
                  childs={this.state.childs}
                  infants={this.state.infants}
                  grade={this.state.grade}
                />
              )}
            />
          </div>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

export default App;
