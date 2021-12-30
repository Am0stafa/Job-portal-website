import React from 'react'
import JobBox from './jobCard'

export default function JobCardList() {
    //user
   // const [user , setUser]= React.useState({user: "user2"},{user: "user2"})
    return (
        <div>
        <div className="mb-3">
          <small className="text-uppercase font-weight-bold">
            Jobs
          </small>
        </div> 
        {
        
           // user.map((m)=>(
            
                <JobBox/>
           // ))
        
        }
       </div>
    )
}
