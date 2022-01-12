import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useGlobalState } from '../utils/stateContext'
import { companyProfile } from '../services/authService'

const CompanyHome = () => {
    const{ store, dispatch } = useGlobalState()
    const { loggedInUser } = store
    const [profile, setProfile] = useState({user: {}, profile: {}})

    useEffect(()=>{
        companyProfile() 
        .then((data)=> {
            setProfile(data)
            console.log(data)
        }) 
        .catch(error=> {console.log(error)})
        },[])
    
    // onsubmit handler function goes here

    return (
        <div>
            <div className="from-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control-plaintext" placeholder={ profile.user.username } />
            </div>

            <div className="from-group">
                <label htmlFor="company">Company</label>
                <input type="text" className="form-control-plaintext" placeholder={ profile.profile.company_name } />
            </div>
            
            <div className="from-group">
                <label htmlFor="staticEmail">Email</label>
                <input type="email" className="form-control-plaintext" placeholder={ profile.user.email } />
            </div>

            <div className="from-group">
                <label htmlFor="website">Website</label>
                <input type="text" className="form-control-plaintext" placeholder={ profile.profile.website } />
            </div>

            <div className="from-group">
                <label htmlFor="description">Company Description</label>
                <input type="text" className="form-control-plaintext" placeholder={ profile.profile.description } rows="5"/>
            </div>

            <div className="from-group">
                <label htmlFor="phone">Phone</label>
                <input type="email" className="form-control-plaintext" placeholder={ profile.profile.phone } />
            </div>
                
            <Link to = "/company-edit"><button type="submit" class="btn btn-primary">Edit Account</button></Link>
        </div>
    )
}

export default CompanyHome