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
  user-select: none;
  pointer-events: none;
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
    @media (max-width: 420px) {
      width: 367px;
      margin: 152px 0 0;
    }
    @media (max-width: 320px) {
      width: 280px;
    }

`

export const LogoEsquinaWrapper = styled.img`
    min-width: 200px;
    max-width: 250px;
    width: 200px;
    grid-column: 1;
    grid-row: 1;
    margin: -120px 0 0 30px;
    justify-self: start;
    align-self: start;
`

export const IconsWrapper = styled.img`
    width: auto;
    height: 40px;
    // grid-column: 1;
    grid-row: 1;
    margin: 20px;
    `
    
export const RedesWraper = styled.div`
    display: grid;
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
    align-self: end;
    padding: 30px;
    user-select: all;
    pointer-events: all;
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
    padding: 100px 30px;
    @media (max-width: 420px) {
      display: none;
    }
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