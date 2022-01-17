import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { ListingContainer, Heading, CardContainer, Cards } from '../styles/Listings'

const CompanyJobList = () => {
  const { store } = useGlobalState();
  const { jobListings, user_id } = store;
  const [myJobList, setMyJobList] = useState([]);

  useEffect(() => {
    const list = [];
    jobListings.map((listing, index) =>
      listing.user_id === user_id ? list.push(listing) : "nothing"
    );
    setMyJobList(list);
  }, []);

  return (
    <ListingContainer>
      <Heading>My Job List</Heading>
      <CardContainer>
        <Cards>
          {myJobList.map((listin)=> 
            [
              <div className="list-group">
                <Link to = {`/listing/${listin.id}`} className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{ listin.title } </h5>
                    <h5> Salary: $ { listin.price }</h5>
                  </div>
                </Link>
              </div>
            ]
          )}
        </Cards>
      </CardContainer>
    </ListingContainer>
  )};

export default CompanyJobList;
