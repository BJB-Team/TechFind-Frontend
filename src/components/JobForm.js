import React, { useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import { getJobLevel, createJob, getJobType } from '../services/jobListingService'

const JobForm = () => {

  const [jobLevel, setJobLevel] = useState([])
  const [jobType, setJobType] = useState([])


  const{store, dispatch} = useGlobalState()
  let navigate = useNavigate();
  
  const initialFormData = {
  }
  const [formData, setFormData] = useState(initialFormData)
  
  useEffect(()=>{
    getJobLevel() 
    .then((data)=> {
      setJobLevel(data)
    }) 
    .catch(error=> {console.log(error)})
    
    getJobType() 
    .then((data)=> {
      setJobType(data)
    }) 
    .catch(error=> {console.log(error)})
    },[])

  function handleFormData(e){
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    let sorted = sortedData(formData)

    createJob(formData).then(()=>{
      navigate('/')
  })
  .catch(error => {
      console.log(error)
  })}

  function sortedData(data){
    const formData = new FormData();


  }

  return (
    <div>
      <h1>Create Job Listing</h1>
      <form onSubmit={handleSubmit}>
    
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={formData.title} onChange={handleFormData}/>

        <label htmlFor="description">description:</label>
        <input type="text" name="description" id="description" value={formData.description} onChange={handleFormData}/>

        <label htmlFor="price">Pay:</label>
        <input type="number" name="price" id="price" value={formData.price} onChange={handleFormData}/>

        <select
						value={formData.job_level_id}
						onChange={(e) =>
							setFormData({
								...formData,
								job_level_id: e.target.value,
							})
						}
					>
						<option></option>
						{jobLevel.map((o, index) => (
							<option key={index} value={o.id}>
								{o.title}
							</option>
						))}
					</select>

          <select
						value={formData.job_type_id}
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

        <input type="submit" value="Submite Form" />
      </form>
    </div>   
  )
}

export default JobForm