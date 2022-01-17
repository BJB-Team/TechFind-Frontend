import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useGlobalState } from '../utils/stateContext'
import { companyProfile } from '../services/authService'
import { ProfileContainer, ProfileLabel, ProfileText, DetailContainer } from '../styles/Profile'
import { Heading } from '../styles/Listings'
import { ListingContainer } from '../styles/Listings'

const FinderHome = () => {
  const { store, dispatch } = useGlobalState()
  const { loggedInUser } = store
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

  return (
    <ListingContainer>
      <Heading>Profile</Heading>
      <ProfileContainer>

        <DetailContainer>
      
        <ProfileLabel>Username</ProfileLabel>
        <ProfileText>{ profile.user.username }</ProfileText>
      

      
        <ProfileLabel>First Name</ProfileLabel>
        <ProfileText>{ profile.seeker_attributes.first_name }</ProfileText>
      

      
        <ProfileLabel>Last Name</ProfileLabel>
        <ProfileText>{ profile.seeker_attributes.last_name } </ProfileText>
      

      
        <ProfileLabel>Phone</ProfileLabel>
        <ProfileText>{ profile.seeker_attributes.phone } </ProfileText>
      

      
        <ProfileLabel>Email</ProfileLabel>
        <ProfileText>{ profile.user.email }</ProfileText>
      
        
        <Link to="/finder-edit"><button type="submit" class="btn btn-primary">Edit Account</button></Link>
          
        </DetailContainer>
      </ProfileContainer>
    </ListingContainer>
  )
}

export default FinderHome