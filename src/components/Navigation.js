import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import "../index.css"

const Navigation = () => {
  const { store, dispatch } = useGlobalState()
  const { loggedInUser, seeker } = store
  let navigate = useNavigate();
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
    navigate('/')
  }

  return (
    <nav className="navbarwrapper fixed-top">
      <div className="navcontainer">
        
        <Link className="navbar-brandlogo" to={"/"}>TechFind</Link>
        
        <div className="justifycontentend">
          <ul className="navbar-navli">
            <li className="navbutton">
              <Link className="nav-link-button" to={"/job-listings"}>Jobs</Link>
            </li>
              {loggedInUser ?
                <>
                  {seeker === "true" ?
                  <>
                    <Link className="nav-link-button" to ="/finder-applied">Applied </Link>
                    <li className="navbutton">
                    <Link className="nav-link-button" to ="/finder-profile">Profile</Link>
                  </li>
                  </>
                  :
                  <>
                    {seeker === "false" ? (
                      <div > 
                      <li className="navbutton">
                        <Link className="nav-link-button" to ="/show-applied">Applied</Link>
                      </li>
                      <li className="navbutton">
                        <Link className="nav-link-button" to ="/create-job">Create Job</Link>
                      </li> 
                      <li className="navbutton">
                        <Link className="nav-link-button" to ="/company-profile">Profile</Link>
                      </li>
                      </div>   
                    ):
                    <>
                    </>
                    }
                  </>
                  }
                  <li className="navbutton">
                    <Link className="nav-link-button" to = "/" onClick ={ logout }>Logout</Link>
                  </li>
                </>
                :
                <>
                  <li className="navbutton">
                    <Link className="nav-link-button" to ="/signup">Register</Link>
                  </li>
                  <li className="navbutton">
                  <Link className="nav-link-button" to ="/login">Login</Link>
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