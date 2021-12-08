import React, { useEffect, useReducer } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { StateContext } from '../utils/stateContext'
import reducer from '../utils/reducer'

const App = () => {
  /// First instance when the users enters our website there will be no logged in user 
  /// and the seeker will be set to null
  /// use effect will be created when api is linked so this can be changed when a user is logged in and we have listings
	const initialState = {
		listings: [],
		loggedInUser: null,
    seeker: null
	}

  /// sets up use reducer. There are no cases yet but will be added when api is linked 
  const [store, dispatch] = useReducer(reducer, initialState)
	const {listings, loggedInUser, seeker} = store

  
  return (
    <StateContext.Provider value={{store, dispatch}}>
      <div>
        <p>Working react app!</p>
      </div>
    </StateContext.Provider>
    
  );
}

export default App;