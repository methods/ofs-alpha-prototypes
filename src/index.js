import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import ChooseCourse from "./scenes/ChooseCourse"
import Outcomes from "./scenes/Outcomes"
import Styleguide from "./scenes/Styleguide"

import "./styles/all.scss"

const App = (props) => {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={ChooseCourse} />
            <Route exact path="/styleguide" component={Styleguide} />
            <Route exact path="/choose-a-course/outcomes" component={Outcomes} />
            <Route exact path="/choose-a-course" component={ChooseCourse} />
            <Route exact path="/choose-a-course/versions/video" component={ChooseCourse} />
            <Route exact path="/choose-a-course/versions/search" component={ChooseCourse} />
            <Route exact path="/choose-a-course/versions/quiz" component={ChooseCourse} />
            <Route exact path="/choose-a-course/versions/case-studies" component={ChooseCourse} />
        </Switch>
      </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))