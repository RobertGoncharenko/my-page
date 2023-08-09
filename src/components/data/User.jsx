import React from "react";

const User = ({user}) =>  {
  
  return(
    <div style={{
      border:"2px solid black",
      height: 120,
      width: 290,
      borderRadius:"5px",
      margin:"18px",
      padding: "5px",
      textAlign: "center",
    }}>
      <ul>
        <li>Name: {user.name}</li>
        <li>Phone: {user.phone}</li>
        <li>Email: {user.email}</li>
      </ul>
    </div>
  )};

export default User;