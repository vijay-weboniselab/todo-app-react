import classes from './HttpPracticeLayout.module.css'
import React from 'react'
import UserList from './UserList/UserList'
export default function HttpPracticeLayout() {

  return (
      <div className={classes.container}>
         <div>
             <UserList></UserList>
         </div>
        
      </div>
    )
}
