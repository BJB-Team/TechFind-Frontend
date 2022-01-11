import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import Aside from './Aside'
import { myApplied } from '../services/jobListingService'

const FinderApplied = () => {
  const[applications,setApplications] = useState([])


  useEffect(()=>{
    myApplied() 
    .then((data)=> {
      setApplications(data)
    }) 
    .catch(error=> {console.log(error)})
    },[])
    console.log(applications)
  return(
    <div>

    </div>
  )
}

export default FinderApplied