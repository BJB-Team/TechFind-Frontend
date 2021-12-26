import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'

const Home = () =>{
  const{ store, dispatch } = useGlobalState()
  const { loggedInUser } = store

  return (
    <div>
      <div>
        <h1>Your search ends</h1>
        <h1>Here!</h1>
        <p>TechFind! The number one IT platform for Job seekers and companies looking for the best talent.</p>

        {loggedInUser?
          <>
            <Link to = "/" onClick ={  }> Find Talent!</Link>
            <Link to = "/" onClick ={  }> Find Your Career!</Link>
          </>
          :
          <>
            <Link to ="/signup">Sign up</Link>
            <Link to ="/login">Login</Link>
          </>
        }





        {/* If user logged in take them to their homepage otherwise take them to the sign up page */}
        <button>Find Talent!</button> 
        {/* If user logged in take them to their homepage otherwise take them to the sign up page */}
        <button>Find Your Career!</button>
      </div>
    </div>   
  )
}

export default Home;