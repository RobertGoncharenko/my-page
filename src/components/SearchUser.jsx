import React, { useState } from "react";
import {useStore} from "../userStore";
import  User  from "./User";

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
    <div>
      <input 
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
         </select>
      
      <div>
        {users
          .filter(user => user.displayed === true)
          .map(user => <User user={user} key={user.id} />)}
      </div>
    </div>
  )
};

export default UserSearch;