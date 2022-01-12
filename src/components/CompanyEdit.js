import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import { companyProfile } from '../services/authService'

const CompanyEdit = () => {
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
                <input type="text" className="form-control" placeholder={ profile.user.username } />
            </div>

            <div className="from-group">
                <label htmlFor="company">Company</label>
                <input type="text" className="form-control" placeholder={ profile.profile.company_name } />
            </div>
            
            <div className="from-group">
                <label htmlFor="staticEmail">Email</label>
                <input type="email" className="form-control" placeholder={ profile.user.email } />
            </div>

            <div className="from-group">
                <label htmlFor="website">Website</label>
                <input type="text" className="form-control" placeholder={ profile.profile.website } />
            </div>

            <div className="from-group">
                <label htmlFor="description">Company Description</label>
                <input type="text" className="form-control" placeholder={ profile.profile.description } rows="5"/>
            </div>

            <div className="from-group">
                <label htmlFor="phone">Phone</label>
                <input type="email" className="form-control" placeholder={ profile.profile.phone } />
            </div>
                
            <Link to = "/company-profile"><button type="submit" class="btn btn-primary">Save Changes</button></Link>

            {/* Add a delete account button with an alert asking if they're sure*/}
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Are you sure you want to delete your account, there's no going back if you do!</strong><button>Yes</button><button>No</button>
            </div>
        </div>
    )
}

export default CompanyEdit