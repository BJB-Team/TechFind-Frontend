import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import "../index.css"

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
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>TechFind</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/job-listings"}>Browse Jobs</Link>
            </li>
            <li className="nav-item">
              {loggedInUser?
                <>
                  <Link className="nav-link" to ="/seeker-profile">Profile  </Link>
                  <Link className="nav-link" to = "/" onClick ={ logout }>Logout</Link>
                </>
                :
                <>
                  <Link className="nav-link" to ="/signup">Sign up </Link>
                  <Link className="nav-link" to ="/login">Login </Link>
                </>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>


    

  )
}
export default Navigation;