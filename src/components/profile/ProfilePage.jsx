import React from 'react'
import AdminProfile from './AdminProfile'
import EmployerProfile from './EmployerProfile'
import StudentProfile from './StudentProfile'

function ProfilePageOwn() {
    
const [user , setuser] = React.useState('student')
    return (
        <div>
            {user === 'student'? <AdminProfile/> :<div> no user</div>}
        </div>
    )
}

export default ProfilePageOwn
