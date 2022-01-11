import React from 'react'
import { Link } from "react-router-dom"
import { useGlobalState } from '../utils/stateContext'

const Home = () =>{
  const{ store, dispatch } = useGlobalState()
  const { loggedInUser } = store

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="page-header">Your search ends</h1>
        <h1>Here!</h1>
        <p>TechFind! The number one IT platform for Job seekers and companies looking for the best talent.</p>

        {/* If the user isn't logged in should display both  */}
        {/* If the user is logged in as a job seekers they should only be able to see 'Find Your Career!' */}
        {/* If the user is logged in as a company they should only be able to see 'Find Talent!' */}
        
        {/* If the user is  logged it will take them to job creation else goes to sign up first*/}
        <Link to = "/seekersignup" > <button className="btn btn-success btn-lg">Find Talent!</button> </Link>

        {/*Takes the user to the job listing page doesn't matter if they are logged in or not*/}
        <Link to = "/job-listings" > <button className="btn btn-success btn-lg">Find Your Career!</button></Link>
          
      </div>
      <div className="sideContainer"> 
    </div>
    </div>   
    
  )
}

export default Home