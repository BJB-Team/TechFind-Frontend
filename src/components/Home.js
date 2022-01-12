import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import HomeImage from '../Assets/HomeImage.png';


const Home = () => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  return (
    
  <div className="containerh">
    <div className="jumbotron">
    <div className="header">Your Search Ends</div>
    <div className="header1">Here!</div>
    <p>TechFind! The number one IT platform for Job seekers and companies looking for the best talent.</p>

    {/* If the user isn't logged in should display both  */}
    {/* If the user is logged in as a job seekers they should only be able to see 'Find Your Career!' */}
    {/* If the user is logged in as a company they should only be able to see 'Find Talent!' */}
    
    {/* If the user is  logged it will take them to job creation else goes to sign up first*/}
    <Link to = "/companysignup" > <button className="homebutton">Find Talent</button> </Link>

    {/*Takes the user to the job listing page doesn't matter if they are logged in or not*/}
    <Link to = "/job-listings" > <button className="homebutton">Find Your Career</button></Link>

    <Link to = "/company-job-list" > <button className="homebutton">My Job List</button></Link>
      
    </div>

    <div className="rightSection">
    <img src={HomeImage} />
    </div> 
    
  </div>  

  );
};


//styles
// const Container = styled.div`
//   display: flex;
//   height: 90vh;
//   align-items: center;
//   justify-content: center;
//   @media only screen and (max-width: 960px) {
//     flex-direction: column-reverse;
//     width: 100%;
//     // height: 100%;
//     margin: 3rem 2rem;
//   }
//   @media only screen and (max-width: 768px) {
//     flex-direction: column-reverse;
//     width: 80%;
//     // height: 100%;
//     margin: 1rem 2rem;
//   }
// `;


export default Home;
