import React,{useState,useContext} from 'react'
import {Context} from '../../Context'
import axios from "axios";



function SignIn() {
  const api = axios.create({
  baseURL: "http://localhost:5000/api"
  })
  const [usertype, setUsertype,userID, setUserID,isSigned, setIsSigned] = useContext(Context)
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [wrong , setWrong] = useState(false)
  const [uuid , setuuid] = useState(0)


const SignIn = async (e) => {
e.preventDefault();
    const res = await api.post('/UserLogin',
    {
     
      email:email,
      password:password
      
    })
        if(res.data.data.success ===false){
          setWrong(true)
          setPassword('')
          setEmail('')
          setUsertype('')
          setUserID(0)
        }
        else{
          setUserID(res.data.data.user_id)
          setWrong(false)
        
        }
        
        
       
      


}

    return (
<div>
     <div class="login-box pos1">
      <h2>Login</h2>
      {wrong ? <p>incorrect password</p>:<span></span>}
      <form>
        <div class="user-box">
          <input type="text" name="" required="" onChange={(e)=>{setUsertype(e.target.value)}}/>
          <label>User type</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" onChange={(e)=>{setEmail(e.target.value)}}/>
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" onChange={(e)=>{setPassword(e.target.value)}}/>
          <label>Password</label>
        </div>
        <button className="button" onClick={SignIn} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login!
        </button>
      </form>
    </div>

</div>
    )
}

export default SignIn
