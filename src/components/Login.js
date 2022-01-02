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
    }
        navigate('/')
    })
    .catch(error => {
        console.log(error)
    })
  }
    
  return (
      <div>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" value={formData.email} onChange={handleFormData}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>
                <input type="submit" value="Login" />
            </form>
        </div>
      </div>   
  )
}

export default Login