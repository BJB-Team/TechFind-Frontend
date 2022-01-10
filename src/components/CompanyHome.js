import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { companyProfile } from "../services/authService";

const CompanyHome = () => {
  
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getCompany()
      .then((data) => {
        setProfile(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div>
      <h1>Profile</h1>
      <h2>Company Details:</h2>

      <h4>Company name:</h4>
      {/* Access Seeker name here */}

      <h4>Company Username:</h4>
      {/* Access Seeker name here */}

      <h4>Company E-Mail:</h4>
      {/* Access Seeker name here */}

      <h4>Company Phone Number:</h4>
      {/* Access Seeker name here */}

      <h4>Company Website:</h4>
      {/* Access Seeker name here */}

      <h4>About the Company:</h4>
      {/* Access Seeker name here */}

      <Link to="/">
        <button>Edit Account</button>
      </Link>

      {/* Make button to delete account */}
    </div>
  );
};

export default CompanyHome;
