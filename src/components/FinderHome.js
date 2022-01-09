import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useGlobalState } from '../utils/stateContext'
import { finderProfile } from '../services/authService'
import Aside from './Aside'


const FinderHome = () => {
  const{ store, dispatch } = useGlobalState()
  const { loggedInUser } = store
  const [profile, setProfile] = useState([])


  useEffect(()=>{
    finderProfile() 
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
      <h4>Finder Profile Details:</h4>
      <p></p>
      
      <h4>Finder First Name:</h4>
      {/* Access Company name here */}

      <h4>Finder Last Name:</h4>
      {/* Access Company name here */}

      <h4>Finder Username:</h4>
      {/* Access Company name here */}

      <h4>Finder E-Mail:</h4>
      {/* Access Company name here */}

      <h4>Finder Phone Number:</h4>
      {/* Access Company name here */}

      <h4>Current Resume</h4>
      {/* Access Company name here */}

      <Link to = "/"><button>Edit Account</button></Link>
      
      {/* Make button to delete account */}
    </div>
  )
}

export default FinderHome