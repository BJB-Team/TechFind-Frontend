import React, { useEffect, useReducer } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StateContext } from '../utils/stateContext'
import reducer from '../utils/reducer'
import Login from './Login'
import SignUp from './SignUp'
import FinderProfile from './FinderHome'
import CompanySignUp from './CompanySignUp'
import Home from './Home'
import Navigation from './Navigation'
import JobForm from './JobForm'
import ListingDetails from './ListingDetails'
import { getJobs, getJobLevel, getJobType } from '../services/jobListingService'
import DisplayJobs from './JobList'
import CompanyHome from './CompanyHome'
import Aside from './Aside'
import CompanyJobsList from './CompanyJobsList'

const App = () => {
  /// First instance when the users enters our website there will be no logged in user 
  /// and the company will be set to null
  /// use effect will be created when api is linked so this can be changed when a user is logged in and we have listings
	const initialState = {
    user_id: sessionStorage.getItem('userId') || null,
		loggedInUser: sessionStorage.getItem("username") || null,
    auth:{token:sessionStorage.getItem("token") || null},
    company: null,
    jobListings: [],
    jobType: [], 
    jobLevel: []
	}
  
  /// sets up use reducer. There are no cases yet but will be added when api is linked 
  const [store, dispatch] = useReducer(reducer, initialState)

  useEffect(()=>{
    getJobs()
    .then((jobs) => {
      dispatch({ 
        type: "jobListings",
        data:jobs
      })
    })
    getJobLevel()
    .then((level) => {
      dispatch({ 
        type: "jobLevel",
        data:level
      })
    })
    getJobType()
    .then((type) => {
      dispatch({ 
        type: "jobType",
        data:type
      })
    })
  },[])
 
  return (
    <StateContext.Provider value={{ store, dispatch }}>
      
    <div className="container">
    
      <BrowserRouter>
          <Navigation />

        <Routes>

            <Route path="/Aside" element={<Aside />} />

            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/finder-profile" element={<FinderProfile />} />
            <Route path="/companysignup" element={<CompanySignUp />} />
            <Route path="/create-job" element={<JobForm />} />
            <Route path="/job-listings" element={<DisplayJobs />} />
            <Route path="/company-profile" element={<CompanyHome />} />
            <Route path="/listing/:id" element={<ListingDetails />} />
            <Route path="company-job-list" element={<CompanyJobsList />} />
            
        </Routes>

      </BrowserRouter>

    </div>
    </StateContext.Provider>
    
  )
}

export default App