// import { getJobLevel } from "../services/jobListingService"

export default function reducer(state,action){
  // eslint-disable-next-line default-case
  switch(action.type){
    case"setLoggedInUser":{
      return{
          ...state,
          loggedInUser:action.data
      }
    }

    case"user_id":{
      return{
          ...state,
          user_id:action.data
      }
    }

    case"seeker":{
      return{
          ...state,
          seeker:action.data
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

    case"addJobListing":{
      return{
          ...state,
          jobListings:[action.data, ...state.jobListings]
      }
    }
    case"editJobListing":{
      const updatedListingList = state.jobListings.filter((listing) => 
      listing.id !== parseInt (action.data))
      return{
          ...state,
          jobListings:updatedListingList
      }
    }

    case "deleteListing":{
      const updatedListingList = state.jobListings.filter((listing) => 
      listing.id !== parseInt (action.data))
      return{
          ...state,
          jobListings:updatedListingList
      }
  }

    case"jobType":{
      return{
        ...state,
        jobType:action.data
    }

    }
    case"jobLevel":{  
      return{
        ...state,
        jobLevel:action.data
      }
    }
  }
}