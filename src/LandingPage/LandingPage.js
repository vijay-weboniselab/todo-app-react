import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import About from "../About/About";
import LoginPage from "../LoginPage/LoginPage";
import TaskDetails from "../TasksPage/TaskDetails/TaskDetails";
import TaskPageLayout from "../TasksPage/TaskPageLayout";
import Navigation from "./Navigation/Navigation";
import "./LandingPage.module.css"

export default function LandingPage() {
  return (
    <Fragment>
      <Navigation />
      <section className="main-container">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/tasks" component={TaskPageLayout} />
          <Route path="/task:id" component={TaskDetails} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={LoginPage} />
        </Switch>
      </section>
    </Fragment>
  );
}
