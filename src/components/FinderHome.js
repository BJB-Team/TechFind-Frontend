import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useGlobalState } from '../utils/stateContext'
import { companyProfile } from '../services/authService'
import Aside from './Aside'


const FinderHome = () => {
  const { store, dispatch } = useGlobalState()
  const { loggedInUser } = store
  const [profile, setProfile] = useState([])


  useEffect(()=>{
    companyProfile() 
    .then((data)=> {
        setProfile(data)
        console.log(data)
    }) 
    .catch(error=> {console.log(error)})
    },[])
  
  return (
    <div>
      <Aside />
      <h2>Profile</h2>
      
      <h4>First Name:</h4>
      {/* Access Company name here */}

      <h4>Last Name:</h4>
      {/* Access Company name here */}

      <h4>Username:</h4>
      <p> is this working? { profile.user }</p>

      <h4>E-Mail:</h4>
      {/* Access Company name here */}

      <h4>Phone Number:</h4>
      {/* Access Company name here */}

      <h4>Current Resume</h4>
      <p>Download a copy of your resume</p>

      <Link to = "/"><button>Edit Account</button></Link>
      
      {/* Make button to delete account */}
    </div>
  )
}

export default FinderHome