import React from 'react'
import { useLocation } from 'react-router'

export default function UserProfile(props) {
    console.log(props)

    
    return (
        <div>
            <img src={props.picture} alt="profile image"/>
        <h4>{props.id}</h4>
        <h4>{props.title} {props.firstName} {props.lastName} </h4>
        <h4>{props.gender}</h4>
        <h4>{props.email}</h4>
        <h4>{props.dateOfBirth}</h4>
        <h4>{props.registerDate}</h4>
        <h4>{props.phone}</h4>
        <h4>{props.location}</h4>
        </div>
    )
}
