import React, { useState } from "react";
import {useStore} from "../userStore";
import  User  from "./userList";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';

const UserSearch = () => {    

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
    <div className="container">
      <InputGroup className=" mb-3 d-flex justify-content-center">
       
        <div className="row">
          <div className="col-8">
            <Form.Control  
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              className="input-lg"
              type='text'
              value={searchTerm}
              onChange={handleSearchInputChange}
              placeholder='поиск...'
            />
            
          </div>
          <div className="col-4">
          <SplitButton
            variant="outline-secondary"
            title={sortOrder === "asc" ? "A-Z":"Z-A"}
            id="segmented-button-dropdown-2"
            alignRight
            onClick={handleSortOrderClick}
            onChange={handleSortByFieldChange}
          >
            
            <Dropdown.Item value="name">Name</Dropdown.Item>
            <Dropdown.Item value="phone">Number</Dropdown.Item>
            <Dropdown.Item value="email">E-Mail</Dropdown.Item>
            
          </SplitButton>
          </div>
        </div>
        
      </InputGroup>
      
        <div className="row d-flex justify-content-around">
          <div className="col-3 ">
            {users
              .filter(user => user.displayed === true)
              .map(user => <User user={user} key={user.id} />)}
          </div>
        </div>
      
        

    </div>
  )
};
export default UserSearch;