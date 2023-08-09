import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function User ({user}) {
  return (
    <Card style={{ width: '18rem', marginBottom: '10px'}} bg="secondary">
      <ListGroup variant="flush">
        <ListGroup.Item>Name: {user.name}</ListGroup.Item>
        <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default User;
// const User = ({user}) =>  {
  
//   return(
    
//     // <div>
//     //   <ul>
//     //     <li>Name: {user.name}</li>
//     //     <li>Phone: {user.phone}</li>
//     //     <li>Email: {user.email}</li>
//     //   </ul>
//     // </div>
//   )};

// export default User;

/*
<div style={{
      border:"2px solid black",
      height: 120,
      width: 290,
      borderRadius:"5px",
      margin:"18px",
      padding: "5px",
      textAlign: "center",
    }}>
 */