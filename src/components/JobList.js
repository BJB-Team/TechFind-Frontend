import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import styled from "styled-components";

// import Pagination from 'react-bootstrap/Pagination'
// import PageItem from 'react-bootstrap/PageItem'



const ListingContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  
`;

const Heading = styled.h1`
  font-size: 38px;
  margin: 0.8rem ;
  color: aliceblue;
  display: flex;
  justify-content: center;
  
`;

const CardContainer = styled.div`
  width: 100%;
  height: 550px;
  margin-bottom: 2rem;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-center
  align-content: flex-start;
  
`;

const Cards = styled.div`
  margin: 30px;
  height: 250px;
  width: 250px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  // border: 1px solid #b5f5;

`;

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
    <ListingContainer>
      <Heading>Jobs</Heading>
      <CardContainer>
      <Cards>

      {/* Render list of jobs */}
      {jobListings.map((message, index)=> 
      [
        <div className="list-group">
          <Link to = {`/listing/${message.id}`} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{ message.title }  { idChecker(message.job_type_id,jobType) } { idChecker(message.job_level_id, jobLevel) }</h5>
              <h5> Salary: $ { message.price }</h5>
            </div>
            <p className="mb-1">{ message.description }</p>
          </Link>
        </div>
      ]
      )}
      </Cards>
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