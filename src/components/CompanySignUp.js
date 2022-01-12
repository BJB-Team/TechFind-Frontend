import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { signUp } from '../services/authService'
import Aside from './Aside'

const CompanySignUp = () => {

    const{ dispatch } = useGlobalState()

    const initialFormState = {
        username: "",
        email: "",
        password: ""
    }

    const [FormState, setFormState] = useState(initialFormState)
    
    let navigate = useNavigate();
    
    function handleFormState(event){
        setFormState({
            ...FormState,
            [event.target.name] : event.target.value
        })
    }

    function handleSubmit(event){
        
        event.preventDefault()
        
        signUp(change(FormState))
        
        .then(({ username, jwt, id }) =>{

            sessionStorage.setItem("username", username)
            sessionStorage.setItem("userId", id)
            sessionStorage.setItem("token", jwt)
            console.log(id)
            dispatch({
                type: "setLoggedInUser",
                data: username
            })
            dispatch({
                type: "setToken",
                data: jwt    
            })
            dispatch({
                type: "user_id",
                data:id
              })
            navigate('/company-profile')
        })
        .catch(error =>{
            prompt ("user exists or password mismatch");
        })
    }

    function change(data){
        const filteredData = {user: {company_attributes:{}}}
        for (const value in data) {
            if (value === "username" || value === "email"|| value === "password"|| value === "password_confirmation"){
                filteredData.user[value] = data[value]
            }
            else{
                filteredData.user.company_attributes[value] = data[value]
            }
            filteredData.user["account_seeker"] = "false"
            dispatch({
                type: "seeker",
                data: filteredData.user["account_seeker"]  
            })
        }
        return filteredData
    }

        return (
            <div className="form-group">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" value={FormState.username} onChange={handleFormState} required className="form-control mb-2"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" value={FormState.email} onChange={handleFormState} required className="form-control mb-2"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={FormState.password} onChange={handleFormState} required className="form-control mb-2"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" value={FormState.password_confirmation} required onChange={handleFormState} className="form-control mb-2"/>
                </div>
                <div className="form-group">
                    <label htmlFor="company_name">Company Name:</label>
                    <input type="text" name="company_name" id="company_name" value={FormState.company_name} onChange={handleFormState} required className="form-control mb-2"/>
                </div>
                <div className="form-group">
                    <label htmlFor="website">Website Link:</label>
                    <input type="text" name="website" id="website" value={FormState.website} onChange={handleFormState} required className="form-control mb-2"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="number" name="phone" id="phone" value={FormState.phone} onChange={handleFormState} required className="form-control mb-2"/>
                </div>

                <input type="submit" className="btn btn-primary btn-block" value="Sign up" />

                </form>
            </div>
        )
}

export default CompanySignUp