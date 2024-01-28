import { Alert } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignIn } from '../../Config/firebase'
import './login.css'


function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [sucessMsg, setSucessMsg] = useState()
  const [errorMsg, setErrorMsg] = useState()

const navigate = useNavigate()

  const handleLogin = async (e) =>{
    e.preventDefault()
    try{
    await SignIn({email ,password})
    setSucessMsg('Login Succesfully, You will be Automatically Redirect to Homepage ')
    setEmail('')
    setPassword('')
    setErrorMsg('')
    setTimeout(() => {
      navigate('/')
    }, 2000);
  }catch(e){
    setErrorMsg(e.message.split(':')[1])
  }
  }


  return (
    <div>
    {sucessMsg && <>
      <div className="sucess-msg">
        <Alert
          size="md"
          severity="success">{sucessMsg}</Alert>
      </div>
    </>}
    {errorMsg && <>
      <div className="error-msg">
        <Alert
          size="md"
         severity="error">{errorMsg}</Alert>
      </div>
    </>}
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin} >
        <h3>Login Account</h3>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
        <button>Sign In</button>
        <p>Don't have an Account? <span onClick={() => navigate('/Signup')}>SignUp</span></p>
      </form>
    </div>
  </div>
  )
}

export default Login