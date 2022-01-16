import styled from "styled-components"


export const CardSmall = styled.div`
  display: flex;
  align-items: center;
  width: 360px;
  padding: 10px;
  height: 250px;
  margin: 1rem;
  background: ${theme.accentBg};
  color: ${theme.PrimaryTxt};
  border: 1px solid ${theme.Accent};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const AppCardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-center
  align-content: flex-start;
  flex-direction: row;
  
`;

export const AppCard = styled.div`
  width: 100%;
  
  
`;
