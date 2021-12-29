import React, { useState } from 'react'

import {

  FormGroup,
  Input,

} from "reactstrap";
const JobsPage = () => {
//data from db
 // const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  
  //get data from db
  const byCategory = (user, category) => {
    // if (category) {
    //   return user.category === category;
    // } else return user;
  };
  const bySearch = (user, search) => {
    // if (search) {
    //   return user.name.toLowerCase().includes(search.toLowerCase());
    // } else return user;
  };

  const filteredList = (users, category, search) => {
    // return users
    //   .filter(user => byCategory(user, category))
    //   .filter(user => bySearch(user, search));
  };

  return (
    <div>
     <FormGroup>
                <Input defaultValue="" placeholder="Search for job" type="text" />
    </FormGroup>
 
      <select onChange={e => setCategory(e.target.value)}>
        <option value="">Choose Semester</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>{" "}
      </select>
    </div>
  );
}



export default JobsPage


