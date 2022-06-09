import styled from "@emotion/styled";
import { themeGoroGoro } from '../Style.theme'

export const theme = {
    colors: {
      primary: "#03045e",
      secondary: "#caf0f8",
      tertiary: "#023e8a",
      quaternary: "#fff",
      transparent: "transparent",
    },
    fonts: {
      primary: "helvetica",
    },
    fontSize: {
      primary: "20px",
      secondary: "14px",
    },
  };



export const LogoWrapper = styled.img`
    width: auto;
    height: 40px;
    // grid-column: 1;
    grid-row: 1;
    margin: 20px;
    @media (max-width: 420px) {
      height: 29px;
      margin: 11px 15px; 
    }
    @media (max-width: 320px) {
      margin: 6px 9px; 
    }
    `
    
export const AppleMusicWraper = styled.button`
    display: grid;
    grid-column: 1;
    grid-row: 1;
    justify-self: end;
    align-self: end;
    // padding: 30px;
    background-color: transparent;
    border: none;
    user-select: all;
    pointer-events: all;
    cursor: pointer;
    position: fixed;
    bottom: 1%;
    @media (max-width: 768px) {
      padding: 0;
    }
    @media (max-width: 420px) {
      padding: 0;
    }
  
`

export const PlayListWraper = styled.div`
    display: grid;
    grid-column: 1;
    grid-row: 1;
    justify-self: end;
    align-self: end;
    padding: 30px
`

