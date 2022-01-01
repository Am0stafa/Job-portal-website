import React from 'react'
import StudentProfile from './StudentProfile'

function ProfilePageOwn() {
    
const [user , setuser] = React.useState('student')
    return (
        <div>
            {user === 'student'? <StudentProfile/> :<div> no user</div>}
        </div>
    )
}

export default ProfilePageOwn
