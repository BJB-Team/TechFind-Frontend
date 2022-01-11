import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const Home = () => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  return (
    <div>
      {/* <Container>
        <LeftSide>
          <Header>Your search ends</Header>
          <Header>Here!</Header>
          <Text>
            TechFind! The number one IT platform for Job seekers and companies
            looking for the best talent.
          </Text>

        {/* If the user isn't logged in should display both  */}
        {/* If the user is logged in as a job seekers they should only be able to see 'Find Your Career!' */}
        {/* If the user is logged in as a company they should only be able to see 'Find Talent!' */}
        
        {/* If the user is  logged it will take them to job creation else goes to sign up first*/}
        {/* <Link to = "/companysignup" > <button className="btn btn-success btn-lg">Find Talent!</button> </Link> */}

        {/*Takes the user to the job listing page doesn't matter if they are logged in or not*/}
        {/* <Link to = "/job-listings" > <button className="btn btn-success btn-lg">Find Your Career!</button></Link> */}

        {/* <Link to = "/company-job-list" > <button className="btn btn-success btn-lg">my Job List</button></Link> */}
          
        {/* <Link to = "/company-job-list" > <button className="btn btn-success btn-lg">my Job List</button></Link>  */}

        {/* </LeftSide> */}
      {/* </Container> */} 

      <div className="container">
      <div className="jumbotron">
        <h1 className="page-header">Your search ends</h1>
        <h1>Here!</h1>
        <p>TechFind! The number one IT platform for Job seekers and companies looking for the best talent.</p>

        {/* If the user isn't logged in should display both  */}
        {/* If the user is logged in as a job seekers they should only be able to see 'Find Your Career!' */}
        {/* If the user is logged in as a company they should only be able to see 'Find Talent!' */}
        
        {/* If the user is  logged it will take them to job creation else goes to sign up first*/}
        <Link to = "/companysignup" > <button className="btn btn-success btn-lg">Find Talent!</button> </Link>

        {/*Takes the user to the job listing page doesn't matter if they are logged in or not*/}
        <Link to = "/job-listings" > <button className="btn btn-success btn-lg">Find Your Career!</button></Link>

        <Link to = "/company-job-list" > <button className="btn btn-success btn-lg">my Job List</button></Link>
          
      </div>
    </div> 

    </div>
  );
};


//styles
const Container = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 960px) {
    flex-direction: column-reverse;
    width: 100%;
    // height: 100%;
    margin: 3rem 2rem;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    width: 80%;
    // height: 100%;
    margin: 1rem 2rem;
  }
`;


export default Home;
