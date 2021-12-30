import React from 'react'

function SignIn() {
    return (
<div>
     <div class="login-box pos1">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required=""/>
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required=""/>
          <label>Password</label>
        </div>
        <button className="button" >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>

</div>
    )
}

export default SignIn
