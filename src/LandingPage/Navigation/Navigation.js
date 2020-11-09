import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <Fragment>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/tasks:id">Tasks Details</Link></li>
                <li><Link to="/about">About</Link></li>
            </nav>
        </Fragment>
    )
}
