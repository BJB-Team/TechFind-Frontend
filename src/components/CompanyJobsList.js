import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'
import Aside from './Aside'

const CompanyJobList = () => {
  const{ store } = useGlobalState()
  const { jobListings, user_id} = store
  const[myJobList,setMyJobList] = useState([]);

  useEffect(()=>{
    const list = []
    jobListings.map((listing, index) => listing.user_id == user_id ? list.push(listing)  : "nothing")
    setMyJobList(list)
    },[])

    
  return (
    <div>
    <h1>List</h1>
    
    {myJobList.map((message, index)=> 
      [
        <div className="list-group">
          <Link to = {`/listing/${message.id}`} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{ message.title } </h5>
              <h5> Salary: $ { message.price }</h5>
            </div>
            <p className="mb-1">Placeholder text.</p>
          </Link>
        </div>
      ]
      )}

     
    </div>
    
  )

}

export default CompanyJobList