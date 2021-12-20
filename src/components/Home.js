import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { useGlobalState } from '../utils/stateContext'

const Home = () =>{
  const{store, dispatch} = useGlobalState()

  return (
    <div>
      <div>
        <h1> Home Page</h1>
      </div>
    </div>   
  )
}

export default Home 