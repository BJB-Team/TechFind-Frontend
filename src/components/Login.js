import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import { login } from '../services/authService'
import styled from "styled-components";





export const LoginForm = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  
`;


const Login = () => {
  const{ store, dispatch } = useGlobalState()
  let navigate = useNavigate();
  const initialFormData = {
    email: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialFormData)

  function handleFormData(e) {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    })
}

function handleSubmit(e) {
    e.preventDefault()
    login(formData)
    .then((user)=>{
        if (user.error) {
            // 
        } else {
        console.log(user)
        sessionStorage.setItem("userId", user.id)
        sessionStorage.setItem("username",user.username)
        sessionStorage.setItem("token",user.jwt)
        dispatch({
            type: "setLoggedInUser",
            data:user.username
        })
        dispatch({
            type: "setToken",
            data:user.jwt
        })
        dispatch({
            type: "user_id",
            data:user.id
        })
        dispatch({
            type: "seeker",
            data:user.account_seeker
        })
    }
        navigate('/finder-profile')
    })
    .catch(error => {
        console.log(error)
    })
  }
    
  return (
    <div className="form-group">
    <LoginForm>  
    <h1>TechFind</h1>
    <h2>Enter your login details</h2>
        <form onSubmit={handleSubmit}>

           {/* Error message */}
            {/* <div className="alert alert-danger" role="alert">
                <p>Incorrent username or password</p>
            </div>  */}

            {/* Change this to accept Username or email */}
            <div className="form-group">
                <label htmlFor="username">Username or Email</label>
                <input type="email" placeholder="Username or Email Address" name="email" id="email" value={formData.email} onChange={handleFormData} className="form-control mb-2"/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your Password" name="password" id="password" value={formData.password} onChange={handleFormData} className="form-control mb-2"/>
            </div>

            <input type="submit" value="Login" className="btn btn-primary"/>

            <p>Don't have an account? <Link to = "/signup">Create One</Link></p>
        </form>
         </LoginForm>  
    </div>  
  )
}

export default Login