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
} from "reactstrap";



const EmployerProfile = () => {

    const [demoModal, setDemoModal] = React.useState(false);
    const [demoModal2, setDemoModal2] = React.useState(false);

    const [formModal, setFormModal] = React.useState(false);
 
    
    return (
        <div>
            <Button color="primary" onClick={() => setDemoModal(true)}>
                Profile status
            </Button>
            
            <Modal isOpen={demoModal} toggle={() => setDemoModal(false)}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setDemoModal(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">Profile status</h4>
            </div>
            <div className="modal-body">
              <p>
              Accepted/Rejected
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
          
          <Button color="success" onClick={() => setDemoModal2(true)}>
                Jobs posted
            </Button>
            
            <Modal isOpen={demoModal2} toggle={() => setDemoModal2(false)}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setDemoModal2(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">Jobs posted</h4>
            </div>
            <div className="modal-body">
              <p>
                  Job1,
                  Job2,..
              </p>
            </div>
            <div className="modal-footer">
             
              <Button
                color="danger"
                type="button"
                onClick={() => setDemoModal2(false)}
              >
                Close
              </Button>
            </div>
          </Modal>
           
         <></>
        
         <Button color="success" size="," onClick={() => setFormModal(true)}>
              Post a job
            </Button>
  
          
<Table responsive >
    <thead>
        <tr>
            <th className="text-center">#</th>
            <th>User name</th>
            <th>Email</th>
            <th className="text-center">Password</th>
            <th className="text-right">Edit/Delete</th>
            
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
            
                <Button className="btn-icon" color="danger" size="sm">
                    <i className="fa fa-times" />
                </Button>
            </td>
        </tr>
       
    </tbody>
</Table>


<Table responsive >
    <thead>
        <tr>
            <th className="text-center">#</th>
            <th>Students applied</th>
            <th>p2</th>
            <th className="text-center">p3</th>
            <th className="text-right">Accept/Reject</th>

            
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">1</td>
            <td>p1</td>
            <td>p2</td>
            <td className="text-center">p3</td>
            <td className="text-right">
                <Button className="btn-icon" color="info" size="sm">
                    <i className="tim-icons icon-check-2"></i>
                </Button>{` `} 
            
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
                <h3 className="mb-0">Post a job</h3>
              </div>
            </div>
            <div className="modal-body">
            
              
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup
                    
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-copy-04" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Title"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup
                    
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-copy-04" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Decription"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup
                    
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-copy-04" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Department"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                
                <FormGroup className="mb-3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-calendar-60" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Start date"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-calendar-60" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="End date"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-calendar-60" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Application deadline date"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                
                <FormGroup className="mb-3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-paper" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Number of available internships"
                      type="number"
                    />
                  </InputGroup>
                </FormGroup>
                
                <FormGroup className="mb-3">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-coins" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Salary"
                      type="number"
                    />
                  </InputGroup>
                </FormGroup>
                
                <FormGroup className="mb-3">
                  <InputGroup
                    
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-copy-04" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Qualifications"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                
                <FormGroup className="mb-3">
                  <InputGroup
                    
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-square-pin" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Location"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                
                
                <FormGroup className="mb-3">
                  <InputGroup
                    
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-tag" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Application link"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                
                <FormGroup className="mb-3">
                  <InputGroup>
                  
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                    />
                  </InputGroup>
                </FormGroup>
                
                <FormGroup className="mb-3">
                  <InputGroup>
                  
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Job type"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                
                <FormGroup className="mb-3">
                  <InputGroup>
                  
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-bullet-list-67" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Job type"
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                
                
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Add
                  </Button>
                </div>
                
              </Form>
            </div>
          </Modal>
          
          
        </div>
    
    )
}

export default EmployerProfile
