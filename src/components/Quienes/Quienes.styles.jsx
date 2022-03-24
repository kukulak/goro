import styled from "@emotion/styled";
import { themeGoroGoro } from '../Style.theme'
// import { keyframes } from "@emotion/react";


export const QuienesWraper = styled.div`
    background-color: transparent;
    padding-top: 100vh;
    width: 100%;
    overflow: hidden;
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-rows: 1fr 0.3fr 1fr;
    @media (max-width: 420px) {
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
    font-size: ${() => themeGoroGoro.fontSize.mid};
    font-weight: 200;
    line-height: 1.3;
    text-align: left;
    grid-row: 1;
    grid-column: 1;
    margin-left: -310px;
    @media (max-width: 420px) {
        font-size: 24px;
        margin-left: 0px;
      }
`

export const ServiciosWrapper = styled.div`
    display: flex;
    grid-column: 1;
    margin: 0 0 0px 0;
`

export const GrupoServiciosWrapper = styled.div`

    grid-column: 1;

`

export const TxtServiciosWrapper = styled.p`
    font-size: ${() => themeGoroGoro.fontSize.big};
    color: ${() => themeGoroGoro.colors.primary};
    white-space: nowrap;
    font-weight: 100;
    @media (max-width: 420px) {
        font-size: 32px;
      }
`

export const TitleHomeWraper = styled.div`
    grid-row: 1;
    grid-column: 1;
`