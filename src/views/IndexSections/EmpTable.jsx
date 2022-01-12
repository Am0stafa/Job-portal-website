
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
    }).catch((err)=> console.log(err))
  
 }
 useEffect(()=>{
  getAllEmps();
 
 
 },[])


  
  return (
    <>
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
                  {emp.map(e=>(
                  
                   <tr>
                      <td key={1}>{e.Employer_ID}</td>
                      <td key={2}>{e.firstName}</td>
                      <td key={3}>{e.lastName}</td>
                      <td key={4}>{e.Company_name}</td>
                      <td key={5}>{e.website}</td>
                      <td key={6}>{e.type_of_business}</td>
                      <td key={7}>{e.industry}</td>
                      <td className="text-center" key={8}>{e.products_or_services}</td>
                    
                    </tr>
                  
                  
                  ))}
                  {
                  
                  }
                  
                   
                   
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

