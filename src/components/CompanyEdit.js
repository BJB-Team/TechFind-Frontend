import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { companyProfile, destroyCompany, updateCompany } from '../services/authService'

const CompanyEdit = () => {
    const{ dispatch } = useGlobalState()
    let navigate = useNavigate();
    const [profile, setProfile] = useState({user: {password: "", password_confirmation: ""}, company_attributes: {}})

    const errors = {
        username: false, 
        password: false,
        password_confirmation: false,
        email: false
    }
    const [error, setError] = useState(errors)

    function handleFormStateUser(event){
        setProfile({
            ...profile,
            "user": {...profile.user,[event.target.name] : event.target.value}
        })
    }

    function handleFormStateProfile(event){
        setProfile({
            ...profile,
            "company_attributes": {...profile.company_attributes,[event.target.name] : event.target.value}
        })
    }
    function destroy(e){
        destroyCompany(profile.user.id)
        .then(()=> {
            dispatch({
                type: "setLoggedInUser",
                data: ""
            })
            dispatch({
                type: "setToken",
                data:""
            })
            navigate('/')
        }) 
    }

    function change(data){
        const filteredData = {user: {company_attributes:{}}}
        for (const value in data.user) {
            
          if (value === "username" || value === "email"|| value === "account_seeker" || value === "password"|| value === "password_confirmation"){
              filteredData.user[value] =data.user[value]
          }
        }
        for (const value in data.company_attributes){
            console.log("value", value)
            console.log(data.company_attributes[value])
          
            if (value === "company_name" || value === "website"|| value === "phone" || value === "description" ){

                filteredData.user[`company_attributes`][value] = data[`company_attributes`][value]
            }
        }
        console.log(filteredData)
        return filteredData
      }

    useEffect(()=>{
        companyProfile() 
        .then((data)=> {
            setProfile(data)
        }) 
        .catch(error=> {console.log(error)})
        },[])

    function handleSubmit(e){
        e.preventDefault()
        updateCompany(profile.user.id, change(profile))
        .then((test) =>{
            if (test) {
                setError(test)
            }
            else{
                navigate('/company-profile')
        }})
        .catch(error =>{
             console.log(error);
        })
    }
    // onsubmit handler function goes here
    return (
        <div className="form-row">
            <form className="SignUpForm" onSubmit={handleSubmit}>
                 
                 <div className="form-group3">
                     <label htmlFor="username">Username:</label>
                     <input type="text" name="username" id="username" defaultValue={profile.user.username} onChange={handleFormStateUser} className="form-control"/>
                 </div>

                  {/* Error message  */}
                 {error.username &&  
                 <div className="alert alert-danger" role="alert">{error.username} </div>}
 
                 <div className="form-group3">
                     <label htmlFor="email">Email:</label>
                     <input type="text" name="email" id="email" defaultValue={profile.user.email} onChange={handleFormStateUser}  className="form-control mb-2"/>
                 </div>

                  {/* Error message  */}
                  {error.email &&  
                 <div className="alert alert-danger" role="alert">{error.email} </div>}
                
                 <div className="form-group3">
                     <label htmlFor="company_name">Company Name:</label>
                     <input type="text" name="company_name" id="company_name" defaultValue={profile.company_attributes.company_name} onChange={handleFormStateProfile} className="form-control"/>
                 </div>

                 <div className="form-group3">
                    <label htmlFor="description">Company Description:</label>
                    <input type="text" name="description" id="description" defaultValue ={profile.company_attributes.description} onChange={handleFormStateProfile} required className="form-control mb-2"/>
                </div>

                 <div className="form-group3">
                     <label htmlFor="website">Website Link:</label>
                     <input type="text" name="website" id="website" defaultValue ={profile.company_attributes.website} className="form-control"/>
                 </div>

                 <div className="form-group3">
                     <label htmlFor="phone">Phone Number:</label>
                     <input type="number" name="phone" id="phone" defaultValue={profile.company_attributes.phone} onChange={handleFormStateProfile}  className="form-control"/>
                 </div>
 
                 <p></p>
                 
                <h2>Confirm password to save changes</h2>
                 <div className="form-group3">
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" id="password" defaultValue={profile.user.password} onChange={handleFormStateUser} required className="form-control mb-2"/>
                 </div>
                    
                  {/* Error message  */}
                 {error.password &&  
                 <div className="alert alert-danger" role="alert">{error.password} </div>}
 
                 <div className="form-group3">
                     <label htmlFor="password_confirmation">Password Confirmation</label>
                     <input type="password" name="password_confirmation" id="password_confirmation" defaultValue={profile.user.password_confirmation} required onChange={handleFormStateUser} className="form-control mb-2"/>
                 </div>
                 
                  {/* Error message  */}
                 {error.password_confirmation &&  
                 <div className="alert alert-danger" role="alert">{error.password_confirmation} </div>}

                 <p></p>

                 <input type="submit" className="btn btn-primary btn-block" value="Update Account" />


         
            {/* Add a delete account button with an alert asking if they're sure*/}
                <button onClick = {destroy}>Delete Account</button>
            </form>
        </div>
    )
}

export default CompanyEdit