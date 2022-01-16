import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import { companyProfile, destroyCompany } from '../services/authService'

const FinderEdit = () => {
  const { store, dispatch } = useGlobalState()
  let navigate = useNavigate();
  const [profile, setProfile] = useState({user: {}, seeker_attributes: {}})

  function handleFormStateUser(event){
    setProfile({
        ...profile,
        "user": {...profile.user,[event.target.name] : event.target.value}
    })
}

function handleFormStateProfile(event){
    setProfile({
        ...profile,
        'seeker_attributes': {...profile.seeker_attributes, [event.target.name] : event.target.value}
    })
}

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
        <input type="text" name="username" id="username" className="form-control" defaultValue={ profile.user.username } onChange = {handleFormStateUser}/>
      </div>

      <div className="from-group">
        <label htmlFor="staticEmail">Email</label>
        <input type="email" className="form-control" defaultValue={ profile.user.email } />
      </div>

      <div className="from-group">
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="first_name" id="first_name" className="form-control" defaultValue={profile.seeker_attributes.first_name } onChange = {handleFormStateProfile} />
      </div>

      <div className="from-group">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" className="form-control" defaultValue={ profile.seeker_attributes.last_name } />
      </div>

      <div className="from-group">
        <label htmlFor="phone">Phone</label>
        <input type="email" className="form-control" defaultValue={ profile.seeker_attributes.phone } />
      </div>
        
      <Link to = "/finder-profile"><button type="submit" className="btn btn-primary">Save Changes</button></Link>

      {/* Add a delete account button with an alert asking if they're sure*/}
      <button onClick = {destroy}>Delete Account</button>
    </div>
  )
}

export default FinderEdit