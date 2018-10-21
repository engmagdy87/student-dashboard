import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import LoadingIndicator from "@Components/LoadingIndicator";

import "@static/styles/index.css";

import * as serviceWorker from "./serviceWorker";

const Login = Loadable({
  loader: () => import("@Containers/Login"),
  loading: LoadingIndicator
});

const Registration = Loadable({
  loader: () => import("@Containers/Registration"),
  loading: LoadingIndicator
});

const Profile = Loadable({
  loader: () => import("@Containers/Profile"),
  loading: LoadingIndicator
});

const ExamResults = Loadable({
  loader: () => import("@Containers/ExamResults"),
  loading: LoadingIndicator
});

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/profile" component={Profile} />
      <Route path="/results" component={ExamResults} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
