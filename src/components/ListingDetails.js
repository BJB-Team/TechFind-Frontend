import React, { useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { getJobListing, deleteListingId, appyListing } from '../services/jobListingService'

const ListingDetails = () =>{
  const{store,dispatch} = useGlobalState();
  const  {loggedInUser,user_id, jobType, jobLevel} = store

  let navigate = useNavigate();
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
       if(type.id === x){
         test = type.name
       }
     })
     return test
   }

  function apply(e){
    e.preventDefault()
    
    const ids = {"id": id, "user_id": listing.user_id}
    appyListing(ids)
    .then()
    .catch(err=>console.log(err))
  }
  function deleteListing(e) {
    e.preventDefault()
    deleteListingId(id)
    .then(listing =>{
        dispatch({
            type:"deleteListing",
            data:id
        })
  })
     .catch(err=>console.log(err))
     navigate('/')
  }
  console.log(listing)
  return (
    <div>
      
     {listing.title} {listing.description} {listing.price} {idChecker(listing.job_level_id,jobLevel)}  {idChecker(listing.job_type_id,jobType)}                  
  
    <div>

    {user_id === listing.user_id?
     <>
      <div>
        <button onClick ={deleteListing}>Delete Job</button>
        <button>Edit Job</button>
      </div>
      </>
      :
      <>  
      <button onClick ={apply}> Apply</button>
      </>
      }
      
    </div>         
    
    </div>


  )
}

export default ListingDetails