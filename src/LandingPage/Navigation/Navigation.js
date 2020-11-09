import React, { Fragment } from 'react'
import {  NavLink, withRouter } from 'react-router-dom';
import './Navigation.module.css';
import classes from './Navigation.module.css';
function Navigation(props) {
 
    return (
        <Fragment>
            <nav >
                <li><NavLink activeClassName={classes.active} to="/home">Home</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/Login">Login</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/tasks">Tasks</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/tasks:id">Tasks Details</NavLink></li>
                <li><NavLink activeClassName={classes.active} to="/about">About</NavLink></li>
            </nav>
        </Fragment>
    )
}

export default withRouter(Navigation)