import styled from "styled-components";

// Home css

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1.90em;
  display: flex; 
  flex-wrap: wrap;
  /* flex: scroll; */
  /* flex-direction: column;  */
   
  justify-content: space-evenly; 
  /* align-content:center;  */
  position: fixed; 

  @media screen and (max-width: 960px) {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction; column;
    justify-content: flex-start;
    flex-wrap: wrap;
   }
`;

export const InnerContainer = styled.div`
  max-width: 100%; 
  margin-top: 80px;
  /*display: flex;*/
  flex-direction: column; 
  /* height: 90vh; */
  /* align-items: center;  */
  /* justify-content: center; */
    /* flex:1;   */
  /* position: Absolute; */ 

  @media screen and (max-width: 960px) {
   
    width: 80%;
    height: 80%;
    // margin: 3rem 2rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
   }
 @media screen and (max-width: 768px) {
  flex-direction: column-reverse;
  width: 60%;
  height: 60%;
  margin: 1rem 2rem;
 } 
`;


export const HomeHeader1 = styled.div`
  font-size: 45px;
  font-family: "Fira Sans", sans-serif;
  margin: 0.3rem 0;
  color:aliceblue;

  @media only screen and (max-width: 960px) {
    font-size: 24px;
    text-align: left;
    color:aliceblue;
  }
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    text-align: left; 
`;

export const HomeHeader2 = styled.div`
  font-size: 45px;
  font-family: "Fira Sans", sans-serif;
  margin: 0.3rem 0;
  color: #5de94a;

  @media only screen and (max-width: 960px) {
    font-size: 24px;
    text-align: left;
  }
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    text-align: left;
  }

`;


export const Paragraph = styled.div`
  font-size: 24px;
  max-width: 550px;
  margin: .8rem 0;
  color:aliceblue;

  @media only screen and (max-width: 960px) {
    font-size: 16px;
    text-align: left;
    
  }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const HomeButton = styled.div`
  display: flex;  
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 10px;

  position: relative; 
  width: 160px;
  height: 50px;
  margin: 7px;
  font-weight: bold;
  color: aliceblue;
  
  background: #5de94a;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: 3px solid #b5f5;
  :hover {
       background:rgb(77, 93, 107);
       font-weight: bold;
       color:aliceblue;
  }
@media only screen and (max-width: 960px) {
    position: relative; 
    width: 130px;
    height: 30px;
    margin: 7px;
    font-weight: bold;
    font-size: 12px;
    color: aliceblue;
  }


`;



export const RightSection = styled.div`
  margin-bottom: 3rem;
    width: 450px;
    height:450px;

  display: flex;
  @media screen and (max-width: 960px) {
    margin-bottom: 1rem;
    width: 350px;
    height:350px;

    
  }
`;

