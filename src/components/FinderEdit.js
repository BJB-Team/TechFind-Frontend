import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import { companyProfile, destroyCompany, updateCompany } from '../services/authService'

const FinderEdit = () => {
  const { store, dispatch } = useGlobalState()
  let navigate = useNavigate();
  const [profile, setProfile] = useState({user: {}, seeker_attributes: {}})

  useEffect(()=>{
    companyProfile() 
    .then((data)=> {
        setProfile(data)
        console.log(data)
    }) 
    .catch(error=> {console.log(error)})
    },[])
  
  // onsubmit handler function goes here
  function destroy(e){
    destroyCompany(profile.user.id)
    .then((data)=> {
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
        <input type="text" className="form-control" placeholder={ profile.seeker_attributes.first_name } />
      </div>

      <div className="from-group">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" className="form-control" placeholder={ profile.seeker_attributes.last_name } />
      </div>

      <div className="from-group">
        <label htmlFor="phone">Phone</label>
        <input type="email" className="form-control" placeholder={ profile.seeker_attributes.phone } />
      </div>
        
      <Link to = "/finder-profile"><button type="submit" className="btn btn-primary">Save Changes</button></Link>

      {/* Add a delete account button with an alert asking if they're sure*/}
      <button onClick = {destroy}>Delete Account</button>
    </div>
  )
}

export default FinderEdit