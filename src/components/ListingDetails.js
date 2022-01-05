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


  function deleteListing(e) {
    e.preventDefault()
    deleteListing(id)
    .then(listing =>{
        dispatch({
            type:"deleteListing",
            data:id
        })
  })
     .catch(err=>console.log(err))
  }

  return (
    <div>
      
     {listing.title} {listing.description} {listing.price} {idChecker(listing.job_level_id,jobLevel)}  {idChecker(listing.job_type_id,jobType)}                  
      
      <button>Apply</button>
    <div>

    {user_id === listing.user_id?
     <>
      <div>
        <button>Delete Job</button>
        <button>Edit Job</button>
      </div>
      </>
      :
      <>  
       <button>Apply</button>
      </>
      }
      
    </div>         
    
    </div>


  )
}

export default ListingDetails