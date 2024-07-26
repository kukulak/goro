import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
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

export const FontWrapper = styled.h1`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSize.primary};
`  
export const BackgroundWrapper = styled.div`
  background: ${(props) => props.theme.colors.transparent};
`  

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
  border-radius: 0px;
  padding-bottom: 5px;
  display: grid;
  background: ${(props) => props.theme.colors.primary};
//   align-items: center;
//   justify-content: center;
  position: fixed;
`;

export const LogoWrapper = styled.img`
    min-width: 200px;
    max-width: 800px;
    width: 800px;
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
    align-self: center;
`

export const IconsRedesWrapper = styled.img`
    width: auto;
    height: 25px;
    // grid-column: 1;
    grid-row: 1;
    margin-bottom: 14px;
    @media (max-width: 420px) {
      height: 30px;
    }
    @media (max-width: 320px) {
      height: 28px;
    }
    `
    
export const RedesWraper = styled.div`
    display: grid;
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
    align-self: end;
    padding: 30px
    ${'' /* position: fixed; */}
    ${'' /* bottom: 1%; */}
    @media (max-width: 420px) {
      padding: 0px;
    }

`


export const RedBtnWraper = styled.button`
    display: grid;
    // grid-column: 1;
    grid-row: 1;
    justify-self: end;
    align-self: end;
    // padding: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 20px;
    pointer-events: all;
    @media (max-width: 420px) {
      margin: 10px;
    }
    @media (max-width: 320px) {
      margin: 5px;
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


export const LogoSpin = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1;
    grid-row: 1;
    justify-self: end;
    align-self: start;
    padding: 100px 30px
`

export const BtnsWrapper = styled.button`
    font-size: 17px;
    width: auto;
    height: 30px;
    // grid-column: 1;
    grid-row: 1;
    margin: 0px;
    border: none;
    text-align: right;
    background: ${(props) => props.theme.colors.transparent};
    color: ${() => themeGoroGoro.colors.primary};
`

export const IconMenuWrapper = styled.img`
  width: auto;
  height: 12px;
  margin: 0 5px 0 0;
  transform: rotate(40deg);
`