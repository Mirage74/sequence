import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Seq  from "./components/seq";
import 'react-bootstrap/dist/react-bootstrap';


class App extends Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <div id="root">
            <Switch>
              <Route
                exact path="/"
                render={(props) => <Seq {...props} />}
              />

            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}



export default App;
