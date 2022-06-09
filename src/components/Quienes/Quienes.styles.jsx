import styled from "@emotion/styled";
import { themeGoroGoro } from '../Style.theme'
// import { keyframes } from "@emotion/react";


export const QuienesWraper = styled.div`
    background-color: transparent;
    padding-top: 36vh;
    width: 100%;
    overflow: hidden;
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-rows: 1fr 0.3fr 1fr;
    @media (max-width: 768px) {
        padding-top: 40vh;
        padding-bottom: 20vh;
      }
    @media (max-width: 768px) {
        padding-top: 124vh;
        padding-top: 50vh;
      }
  
`

export const TitleWraper = styled.h1`
    color: ${() => themeGoroGoro.colors.primary};
    font-family: ${() => themeGoroGoro.fonts.primary};

`

export const ParaghraphWraper = styled.p`
    color: ${() => themeGoroGoro.colors.primary}; 
    font-family: ${() => themeGoroGoro.fonts.primary};
    font-size: 35px;
    font-weight: 200;
    line-height: 1.3;
    text-align: left;
    grid-row: 1;
    grid-column: 1;
    margin-left: -310px;
    margin-bottom: 100px;
    margin-top: 15px;
    @media (max-width: 1300px) {
        margin-top: 80px;
        font-size: 24px;
        margin-left: -155px;
        }
    @media (max-width: 768px) {
        font-size: 38px;
        margin-left: 0px;
        }
    @media (max-width: 420px) {
        font-size: 24px;
        margin-left: 0px;
      }
`

export const ServiciosWrapper = styled.div`
    display: flex;
    grid-column: 1;
    margin: 0 0 0px 0;  
    padding: 0;
    `
    
export const GrupoServiciosWrapper = styled.div`
    margin: 0;
    margin-left: 6220px;
    grid-column: 1;
`

export const SecondGrupoServiciosWrapper = styled.div`
    margin: 0;
    margin-left: -6220px;
    grid-column: 1;

`

export const TxtServiciosWrapper = styled.p`
    font-size: ${() => themeGoroGoro.fontSize.big};
    color: ${() => themeGoroGoro.colors.primary};
    white-space: nowrap;
    font-weight: 100;
    padding: 0;
    margin: 0;
    @media (max-width: 1300px) {
        font-size: 80px;
        }
    @media (max-width: 420px) {
        font-size: 32px;
      }
`

export const TitleHomeWraper = styled.div`
    grid-row: 1;
    grid-column: 1;
`