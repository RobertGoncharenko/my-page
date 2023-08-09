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
    <>
    <InputGroup className="mb-3 d-flex justify-content-center">
        <Form.Control  
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          className="input-lg"
          type='text'
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder='поиск...'
        />
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
      </InputGroup>
      <div>
        {users
          .filter(user => user.displayed === true)
          .map(user => <User user={user} key={user.id} />)}
      </div>
    </>
  )
};
export default UserSearch;