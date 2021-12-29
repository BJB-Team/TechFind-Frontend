import React, { useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'


const DisplayJobs = () =>{

  const{ store} = useGlobalState()
  const { jobListings } = store
  
  
  return (
    <div>

      {jobListings.map((message, index)=> 
        <p> {message.title} {message.price} {message.job_type_id}</p>
      )}
      
      

    </div>
  )
}

export default DisplayJobs