import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Homepage from "./scenes/Homepage"
import Styleguide from "./scenes/Styleguide"

import "./styles/all.scss"

const App = (props) => {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/styleguide" component={Styleguide} />
        </Switch>
      </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))