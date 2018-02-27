import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import ru from "react-intl/locale-data/ru";
import Home from "./Home";
import Search from "./Search";
import "normalize.css";
import "flexboxgrid2";

addLocaleData(ru);

class App extends Component {
  render() {
    return (
      <IntlProvider locale="ru">
        <BrowserRouter>
          <div className="App">
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
          </div>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

export default App;
