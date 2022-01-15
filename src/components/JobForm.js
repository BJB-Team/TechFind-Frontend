import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { createJob } from '../services/jobListingService'

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
    <div>
      <h1>Create Job Listing</h1>
      <form onSubmit={handleSubmit}>
    
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={formData.title} required onChange={handleFormData}/>

        <label htmlFor="description">description:</label>
        <input type="text" name="description" id="description" value={formData.description} required onChange={handleFormData}/>

        <label htmlFor="price">Pay:</label>
        <input type="number" name="price" id="price" value={formData.price} onChange={handleFormData}/>

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

        <input type="submit" value="Submit Form" />
      </form>
    </div>   
  )
}

export default JobForm