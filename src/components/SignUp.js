import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import { signUp } from '../services/authService'


const SignUp = ({ history }) =>{
  const{ dispatch } = useGlobalState()

  const initialFormData = {
    email: "",
    password: "",
  }

  const [formData, setFormData] = useState(initialFormData)
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
    .then(({username, jwt, id}) =>{
      console.log(id)
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
    navigate('/')
  })
  .catch(error =>{
      //setError("user exists or password mismatch")
  })
  }

  function change(data){
    // const filteredData = {user: {seeker_attributes:{}}}
    const form  = new FormData();
    for (const value in data) {
      if (value == "username" || value == "email"|| value == "password"|| value === "password_confirmation"){
        form.append(`user[${value}]`, data[value])
        // filteredData.user[value] = data[value]
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
    <div className="form-group">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" value={formData.username} onChange={handleFormData} required className="form-control mb-2"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" value={formData.email} onChange={handleFormData} required className="form-control mb-2"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData} required  className="form-control mb-2"/>
        </div>
        <div className="form-group">
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <input type="password" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} required onChange={handleFormData} className="form-control mb-2"/>
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" name="first_name" id="first_name" value={formData.first_name} onChange={handleFormData} required className="form-control mb-2"/>
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" name="last_name" id="last_name" value={formData.last_name} onChange={handleFormData} required className="form-control mb-2"/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="number" name="phone" id="phone" value={formData.phone} onChange={handleFormData} required className="form-control mb-2"/>
        </div>
         <label htmlFor="phone">Resume</label>
        <input type="file" name="resume"  onChange={handleFileData} required className="form-control-file" />

        <input type="submit" value="Sign up" className="btn btn-primary"/>
      </form>

      <p>Looking for the Company Signup page</p>
      <Link to = "/companysignup"><button type="submit" class="btn btn-primary">Company Signup</button></Link>
    </div>   
  )
}

export default SignUp;