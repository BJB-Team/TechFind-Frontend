import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'

const Home = () =>{
  const{store, dispatch} = useGlobalState()

  return (
    <div>
      <div>
        <h1>Your search ends</h1>
        <h1>Here!</h1>
        <p>TechFind! The number one IT platform for Job seekers and companies looking for the best talent.</p>
        <button>Find Talent!</button>
        <button>Find Your Career!</button>
      </div>
    </div>   
  )
}

export default Home;