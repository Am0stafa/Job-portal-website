import React,{useContext} from "react";
import {

  FormGroup,
  Input,

} from "reactstrap";
import JobCardList from './jobCardList';
import './SelectButton.css'
import {Context} from './../../Context'

const JobsPage = () => {
//data from db
 // const [users, setUsers] = useState([]);
 const [search ,setSearch,category,setCategory] = useContext(Context)
 // console.log(category)
  return (
  <div>
    <div>
     <FormGroup>
                <Input defaultValue="" placeholder="Search for job" type="text" onChange={e => setSearch(e.target.value)} />
    </FormGroup>
 
      <select onChange={e => setCategory(e.target.value)} id="blue">
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
    <JobCardList/>  
    </div>
  );
}



export default JobsPage


