import classes from './HttpPracticeLayout.module.css'
import React from 'react'
import UserList from './UserList/UserList'
import User from './User/User'
import UserProfile from './UserProfile/UserProfile'
export default function HttpPracticeLayout() {

  return (
      <div className={classes.container}>
         <div>
             <UserList></UserList>
         </div>
        
      </div>
    )
}
