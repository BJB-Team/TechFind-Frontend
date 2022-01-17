import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { createJob } from '../services/jobListingService'
import { ListingContainer, Heading, CardContainer, JobFormCreate } from '../styles/Listings';
import {ProfileLabel} from '../styles/Profile'

const JobForm = () => {

  const{ store, dispatch } = useGlobalState()
  const { jobType, jobLevel } = store

  let navigate = useNavigate();
  
  const initialFormData = {
  }
  const [formData, setFormData] = useState(initialFormData)
  
  function handleFormData(e){
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    createJob(formData)
    .then((job)=>{
      
      dispatch({ 
        type: "addJobListing",
        data:job
      })
      navigate('/')
  })
  .catch(error => {
      console.log(error)
  })}


  return (
    <form onSubmit={handleSubmit}>
      <ListingContainer>
        <Heading>Create Job Listing</Heading>
        <CardContainer>
        <JobFormCreate onSubmit={handleSubmit}>
      
          <ProfileLabel>Title:</ProfileLabel>
          <input type="text" name="title" id="title" value={formData.title} required onChange={handleFormData} className="form-control-edit"/>

          <ProfileLabel>description:</ProfileLabel>
          <input type="text" name="description" id="description" value={formData.description} required onChange={handleFormData} className="form-control-edit-description"/>

          <ProfileLabel>Salary:</ProfileLabel>
          <input type="number" name="price" id="price" value={formData.price} onChange={handleFormData} className="form-control-edit" />
            

          <ProfileLabel>Job Level:</ProfileLabel>
          <select
              value={formData.job_level_id} required
              onChange={(e) =>
                setFormData({
                  ...formData,
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
            <ProfileLabel>Job Type:</ProfileLabel>
            <select
              value={formData.job_type_id} required
              onChange={(e) =>
                setFormData({
                  ...formData,
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
            
            <br/>
            

            <input type="submit" value="Submit Form" />
          
        </JobFormCreate>
        </CardContainer>
      </ListingContainer>   
      </form>
  )
}

export default JobForm