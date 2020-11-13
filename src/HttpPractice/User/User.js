import React, { Fragment } from 'react'
import classes from './User.module.css'
export default function User(props) {
    return (
        <Fragment>
            <div className={classes.card}>

                <div>
                    <img src={props.picture} alt="profile image" width="100px" height="100px"/>
                </div>
                <div>
                    <span>{props.title} {props.firstName} {props.lastName} </span>
                    <span>{props.email.trim('\n')}</span>
                </div>
               <button onClick={(event) => props.onUserSelect({...props})}> View Profile</button>
            </div>
        </Fragment>
    )
}
