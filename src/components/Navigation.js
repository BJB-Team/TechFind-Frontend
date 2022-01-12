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
    <nav className="navbarwrapper fixed-top">
      <div className="navcontainer">
        
        <Link className="navbar-brandlogo" to={"/"}>TechFind</Link>
        
        <div className="justifycontentend">
          <ul className="navbar-navli">
            <li className="navbutton">
              <Link className="nav-link" to={"/job-listings"}>Jobs</Link>
            </li>
              {loggedInUser ?
                <>
          
                  {seeker === true ?
                  <>
                    
                  </>
                  :
                  <>
                    {seeker === "false" ? (
                     <Link className="nav-link" to ="/create-job">Create Job</Link>
                    ):
                    <>
                    </>
                    }
                  </>
                  }
                  <li className="navbutton">
                    <Link className="nav-link" to ="/finder-profile">Profile</Link>
                  </li>
                  <li className="navbutton">
                    <Link className="nav-link" to = "/" onClick ={ logout }>Logout</Link>
                  </li>
                </>
                :
                <>
                  <li className="navbutton">
                    <Link className="nav-link" to ="/signup">Sign Up</Link>
                  </li>
                  <li className="navbutton">
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