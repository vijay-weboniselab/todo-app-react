import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import About from "../About/About";
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
          <Route path="/home" exact render={()=> <h1>welcome</h1>} />
          <Route path="/tasks" component={TaskPageLayout} />
          <Route path="/task:id" component={TaskDetails} />
          <Route path="/about" component={About} />
        </Switch>
      </section>
    </Fragment>
  );
}
