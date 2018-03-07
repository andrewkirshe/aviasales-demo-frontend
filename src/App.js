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

const App = () => (
  <IntlProvider locale="ru" messages={messages}>
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
      </div>
    </BrowserRouter>
  </IntlProvider>
);

export default App;
