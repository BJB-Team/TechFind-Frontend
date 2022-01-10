import styled from "styled-components"


export const ProfileContainer = styled.div`
display:grid;
grid-area: content;
margin-top: 15rem;
margin-left:15rem;
@media only screen and (max-width: 1200px) {
  margin-left:15rem;
  width:100%;
}
@media only screen and (max-width: 900px) {
  margin-left:15rem;
  width:100%;
}
@media only screen and (max-width: 768px) {
  margin-left:1rem;
  width:100%;
}
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

@media only screen and (max-width: 768px) {
  font-size: 15px;
  opacity: 0.5;
}
`;


export const FormDiv = styled.div`
display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 100%;
  @media only screen and (max-width: 768px) {
    margin: 1rem 1rem;
    width:100vw;
  }
`;

export const ProfileInput = styled.input`
width: 359px;
height: 46px;
left: 490px;
top: 494px;
background: #FFFFFF;
border: 1px solid #000000;
box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.25);

@media only screen and (max-width: 768px) {
    font-size: 14px;
    max-width: 60%;
    width:400px;
  }
`;

export const ProfileInputlong = styled.input`
width: 728px;
height: 149px;
left: 492px;
top: 1289px;

background: #FFFFFF;
border: 1px solid #000000;
box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.25);

@media only screen and (max-width: 768px) {
    font-size: 14px;
    max-width: 60%;
    width:400px;
  }
`;

export const InputButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 32px;

position: absolute;
width: 176px;
height: 56px;
left: 488px;
top: 1615px;

background: #5DE94A;
box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
border-radius: 15px;

@media only screen and (max-width: 800px) {
    width: 8rem;
    font-size: 14px;
  }
@media only screen and (max-width: 768px) {
    // margin-left: 1.4rem;
    text-align: center;
    font-size: 14px;
    max-width: 80%;
    width: 100%;
  }
`;



