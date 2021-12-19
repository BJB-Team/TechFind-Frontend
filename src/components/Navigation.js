import react from 'react'
import {Link} from 'react-router-dom'
import { useGlobalState} from '../utils/stateContext'

const Navigation = () => {
  const{store, dispatch} = useGlobalState()
  const {loggedInUser} = store
 
  function logout(e){
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
      <Link to ="/">Home</Link>

      {loggedInUser?
        <>
          <p> Logged In </p>
          <Link to = "/" onClick ={logout}> Logout</Link>
        </>
        :
        <>
          <Link to ="/signup">Sign up</Link>
          <Link to ="/login">Login</Link>
        </>
      }
    </div>
  )
}
export default Navigation