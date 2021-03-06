import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import { signUp } from '../services/authService'
import styled from "styled-components";

export const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  
`;

const SignUp = ({ history }) =>{
  const{ dispatch } = useGlobalState()

  const initialFormData = {
    email: "",
    password: "",
  }
  const errors = {
    username: false, 
    password: false,
    password_confirmation: false,
    email: false
  }

  const [formData, setFormData] = useState(initialFormData)

  const [error, setError] = useState(errors)

  let navigate = useNavigate();

  function handleFormData(e){
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    })
  }

  function handleFileData(e){
    setFormData({
        ...formData,
        "resume" : e.target.files[0]
    })
  }

  function handleSubmit(e){
    e.preventDefault()


    signUp(change(formData))
    .then(({username, jwt, id, test}) =>{
      if (test) {
        setError(test)
      } 
      else {
      sessionStorage.setItem("username", username)
      sessionStorage.setItem("userId", id)
      sessionStorage.setItem("token",jwt)
    dispatch({
        type: "setLoggedInUser",
        data:username
    })
    dispatch({
        type: "setToken",
        data:jwt    
    })
    dispatch({
      type: "user_id",
      data:id
    })
    navigate('/finder-profile')
    }})
  .catch(error =>{
      setError(error)
  })
  }

  function change(data){
    const form  = new FormData();
    for (const value in data) {
      if (value === "username" || value === "email"|| value === "password"|| value === "password_confirmation"){
        form.append(`user[${value}]`, data[value])
      }
      else{
        form.append(`user[seeker_attributes][${value}]`, data[value])
      }
    }
    form.append(`user[account_seeker]`, "true")

      dispatch({
        type: "seeker",
        data: true 
    })
    return form
  }

  return (
    <div className="form-row">
      <SignUpForm>
      <h1>Sign Up</h1>
      
      <form onSubmit={handleSubmit}>
        
        <div className="form-group2">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" value={formData.username} onChange={handleFormData} required className="form-control mb-2"/>
        </div>
        
        {/* Error message  */}
        {error.username &&  
            <div className="alert alert-danger" role="alert">{error.username} </div>}

        <div className="form-group2">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" value={formData.email} onChange={handleFormData} required className="form-control mb-2"/>
        </div>
        
        <div className="form-group2">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData} required  className="form-control mb-2"/>
        </div>

        {/* Error message  */}
        {error.password &&  
            <div className="alert alert-danger" role="alert">{error.password} </div>}

        <div className="form-group2">
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <input type="password" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} required onChange={handleFormData} className="form-control mb-2"/>
        </div>
        
        {/* Error message  */}
        {error.password_confirmation &&  
            <div className="alert alert-danger" role="alert">{error.password_confirmation} </div>}

        <div className="form-group2">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" name="first_name" id="first_name" value={formData.first_name} onChange={handleFormData} required className="form-control mb-2"/>
        </div>
        <div className="form-group2">
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" name="last_name" id="last_name" value={formData.last_name} onChange={handleFormData} required className="form-control mb-2"/>
        </div>
        <div className="form-group2">
          <label htmlFor="phone">Phone Number:</label>
          <input type="number" name="phone" id="phone" value={formData.phone} onChange={handleFormData} required className="form-control mb-2"/>
        </div>
         <label htmlFor="phone">Resume</label>
        <input type="file" name="resume"  onChange={handleFileData} required className="form-control-file" />

        <input type="submit" value="Sign up" className="btn btn-primary"/>
      </form>

      <p>Looking for the Company Signup page</p>

      <Link to = "/companysignup"><button type="submit" className="btn btn-primary btn-xs ">Company Signup</button></Link>
      
      </SignUpForm> 
    </div>  
  )
}

export default SignUp;