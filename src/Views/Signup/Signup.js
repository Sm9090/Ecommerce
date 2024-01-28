import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'
import { Register } from '../../Config/firebase'
import { Alert } from '@mui/material'



function Signup() {
  const [fullName, setFullName] = useState()
  const [number, phoneNumber] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [address, setAddress] = useState()
  const [sucessMsg, setSucessMsg] = useState()
  const [errorMsg, setErrorMsg] = useState()


  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Register({ fullName, number, email, password, address })
      setSucessMsg('Registered Sucessfully. You will be Automatically Redirect to login')
      setEmail('')
      setAddress('')
      setPassword('')
      phoneNumber('')
      setTimeout(() => {
        setSucessMsg('')
      navigate('/Login')
    },2000)
    } catch (e) {
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
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit} >
          <h3>Create Account</h3>
          <label>Full name</label>
          <input type="text" onChange={(e) => setFullName(e.target.value)} value={fullName} placeholder='FullName' />
          <label>Mobile Number</label>
          <input type="tel" onChange={(e) => phoneNumber(e.target.value)} value={number} placeholder='Mobile Number' />
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' />
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
          <label>Address</label>
          <textarea name="" id="" cols="30" rows="2" onChange={(e) => setAddress(e.target.value)} value={address} placeholder="Address"></textarea>
          <button>Sign Up</button>
          <p>Already have an Account? <span onClick={() => navigate('/Login')}>SignIn</span></p>
        </form>
      </div>
    </div>
  )
}

export default Signup