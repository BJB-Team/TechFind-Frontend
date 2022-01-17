import styled from "styled-components"


export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;

`;

export const DetailContainer = styled.div`
  width: 500px;
  height:700px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  // align-content: center;
  justify-content: flex-start;
  flex-wrap: wrap-reverse;
  
`;

export const DetailContainerEdit = styled.div`
  width: 500px;
  height:600px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  // align-content: center;
  justify-content: flex-start;
  flex-wrap: wrap-reverse;
  
`;

export const ProfileLabel = styled.div`
  font-size: 16px;
  max-width: 500px;
  // margin: 0.8rem 0;
  font-weight: bold; 
`;

export const ProfileText = styled.div`
  font-size: 20px;
  max-width: 500px;
  margin: 0.5rem 0;
  color: aliceblue;
`;


export const InputLabel = styled.label`
position: absolute;
width: 245px;
height: 28px;
left: 499px;
top: 1250px;

font-family: Inter;
font-style: italic;
font-weight: 600;
font-size: 18px;
line-height: 29px;
/* identical to box height */
display: flex;
align-items: center;
text-transform: capitalize;

color: #000000;


`;

export const FormDiv = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 1rem ;
  justify-content: center;
  align-content: center;
  
  
`;



export const ProfileInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0.375rem 0.75rem
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

`;

export const ProfileInputlong = styled.input`
width: 728px;
height: 149px;
left: 492px;
top: 1289px;

background: #FFFFFF;
border: 1px solid #000000;
box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.25);


  
`;

// display: block;
//     width: 100%;
//     padding: 0.375rem 0.75rem;
//     font-size: 1rem;
//     font-weight: 400;
//     line-height: 1.5;
//     color: #212529;
//     background-color: #fff;
//     background-clip: padding-box;
//     border: 1px solid #ced4da;
//     -webkit-appearance: none;
//     appearance: none;
//     border-radius: 0.25rem;
//     transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;



