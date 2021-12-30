import React, { useEffect, useReducer } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StateContext } from '../utils/stateContext'
import reducer from '../utils/reducer'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import Navigation from './Navigation'
import JobForm from './JobForm'
import { getJobs } from '../services/jobListingService'
import DisplayJobs from './JobList'

const App = () => {
  /// First instance when the users enters our website there will be no logged in user 
  /// and the seeker will be set to null
  /// use effect will be created when api is linked so this can be changed when a user is logged in and we have listings
	const initialState = {
		loggedInUser: sessionStorage.getItem("username") || null,
    auth:{token:sessionStorage.getItem("token") || null},
    seeker: null,
    jobListings: []
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
  },[])
  
  return (
    <StateContext.Provider value={{ store, dispatch }}>
    <div>
      <BrowserRouter>
          <Navigation />

        <Routes>

            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create-job" element={<JobForm />} />
            <Route path="/job-listings" element={<DisplayJobs />} />

        </Routes>

      </BrowserRouter>

    </div>
    </StateContext.Provider>
    
  )
}

export default App