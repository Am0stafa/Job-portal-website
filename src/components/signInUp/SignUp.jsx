import React,{useState,useContext} from 'react'
import {Context} from '../../Context'
import axios from "axios";

function SignUp() {
const [studentdis, setstudentdis] = useState(false);
const [empdis, setEmpdis] = useState(false);
const [isSigned, setIsSigned,usertype, setUsertype,userID, setUserID,userPass, setUserpass,first_name,setFirst_name] = useContext(Context)
const [email,setEmail] = useState('');
const [middle_name,setMiddle_name] = useState('');
const [last_name,setLast_name] = useState('');
const [GIU_id,setGIU_id] = useState(0);
const [semester,setSemester] = useState(1);
const [faculty,setFaculty] = useState('');
const [major,setMajor] = useState('');
const [gpa,setGpa] = useState(0.7);
const [adress,setAdress] = useState('');
const [company_name,setCompany_name] = useState('');
const [company_phone,setCompany_phone] = useState(0);
const [fax,setFax] = useState(0);
const [company_website,setCompany_website] = useState('');
const [type_of_business,setType_of_business] = useState('');
const [establishment_year,setEstablishment_year] = useState('');
const [origin_country,setOrigin_country] = useState('');
const [industry,setIndustry] = useState('');
const [n_current_employees,setN_current_employees] = useState(1);
const [products_services,setProducts_services] = useState('');
const [age,setAge] = useState(1);
//
const api = axios.create({
  baseURL: "http://localhost:5000/api"
})
const blocks =()=>{

  if(usertype === 'Student')
    setEmpdis(true)
  else if(usertype === 'Employer'){
    setstudentdis(true)
    setEmpdis(false)
  }
  else if(usertype === 'Admin' || usertype === 'Career office coordinator' || usertype === 'Faculty representative' || usertype === 'Academic_Advisor'){
    setstudentdis(true)
    setEmpdis(true)
  } 

}

const SignUp=  (e) => {
e.preventDefault();
console.log('i was called')

   api.post('/UserRegister',{
    usertype:usertype,
    email: email,
    first_name:first_name,
    middle_name:middle_name,
    last_name:last_name,
    GIU_id:GIU_id,
    semester:semester,
    faculty:faculty,
    major:major,
    gpa:gpa,
    adress,
    company_name,
    company_phone,
    fax,
    company_website,
    type_of_business,
    establishment_year,
    origin_country,
    industry,
    n_current_employees,
    products_services,
    age
      
      
    
   })
  .then(res =>{
     
    
    console.log('i am here')
      api.get('/getuserID') .then(res =>{
       setUserID(res.data.data.data.recordset[0].users_ID)
       setIsSigned(true)
       
    })
     
  

   })
  }


    return (
        <div>
    <div class="login-box pos2">
      <h2>Sign Up</h2>
      <form>
      <div class="user-box">
          <input type="text" name="" required="" onChange={(e)=>{setUsertype(e.target.value)}} onKeyUp={blocks} />
          <label>User type</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required=""  onChange={(e)=>{setEmail(e.target.value)}} />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" onChange={(e)=>{setFirst_name(e.target.value)}} />
          <label>First name</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" disabled={studentdis} onChange={(e)=>{setMiddle_name(e.target.value)}} />
          <label>Middle name</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" disabled={studentdis}  onChange={(e)=>{setLast_name(e.target.value)}} />
          <label>Last name</label>
        </div>
        <div class="user-box">
          <input type="number" name="" required="" disabled={studentdis}  onChange={(e)=>{setGIU_id(e.target.value)}} />
          <label>GIU id</label>
        </div>
        <div class="user-box">
          <input type="number" name="" required="" max='10' min='1' disabled={studentdis}  onChange={(e)=>{setSemester(e.target.value)}} />
          <label>Semester</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" disabled={studentdis}  onChange={(e)=>{setFaculty(e.target.value)}} />
          <label>Faculty</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" disabled={studentdis}  onChange={(e)=>{setMajor(e.target.value)}} />
          <label>Major</label>
        </div>
        <div class="user-box">
          <input type="number" name="" required=""  disabled={studentdis}  onChange={(e)=>{setGpa(e.target.value)}} />
          <label>GPA</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" disabled={studentdis && empdis} onChange={(e)=>{setAdress(e.target.value)}} />
          <label>Adress</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" disabled={empdis}  onChange={(e)=>{setCompany_name(e.target.value)}} />
          <label>Company name</label>
        </div>
        <div class="user-box">
          <input type="number" name="" required="" disabled={empdis}  onChange={(e)=>{setCompany_phone(e.target.value)}} />
          <label>Company phone</label>
        </div>
        <div class="user-box">
          <input type="number" name="" required="" disabled={empdis}  onChange={(e)=>{setFax(e.target.value)}} />
          <label>Fax</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" disabled={empdis}  onChange={(e)=>{setCompany_website(e.target.value)}} />
          <label>Company website</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" disabled={empdis} onChange={(e)=>{setType_of_business(e.target.value)}}  />
          <label>Type of business</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" disabled={empdis} onChange={(e)=>{setEstablishment_year(e.target.value)}}  />
          <label>Establishment year</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" disabled={empdis}  onChange={(e)=>{setOrigin_country(e.target.value)}} />
          <label>Origin country</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" disabled={empdis}  onChange={(e)=>{setIndustry(e.target.value)}} />
          <label>Industry</label>
        </div>
        <div class="user-box">
          <input type="number" name="" required="" min='1'  disabled={empdis}  onChange={(e)=>{setN_current_employees(e.target.value)}} />
          <label>Number of employes</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required=""  disabled={empdis}  onChange={(e)=>{setProducts_services(e.target.value)}} />
          <label>Products or services</label>
        </div>
        <div class="user-box">
          <input type="number" name="" required="" min='1' max='99' disabled={studentdis}  onChange={(e)=>{setAge(e.target.value)}} />
          <label>Age</label>
        </div>
        <button className="button" onClick={(e)=>{SignUp(e)}} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign Up!
        </button>
      </form>
    </div>
        </div>
    )
}

export default SignUp
