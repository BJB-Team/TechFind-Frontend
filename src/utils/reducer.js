export default function reducer(state,action){
  // eslint-disable-next-line default-case
  switch(action.type){
    case"setLoggedInUser":{
      return{
          ...state,
          loggedInUser:action.data
      }
    }
    case"setToken":{
      return{
          ...state,
          auth:{
              ...state.auth,
          token:action.data
          }
      }
    }
    case"jobListings":{
      return{
          ...state,
          jobListings:action.data
      }
    }
  }
}