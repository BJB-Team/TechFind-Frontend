import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { signUp } from '../services/authService'
import Aside from './Aside'
import styled from "styled-components";


export const CompanySignUpForm = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  
`;

const CompanySignUp = () => {

    const{ dispatch } = useGlobalState()

    const initialFormState = {
        username: "",
        email: "",
        password: ""
    }

    const [FormState, setFormState] = useState(initialFormState)

    const [error, setError] = useState(errors)
    
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
        
        .then(({ username, jwt, id, test }) =>{
            if (test) {
                setError(test)
            }
            else{
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
        }})
        .catch(error =>{
             ("user exists or password mismatch");
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
            <div className="form-row">
                <CompanySignUpForm> 
                <h1>Sign Up</h1>
                <form className="SignUpForm" onSubmit={handleSubmit}>
                 

                <div className="form-group3">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" value={FormState.username} onChange={handleFormState} className="form-control"/>
                </div>
                {/* Error message  */}
                {error.username &&  
                <div className="alert alert-danger" role="alert">{error.username} </div>}

                <div className="form-group3">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" value={FormState.email} onChange={handleFormState} required className="form-control mb-2"/>
                </div>
                <div className="form-group3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={FormState.password} onChange={handleFormState} required className="form-control mb-2"/>
                </div>
                {/* Error message  */}
                {error.password &&  
                <div className="alert alert-danger" role="alert">{error.password} </div>}

                <div className="form-group3">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" value={FormState.password_confirmation} required onChange={handleFormState} className="form-control mb-2"/>
                </div>
                {/* Error message  */}
                {error.password_confirmation &&  
                <div className="alert alert-danger" role="alert">{error.password_confirmation} </div>}

                <div className="form-group3">
                    <label htmlFor="company_name">Company Name:</label>
                    <input type="text" name="company_name" id="company_name" value={FormState.company_name} onChange={handleFormState} required className="form-control mb-2"/>
                </div>
                <div className="form-group3">
                    <label htmlFor="website">Website Link:</label>
                    <input type="text" name="website" id="website" value={FormState.website} onChange={handleFormState} required className="form-control mb-2"/>
                </div>
                <div className="form-group3">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="number" name="phone" id="phone" value={FormState.phone} onChange={handleFormState} required className="form-control mb-2"/>
                </div>

                <p></p>

                <input type="submit" className="btn btn-primary btn-block" value="Sign up" />
        
                </form>
                </CompanySignUpForm>
                
            </div>
        )
}

export default CompanySignUp