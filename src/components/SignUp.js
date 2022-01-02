import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { signUp } from '../services/authService'


const SignUp = ({ history }) =>{
  const{ dispatch } = useGlobalState()

  const initialFormData = {
    email: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialFormData)
  let navigate = useNavigate();
  function handleFormData(e){
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    
    signUp(change(formData))
    .then(({username, jwt, id}) =>{

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
    navigate('/')
  })
  .catch(error =>{
      //setError("user exists or password mismatch")
  })
  }

  function change(data){
    const filteredData = {user: {seeker_attributes:{}}}
    for (const value in data) {
      if (value == "username" || value == "email"|| value == "password"|| value === "password_confirmation"){
        filteredData.user[value] = data[value]
      }
      else{
        filteredData.user.seeker_attributes[value] = data[value]
      }
      filteredData.user["seeker"] = false
    }
    return filteredData
  }


  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" value={formData.username} onChange={handleFormData}/>

        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" value={formData.email} onChange={handleFormData}/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>

        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input type="password" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} onChange={handleFormData}/>

        <label htmlFor="first_name">First Name:</label>
        <input type="text" name="first_name" id="first_name" value={formData.first_name} onChange={handleFormData}/>

        <label htmlFor="last_name">Last Name:</label>
        <input type="text" name="last_name" id="last_name" value={formData.last_name} onChange={handleFormData}/>

        <label htmlFor="phone">Phone Number:</label>
        <input type="number" name="phone" id="phone" value={formData.phone} onChange={handleFormData}/>

        {/* <input type="file" name="resume" value={formData.resume} onChange={handleFormData} /> */}

        <input type="submit" value="Sign_up" />
      </form>
    </div>   
  )
}

export default SignUp;