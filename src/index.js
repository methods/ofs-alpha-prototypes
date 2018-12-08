import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Homepage from "./scenes/Homepage"

import "./styles/govuk/all.scss"

const App = (props) => {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))