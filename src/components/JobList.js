import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'

const DisplayJobs = () =>{

  const{ store } = useGlobalState()
  const { jobListings, jobType, jobLevel } = store
  
  
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
        <div className="list-group">
          <Link to = {`/listing/${message.id}`} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{ message.title }  { idChecker(message.job_type_id,jobType) } { idChecker(message.job_level_id, jobLevel) }</h5>
              <h5> Salary: $ { message.price }</h5>
            </div>
            <p className="mb-1">Placeholder text.</p>
          </Link>
        </div>
      ]
      )}
      
        {/* <div>
          <h5> {message.title} {message.price} {idChecker(message.job_type_id,jobType)} {idChecker(message.job_level_id,jobLevel)} </h5>
           <Link  to ={`/listing/${message.id}`}>See more </Link> 
        </div>  */}

    </div>
  )
}

export default DisplayJobs