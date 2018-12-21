import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Checklist from "./scenes/Checklist"
import Outcomes from "./scenes/Checklist/scenes/Outcomes"

import "./styles/all.scss"

const App = (props) => {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Checklist} />
            <Route exact path="/choose-a-course/outcomes" component={Outcomes} />
            <Route exact path="/choose-a-course" component={Checklist} />
            <Route exact path="/choose-a-course/versions/video" component={Checklist} />
            <Route exact path="/choose-a-course/versions/search" component={Checklist} />
            <Route exact path="/choose-a-course/versions/quiz" component={Checklist} />
            <Route exact path="/choose-a-course/versions/case-studies" component={Checklist} />
        </Switch>
      </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))