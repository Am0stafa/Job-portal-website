
import React,{useEffect,useState} from "react";
import axios from "axios";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

const EmpTable = () => {

const api = axios.create({
  baseURL: "http://localhost:5000/api/"
})

const [emp, setEmp] =useState([{}])
 const getAllEmps=() =>{
  api.get('/ShowEmployers').then(res =>{
    setEmp(res.data.data.data.recordset)
      console.log( emp[0].Company_name)
    }).catch((err)=> console.log(err))
  
 
 }

  
  return (
    <>
    <button onClick={()=>{getAllEmps()}}>fetch </button>
      <div className="content">
        <Row>
         
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Employers</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>firstName</th>
                      <th>lastName</th>
                      <th>Username</th>
                      <th>Company_name</th>
                      <th>website</th>
                      <th>type_of_business</th>
                      <th>industry</th>
                      <th className="text-center">products/services</th>
                    </tr>
                  </thead>
                  <tbody>
                  {/* {emp.map((e)=>{
                  
                    <tr key={e.Employer_ID}>
                      <td>{e.firstName}</td>
                      <td>{e.lastName}</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                  
                  
                  })} */}
                    <tr>
                      <td>{emp[0].Company_name}</td>
                    
                    </tr>
                   
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default EmpTable;

