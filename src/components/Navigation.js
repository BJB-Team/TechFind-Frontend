import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import "../index.css"

const Navigation = () => {
  const { store, dispatch } = useGlobalState()
  const { loggedInUser, seeker } = store
 
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
        <div className="justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/job-listings"}>Jobs</Link>
            </li>
              {loggedInUser ?
                <>
          
                  {seeker === true ?
                  <>
        
                  </>
                  :
                  <>
                    {seeker === false ? (
                     <Link className="nav-link" to ="/create-job">Create Job</Link>
                    ):
                    <>
                    </>
                    }
                  </>
                  }
                  <li className="nav-item">
                    <Link className="nav-link" to ="/finder-profile">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to = "/" onClick ={ logout }>Logout</Link>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to ="/signup">Sign up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to ="/login">Login</Link>
                  </li>
                </>
              }
          </ul>
        </div>
      </div>
      
    </nav>
  )
}
export default Navigation;