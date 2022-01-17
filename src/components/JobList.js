import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import { ListingContainer, Heading, CardContainer, Cards } from '../styles/Listings'
import {ProfileLabel} from '../styles/Profile'


// import Pagination from 'react-bootstrap/Pagination'
// import PageItem from 'react-bootstrap/PageItem'




const DisplayJobs = () =>{

  const{ store } = useGlobalState()
  const { jobListings, jobType, jobLevel } = store
  
  
  function idChecker(x,job){
   let test = ""
   job.map((type,index) => {
      if(type.id === x){
        test = type.name
      }
    })
    return test
  }

  return (
    <ListingContainer>
      <Heading>Jobs</Heading>
      <CardContainer>
      

      {/* Render list of jobs */}
      {jobListings.map((listing, index)=> 
      [
          <div className="list-group">
          <Cards>
          <Link to = {`/listing/${listing.id}`} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{ listing.title }  { idChecker(listing.job_type_id,jobType) } { idChecker(listing.job_level_id, jobLevel) }</h5>
              <h5> Salary: $ { listing.price }</h5>
            </div>
            <ProfileLabel>{ listing.description }</ProfileLabel>
          </Link>
           </Cards>
          
        </div>
      ]
      )}
      
      </CardContainer>
      
      {/* Pagination for Job List */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="/" tabIndex="-1">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="/">1</a></li>
          <li className="page-item"><a className="page-link" href="/">2</a></li>
          <li className="page-item"><a className="page-link" href="/">3</a></li>
          <li className="page-item">
            <a className="page-link" href="/">Next</a>
          </li>
        </ul>
      </nav>

    </ListingContainer>
  )
}

export default DisplayJobs