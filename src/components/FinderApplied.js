import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { myApplied, deleteApplication } from '../services/jobListingService'
import { ListingContainer, Heading } from '../styles/Listings'
import { AppCardContainer, AppCard} from '../styles/Applications'

const FinderApplied = () => {
  const[applications,setApplications] = useState([])
  let navigate = useNavigate();

  useEffect(()=>{
    myApplied() 
    .then((data)=> {
      setApplications(data)
    }) 
    .catch(error=> {console.log(error)})
    },[navigate])

  function destroy(e){
      deleteApplication(e.target.value)
      navigate("/")
  }
  console.log(applications)
    return(
      <ListingContainer>
      <Heading>Applications</Heading>
        <AppCardContainer>
          <AppCard>  
            <div>
              {applications ?
                <>
                {applications.map((application)=> 
                    [
                      <div className="list-group">
                        <div className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{ application.title } {application.price}  </h5>
                          </div>
                          <Link to = {`/listing/${application.id}`}><button className="mb-2">See Job</button> </Link>
                        </div>
                        <button value = { application.id} onClick = {destroy}>Delete Account</button> 
                      </div>
                    ]

                )}  
              </>
              :
              <>

              </>
            }
          </div>     
        </AppCard>
      </AppCardContainer>
    </ListingContainer>
  );
};

export default FinderApplied;
