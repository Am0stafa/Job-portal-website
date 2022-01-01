import React from 'react'
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
Label
} from "reactstrap";
import './table.css'
import classnames from "classnames";

function StudentProfile() {

const [demoModal, setDemoModal] = React.useState(false);
const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

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
            <th>Email</th>
            <th className="text-center">Password</th>
            <th className="text-right">Edit/Add phone number/Delete</th>
            
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">1</td>
            <td>name</td>
            <td>email</td>
            <td className="text-center">password</td>
           
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
                      type="email"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
              
                
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Sign in
                  </Button>
                </div>
                
              </Form>
            </div>
          </Modal>
        </div>
    )
}

export default StudentProfile
