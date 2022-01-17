import React, { useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import {getJobListing,updateListingId, deleteListingId, getJobs } from '../services/jobListingService'

const ListingUpdate = () => {

  const{store, dispatch} = useGlobalState()
  const { jobType, jobLevel } = store
  const [listing, setListing] = useState([])
  
  const {id} = useParams()
  let navigate = useNavigate();
  
  useEffect(()=>{
    getJobListing(id)
    .then(listing => setListing(listing))
    .catch(error =>console.log(error))
  },[id])

  
  
  function handleFormData(e){
    setListing({
        ...listing,
        [e.target.name] : e.target.value
    })
  }

  function updateState(e){
    console.log("here")
    getJobs()
    .then((jobs) => {
      dispatch({ 
        type: "jobListings",
        data:jobs
      })
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    updateListingId(id,listing)
    .then(updateState())
    .catch()

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
  
  return (
    <div>
      <h1>Create Job Listing</h1>
      <form onSubmit={handleSubmit}>
    
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={listing.title}  onChange={handleFormData}/>

        <label htmlFor="description">description:</label>
        <input type="text" name="description" id="description" value={listing.description} onChange={handleFormData}/>

        <label htmlFor="price">Pay:</label>
        <input type="number" name="price" id="price" value={listing.price} onChange={handleFormData}/>

        <select
						value={listing.job_level_id} 
						onChange={(e) =>
							setListing({
								...listing,
								job_level_id: e.target.value
							})
						}
					>
						<option></option>
						{jobLevel.map((o, index) => (
							<option key={index} value={o.id}>
								{o.name}
							</option>
						))}
					</select>

          <select
						value={listing.job_type_id} 
						onChange={(e) =>
							setListing({
								...listing,
								job_type_id: e.target.value,
							})
						}
					>
						<option></option>
						{jobType.map((o, index) => (
							<option key={index} value={o.id}>
								{o.name}
							</option>
						))}
					</select>    

        <input type="submit" value="Change Form" />
      </form>
      <button onClick = {deleteListing}>Delete Listing</button>
    </div>   
  )
}

export default ListingUpdate