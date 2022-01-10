import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { login } from '../services/authService'

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
        navigate('/')
    })
    .catch(error => {
        console.log(error)
    })
  }
    
  return (
    <div className="form-group">
        <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter email" name="email" id="email" value={formData.email} onChange={handleFormData} className="form-control mb-2"/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Password" name="password" id="password" value={formData.password} onChange={handleFormData} className="form-control mb-2"/>
            </div>

            <input type="submit" value="Login" className="btn btn-primary"/>
        </form>
    </div>  
  )
}

export default Login