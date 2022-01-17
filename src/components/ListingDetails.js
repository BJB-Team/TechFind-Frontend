import React, { useState, useEffect} from 'react'
import {useNavigate, useParams, Link} from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { getJobListing, appyListing } from '../services/jobListingService'

const ListingDetails = () =>{
  const{store,dispatch} = useGlobalState();
  const  {user_id, jobType, jobLevel} = store

  let navigate = useNavigate();
  const[listing,setListing] = useState({listing: {}, company: {}});
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
    const ids = {"id": id, "user_id": listing.listing.user_id}
    appyListing(ids)
    .then()
    .catch(err=>console.log(err))
  }
  
  return (
    <div >
      
     {listing.listing.title} {listing.listing.description} {listing.listing.price} {idChecker(listing.listing.job_level_id,jobLevel)}  {idChecker(listing.listing.job_type_id,jobType)}   
      <p></p>
       {/* {listing.company.company_name}  {listing.company.description}                */}
    <div>

    {user_id === listing.listing.user_id?
     <>
      <div>

        <Link to = {`/listing-edit/${listing.listing.id}`}><button type="submit" class="btn btn-primary">Edit Listing</button></Link>
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