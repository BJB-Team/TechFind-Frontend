import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useGlobalState } from '../utils/stateContext'
import { companyProfile } from '../services/authService'

const CompanyHome = () => {
    const{ store, dispatch } = useGlobalState()
    const { loggedInUser } = store
    const [profile, setProfile] = useState({user: {}, company_attributes: {}})

    useEffect(()=>{
        companyProfile() 
        .then((data)=> {
            setProfile(data)
        }) 
        .catch(error=> {console.log(error)})
        },[])
    
    // onsubmit handler function goes here

    return (
        
        <div>
            <div className="from-group">
                <label htmlFor="username">Username</label>
                <p >{profile.user.username}</p>
            </div>

            <div className="from-group">
                <label htmlFor="company">Company</label>
                <p >{profile.company_attributes.company_name}</p>
            </div>
            
            <div className="from-group">
                <label htmlFor="staticEmail">Email</label>
                <p>{profile.user.email}</p>
                
            </div>

            <div className="from-group">
                <label htmlFor="website">Website</label>
                <p >{profile.company_attributes.website}</p>
            </div>

            <div className="from-group">
                <label htmlFor="description">Company Description</label>
                <p >{profile.company_attributes.description}</p>
            </div>

            <div className="from-group">
                <label htmlFor="phone">Phone</label>
                <p >{profile.company_attributes.phone}</p>
            </div>
                
            <Link to = "/company-edit"><button type="submit" class="btn btn-primary">Edit Account</button></Link>
        </div>
    )
}

export default CompanyHome