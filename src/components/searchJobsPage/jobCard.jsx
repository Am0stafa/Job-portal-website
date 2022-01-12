import React from 'react'
import classnames from "classnames";

import {

    Card,
    CardHeader,   
    CardBody,
    TabContent,
    TabPane,
    Button
    
  
  } from "reactstrap";
const JobBox = ({jobs}) => {
    const [iconTabs, setIconsTabs] = React.useState(1);
    return (
 
    <div >
        <div className="mb-3">
    </div> 
    
        <Card >
          <CardHeader>
         <div>{jobs.title}</div>
          </CardHeader>
          <CardBody>
            <TabContent className="tab-space" activeTab={"link" + iconTabs}>
              <TabPane tabId="link1">
                <p>
                Description:  {jobs.JOB_description}
                  <br />
                Department:  {jobs.department}
                <br />
                Start date:  {jobs.JOB_start_date}
                  <br />
                End date:  {jobs.end_date}
                <br />
                Application deadline:  {jobs.application_deadline}
                <br />
                Number of available internships:  {jobs.num_of_available_internships}
                  <br />
                Salary range:  {jobs.salary_range}
                  <br />
                Application deadline:  {jobs.application_deadline}
                <br />
                Qualifications:  {jobs.qualifications}
                  <br />
                Location:  {jobs.JOB_location}
                <br />
                Job type:  {jobs.job_type}
                <br />
                Semester:  {jobs.semester}
                <br />
                Faculty_name:  {jobs.faculty_name}
                <br />
                

                </p>
              </TabPane>

             
            </TabContent>
            <Button color="info" disabled={true}>Apply!</Button>
          </CardBody>

        </Card>
      
      </div>
    )
}    //disabled={!this.state.value}

export default JobBox
