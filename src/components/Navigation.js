import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'

const Navigation = () => {
  const{ store, dispatch } = useGlobalState()
  const { loggedInUser } = store
 
  function logout(e) {
    e.preventDefault()
    sessionStorage.clear()
    dispatch({
      type: "setLoggedInUser",
      data: ""
    })
    dispatch({
      type: "setToken",
      data:""
    })
  }
  
  return (
    <div> 
      <Link to ="/">TechFind </Link>
      <Link to ="/job-listings">Browse Jobs  </Link>
      {loggedInUser?
        <>
          <Link to ="/seeker-profile">Profile  </Link>
          <Link to = "/" onClick ={ logout }>Logout</Link>
        </>
        :
        <>
          <Link to ="/signup">Sign up </Link>
          <Link to ="/login">Login </Link>
        </>
      }
    </div>
  )
}
export default Navigation;