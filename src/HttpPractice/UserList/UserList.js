import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../User/User";
import UserProfile from "../UserProfile/UserProfile";

export default function UserList(props) {
  let [state, setUserlist] = useState({ userList: [] });
  let [selectedUser, setSelectedUser] = useState({})
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/api/user?limit=100", {
        headers: {
          "app-id": "5faeac89ea925565ef6a1ad5",
        },
      })
      .then((res) => {
        setUserlist({ userList: res.data.data });
      });
  }, []);

  //onUserSelect
  let onUserSelect = (value) =>{
    setSelectedUser({...value});
    console.log(selectedUser)
  }

  let users =  state.userList.map((user) => {
    return <User key={user.id} onUserSelect={onUserSelect} {...user} />;
  });
  return <div style ={{
      display: "flex"
  }}>
     <div>
         {users ? users : <h3>Loading...</h3>}
     </div>
     <div style={{
         position: "fixed",
         right : "10px"
     }}>
        <h3>user Profile</h3>
        {selectedUser.selectedUser?   <UserProfile user={selectedUser}/> : null}
     </div>
  </div>

}
