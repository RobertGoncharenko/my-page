import React, { useState } from "react";
import {useStore} from "../userStore";
import  ListGroupExample  from "./userList";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';

const UserSearch = () => {
  // function SegmentedButtonDropdownsExample() {
    
      

  const { users, handleSortOrder, handleSearch, sortField, handleSortByField, sortOrder } = useStore();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    const {value} = event.target;
    setSearchTerm(value);
    handleSearch(value);
  };

  const handleSortOrderClick = () => {
    handleSortOrder();
    handleSortByField(sortField);
  }

  const handleSortByFieldChange = (event) => {
    const {value} = event.target;
    handleSortByField(value);
  }

  return (
    // <div>
    <>
    <InputGroup className="mb-3 d-flex justify-content-center">
        <Form.Control  
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          className="input-lg"
        />
        <SplitButton
          variant="outline-secondary"
          title="Action"
          id="segmented-button-dropdown-2"
          alignRight
        >
          <Dropdown.Item value="name">Name</Dropdown.Item>
          <Dropdown.Item value="phone">Number</Dropdown.Item>
          <Dropdown.Item value="email">E-Mail</Dropdown.Item>
        </SplitButton>
      
      {/* <input 
          type='text'
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder='поиск...'
         />
         <button onClick={handleSortOrderClick}>
          {sortOrder === "asc" ? "A-Z":"Z-A"}</button>
         <select  
           onChange={handleSortByFieldChange}
           style={{marginLeft: "10px"}}
         >
           <option value="name" >Name</option>
           <option value="phone" >Number</option>
           <option value="email">E-Mail</option>
         </select> */}
      </InputGroup>
      <div>
        {users
          .filter(user => user.displayed === true)
          .map(user => <ListGroupExample user={user} key={user.id} />)}
      </div>
    
    {/* </div> */}
    </>
  )
};
// export default SegmentedButtonDropdownsExample;
export default UserSearch;