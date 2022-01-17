import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import { companyProfile, destroyCompany } from '../services/authService'
import { ProfileLabel, ProfileContainer, DetailContainerEdit } from '../styles/Profile'
import { Heading, ListingContainer } from '../styles/Listings'


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
    <ListingContainer>

      <Heading>Edit Profile</Heading>

      <ProfileContainer>

        <DetailContainerEdit>  
      
          <ProfileLabel>Username</ProfileLabel>
          <input type="text" name="username" id="username" className="form-control-edit" defaultValue={ profile.user.username } onChange = {handleFormStateUser}/>
      

      
          <ProfileLabel>Email</ProfileLabel>
          <input type="email" className="form-control-edit" defaultValue={ profile.user.email } />
      

      
          <ProfileLabel>First Name</ProfileLabel>
          <input type="text" name="first_name" id="first_name" className="form-control-edit" defaultValue={profile.seeker_attributes.first_name } onChange = {handleFormStateProfile} />
      

      
          <ProfileLabel>Last Name</ProfileLabel>
          <input type="text" className="form-control-edit" defaultValue={ profile.seeker_attributes.last_name } />
    
      
          <ProfileLabel>Phone</ProfileLabel>
          <input type="email" className="form-control-edit" defaultValue={ profile.seeker_attributes.phone } />
      
        
          <Link to = "/finder-profile"><button type="submit" className="btn btn-primary">Save Changes</button></Link>

          {/* Add a delete account button with an alert asking if they're sure*/}
          <button onClick={destroy}>Delete Account</button>
          
        </DetailContainerEdit>
      </ProfileContainer>
    </ListingContainer>
  )
}

export default FinderEdit