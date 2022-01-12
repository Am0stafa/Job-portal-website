import React,{useContext,useEffect} from "react";
import {Context} from '../../Context'
import axios from "axios";
import {
Button,
Modal,
Table,
Form,
FormGroup,
InputGroup,
InputGroupAddon,
InputGroupText,
Input,

} from "reactstrap";
import classnames from "classnames";

function StudentProfile() {
const [demoModal, setDemoModal] = React.useState(false);
const [formModal, setFormModal] = React.useState(false);
const [emailFocus, setEmailFocus] = React.useState(false);
const [user, setUser] = React.useState([{}]);
const [phone, setPhone] = React.useState(0);
const api = axios.create({
  baseURL: "http://localhost:5000/api/"
})

useEffect(() => {

  api.post('/ViewProfile',{
    userId:1150
  
  }).then(res =>{
    setUser(res.data.data.data.recordset)
    }).catch((err)=> console.log(err))
  
 



},[])




console.log(phone)
    return (
        <div>
            <Button color="primary" onClick={() => setDemoModal(true)}>
              Application status
            </Button>
            
            <Modal isOpen={demoModal} toggle={() => setDemoModal(false)}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setDemoModal(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">Application status</h4>
            </div>
            <div className="modal-body">
              <p>
               job title,
               Employee company name
              </p>
            </div>
            <div className="modal-footer">
             
              <Button
                color="danger"
                type="button"
                onClick={() => setDemoModal(false)}
              >
                Close
              </Button>
            </div>
          </Modal>
          
          
          
<Table responsive >
    <thead>
        <tr>
            <th className="text-center">#</th>
            <th>User name</th>
            <th>Last name</th>
            <th>email</th>
            <th className="text-center">Password</th>
            <th className="text-right">Edit/Add phone number/Delete</th>
            
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">{user[0].users_ID}</td>
            <td>{user[0].firstName}</td>
            <td>{user[0].lastName}</td>
            <td>{user[0].email}</td>
            <td className="text-center">{user[0].pass}</td>
           
            <td className="text-right">
                <Button className="btn-icon" color="info" size="sm">
                    <i className="fa fa-user"></i>
                </Button>{` `} 
            <Button color="success" size="sm" onClick={() => setFormModal(true)}>
              Add phone number
            </Button>
            <Button className="btn-icon" color="danger" size="sm">
                    <i className="fa fa-times" />
                </Button>
            </td>
        </tr>
       
    </tbody>
</Table>




<Modal
            modalClassName="modal-black"
            isOpen={formModal}
            toggle={() => setFormModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Add phone number</h3>
              </div>
            </div>
            <div className="modal-body">
            
              
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-mobile" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Phone"
                      type="number"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}//!
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
              
                
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" >
                    Add
                  </Button>
                </div>
                
              </Form>
            </div>
          </Modal>
        </div>
    )
}

export default StudentProfile
