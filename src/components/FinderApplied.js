import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useGlobalState } from '../utils/stateContext'
// import Aside from './Aside'
import { myApplied } from "../services/jobListingService";
import { AppCardContainer, AppCard } from "../styles/Applications";
import { ListingContainer, Heading } from "../styles/Listings";

const FinderApplied = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    myApplied()
      .then((data) => {
        setApplications(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(applications);
  return (
    <ListingContainer>
      <Heading>Applications</Heading>
      <AppCardContainer>
        <AppCard>



          
        </AppCard>
      </AppCardContainer>
    </ListingContainer>
  );
};

export default FinderApplied;
