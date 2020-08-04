import React, { Component } from "react";
import FiveDaysForeCast from "./components/FiveDaysForecast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lines from "./components/LineChart";
import "./styles.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={FiveDaysForeCast} />
            <Route
              exact
              path='/hourly'
              render={(props) => <Lines {...props} />}
            />
          </Switch>
        </div>
      </Router>
      // <Lines/>
    );
  }
}

export default App;
