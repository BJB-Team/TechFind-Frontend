import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import Aside from './Aside'
import { showApplied } from '../services/jobListingService'

const CompanyApplication = () => {
  const[applications,setApplications] = useState()


  useEffect(()=>{
    showApplied() 
    .then((data)=> {
      setApplications(data)
    }) 
    .catch(error=> {console.log(error)})
    },[])
    console.log(applications)
  return(
    <div>
      {applications ?
        <>
        {applications.my_listings.map((application, index)=> 
            [
              <div className="list-group">
                <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{ application.title } {applications.my_applications[index].first_name} {applications.my_applications[index].last_name}</h5>
                  </div>
                  <button className="mb-2">resume</button>
                  <Link to = {`/listing/${application.id}`}><button className="mb-2">See Job</button> </Link>
                </div>
              </div>
            ]
          
        )}  
      </>
      :
      <>
      
      </>
    }
         

    </div>
  )
}

export default CompanyApplication