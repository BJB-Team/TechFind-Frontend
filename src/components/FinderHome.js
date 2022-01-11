import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useGlobalState } from '../utils/stateContext'
import { companyProfile } from '../services/authService'

const FinderHome = () => {
  const { store, dispatch } = useGlobalState()
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
        <label htmlFor="staticEmail">Email</label>
        <input type="email" className="form-control-plaintext" placeholder={ profile.user.email } />
      </div>

      <div className="from-group">
        <label htmlFor="firstname">First Name</label>
        <input type="text" className="form-control-plaintext" placeholder={ profile.profile.first_name } />
      </div>

      <div className="from-group">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" className="form-control-plaintext" placeholder={ profile.profile.last_name } />
      </div>

      <div className="from-group">
        <label htmlFor="phone">Phone</label>
        <input type="email" className="form-control-plaintext" placeholder={ profile.profile.phone } />
      </div>
        
      <Link to = "/"><button type="submit" class="btn btn-primary">Edit Account</button></Link>
    </div>
  )
}

export default FinderHome