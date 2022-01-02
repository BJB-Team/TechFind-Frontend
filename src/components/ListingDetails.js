import React, { useState, useEffect} from 'react'
import {useNavigate, Link, useParams} from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { getJobListing } from '../services/jobListingService'

const ListingDetails = () =>{
  const{store,dispatch} = useGlobalState();
  const  {loggedInUser,user_id, jobType, jobLevel} = store

  const[listing,setListing] = useState([]);
  const {id} = useParams()
  
  useEffect(()=>{
    getJobListing(id)
    .then(listing => setListing(listing))
    .catch(error =>console.log(error))
  },[id])

  function idChecker(x,job){
    let test = ""
    job.map((type) => {
       if(type.id == x){
         test = type.name
       }
     })
     return test
   }

  return (
    <div>
      
     {listing.title} {listing.description} {listing.price} {idChecker(listing.job_level_id,jobLevel)}  {idChecker(listing.job_type_id,jobType)}
     {user_id}  
     {user_id === listing.user_id && 
      <button>Delete Job</button>}
      <button>Edit Job</button>
    </div>


  )
}

export default ListingDetails