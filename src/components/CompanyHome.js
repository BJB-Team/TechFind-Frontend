import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useGlobalState } from '../utils/stateContext'
import { companyProfile } from '../services/authService'
import { ProfileContainer, DetailContainer, ProfileLabel, ProfileText } from '../styles/Profile'
import { Heading, ListingContainer } from '../styles/Listings'

const CompanyHome = () => {
    const{ store, dispatch } = useGlobalState()
    const { loggedInUser } = store
    const [profile, setProfile] = useState({user: {}, company_attributes: {}})

    useEffect(()=>{
        companyProfile() 
        .then((data)=> {
            setProfile(data)
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
                <ProfileText>{profile.user.username}</ProfileText>
            

            
                <ProfileLabel>Company</ProfileLabel>
                <ProfileText>{profile.company_attributes.company_name}</ProfileText>
            
            
            
                <ProfileLabel>Email</ProfileLabel>
                <ProfileText>{profile.user.email}</ProfileText>
           

            
                <ProfileLabel>Website</ProfileLabel>
                <ProfileText>{profile.company_attributes.website}</ProfileText>
            

            
                <ProfileLabel>Phone</ProfileLabel>
                <ProfileText>{profile.company_attributes.phone}</ProfileText>
           

           
                <ProfileLabel>Company Description</ProfileLabel>
                <ProfileText>{profile.company_attributes.description}</ProfileText>
            

            

            
                <Link to="/company-edit"><button type="submit" class="btn btn-primary">Edit Account</button></Link>
                    
               </DetailContainer> 
            </ProfileContainer> 
            
            
        </ListingContainer>
    )
}

export default CompanyHome