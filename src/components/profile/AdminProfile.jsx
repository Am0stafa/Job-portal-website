import React from 'react'
import {
Button,
Modal,
Table,

} from "reactstrap";

const AdminProfile = () => {


    const [demoModal2, setDemoModal2] = React.useState(false);

 


    return (
    
    
    <div>
       
      
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
        <th>Employee</th>
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

      
      
    </div>

 )
}

export default AdminProfile
