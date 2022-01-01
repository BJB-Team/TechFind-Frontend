import React, { useState, useEffect} from 'react'
import {useNavigate, Link} from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'



const DisplayJobs = () =>{


  const{ store} = useGlobalState()
  const { jobListings, jobType, jobLevel } = store
  console.log(jobListings)
  function idChecker(x,job){
   let test = ""
   job.map((type,index) => {
      if(type.id == x){
        test = type.name
      }
    })
    return test
  }
  
  
  return (
    <div>
      {jobListings.map((message, index)=> 
      [
        <div>
          <p> {message.title} {message.price} {idChecker(message.job_type_id,jobType)} {idChecker(message.job_level_id,jobLevel)} </p>
           <Link  to ={`/listing/${message.id}`}>See more </Link> 
        </div> 
      ]
      )}
      
    </div>
  )
}

export default DisplayJobs