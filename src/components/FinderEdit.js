import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import { companyProfile } from '../services/authService'

const FinderEdit = () => {
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
        <input type="text" className="form-control" placeholder={ profile.user.username } />
      </div>

      <div className="from-group">
        <label htmlFor="staticEmail">Email</label>
        <input type="email" className="form-control" placeholder={ profile.user.email } />
      </div>

      <div className="from-group">
        <label htmlFor="firstname">First Name</label>
        <input type="text" className="form-control" placeholder={ profile.profile.first_name } />
      </div>

      <div className="from-group">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" className="form-control" placeholder={ profile.profile.last_name } />
      </div>

      <div className="from-group">
        <label htmlFor="phone">Phone</label>
        <input type="email" className="form-control" placeholder={ profile.profile.phone } />
      </div>
        
      <Link to = "/finder-profile"><button type="submit" className="btn btn-primary">Save Changes</button></Link>

      {/* Add a delete account button with an alert asking if they're sure*/}
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Are you sure you want to delete your account, there's no going back if you do!</strong><button>Yes</button><button>No</button>
      </div>
      
    </div>
  )
}

export default FinderEdit