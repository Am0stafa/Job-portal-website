
import React,{useEffect,useState,useContext} from "react";
import axios from "axios";
import JobBox from './jobCard'
import {Context} from '../../Context'
import {
  Button,

 
} from "reactstrap";
export default function JobCardList() {
const api = axios.create({
  baseURL: "http://localhost:5000/api/"
})
const [jobs, setJobs] =useState([{}])
const [search ,setSearch,category,setCategory] = useContext(Context)

 const getAllJobs=() =>{
  api.get('/ShowJobs').then(res =>{
    setJobs(res.data.data.jobs.recordset)
    }).catch((err)=> console.log(err))
  
 }
 
 
 useEffect(()=>{
  getAllJobs();
 
 },[])
 
 
 console.log(category)
 
 const SearchButton= async () => {

  const res = await api.post('/JobSearch',
  {
   
      semester:category,
      allowed_faculty:search
    
  })
      
      setJobs(res.data.data.data.recordset)
      console.log(res.data.data.data)
     
    
 
 
 }
 
 
    return (
        <div>
          <Button color="primary" type="button" onClick={() =>{SearchButton()}}>
             Search
          </Button>
        <div className="mb-3">
       
        </div> 
        {
        
          jobs.map((m)=>(
            
                <JobBox key= {m.id} jobs={m}/>
            ))
        
        }
       </div>
    )
}
