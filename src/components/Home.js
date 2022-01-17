import React from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import HomeImage from '../Assets/HomeImage.png';
import {
  InnerContainer, RightSection,ButtonContainer, HomeButton,
  MainContainer, HomeHeader1, HomeHeader2, Paragraph
} from '../styles/General'


const Home = () => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser, seeker } = store;

  return (
    
  <MainContainer>
    <InnerContainer>
    <HomeHeader1>Your Search Ends</HomeHeader1>
    <HomeHeader2>Here!</HomeHeader2>
    <Paragraph>TechFind! The number one IT platform for Job seekers and companies looking for the best talent.</Paragraph>

    {/* If the user isn't logged in should display both  */}
    {/* If the user is logged in as a job seekers they should only be able to see 'Find Your Career!' */}
    {/* If the user is logged in as a company they should only be able to see 'Find Talent!' */}
    
    {/* If the user is  logged it will take them to job creation else goes to sign up first*/}
    <ButtonContainer>
    {seeker == "false" && loggedInUser ?
      <>
        <Link to = "/create-job" > <HomeButton>Find Talent</HomeButton> </Link>
      </>
      :
      <>

      </>
    }
    {seeker == "true" && loggedInUser ? 
    <>

    </>
          :
    
    <>
      <Link to = "/companysignup" > <HomeButton>Find Talent</HomeButton> </Link>
    </>
  }
    

    {/*Takes the user to the job listing page doesn't matter if they are logged in or not*/}
    <Link to = "/job-listings" > <HomeButton>Find Your Career</HomeButton></Link>

        <Link to="/company-job-list" > <HomeButton>My Job List</HomeButton></Link>
    
        </ButtonContainer> 
        
    </InnerContainer>

    <RightSection>
    <img src={HomeImage} />
    </RightSection> 
    
  </MainContainer>  

  );
};





export default Home;
