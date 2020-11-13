import React from "react";
import { CSSTransition,SwitchTransition,Transition} from 'react-transition-group'
import BarChart from "./BarChart/BarChart";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import classes from "./ChartPageLayout.module.css";
import PieChart from "./PieChart/PieChart";
import LineChart from "./LineChart/LineChart";
import Histogram from "./Histogram/Histogram";

const ChartPageLayout = (props) => {
  return (
    <Router>
      <div className={classes.container}>
        <div className={classes.navContainer}>
            <NavLink activeClassName={classes.active} className={classes.listItem} to={props.match.url + ""} exact>
              barchart
            </NavLink>
            <NavLink activeClassName={classes.active} className={classes.listItem} to={props.match.url + "/linechart"} exact>
              linechart
            </NavLink>
            <NavLink activeClassName={classes.active} className={classes.listItem} to={props.match.url + "/histogram"} exact>
              histogram
            </NavLink>
            <NavLink activeClassName={classes.active} className={classes.listItem} to={props.match.url + "/piechart"} exact>
              piechart
            </NavLink>
        </div>
        <div className={classes.chatContainer}>
          <Switch>
            <Route path={props.match.url + "" }exact component={BarChart} />
            <Route path={props.match.url + "/linechart"} component={LineChart}/>
            <Route path={props.match.url + "/histogram"} component={Histogram}/>
            <Route path={props.match.url + "/piechart" } component={PieChart} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default ChartPageLayout;
