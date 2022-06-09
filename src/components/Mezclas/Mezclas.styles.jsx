import styled from "@emotion/styled";
import { themeGoroGoro } from '../Style.theme'
import appleMusic from '../../icons/logo_appleMusic.svg'
// import { keyframes } from "@emotion/react";


export const MezclasWraper = styled.div`
    background-color: transparent;
    display: grid;
    justify-content: center;
    // grid-template-rows: 1fr 0.3fr;
   
    `
    
export const MezclaWraper = styled.div`
    // background: red;
    width: 500px;
    // height: 500px;
    display: grid;
    flex-direction: column;
    pointer-events: all;
    cursor: pointer;
    @media (max-width: 1300px) {
        width: 350px;
        margin:  20px 0 20px;
        }
    @media (max-width: 768px) {
        width: 436px;
        margin:  20px 0 20px;
        }
    @media (max-width: 420px) {
        width: 300px;
        margin:  20px 0 120px;
    }
`

export const InfoRecordWraper = styled.div`
    width: 500px;
    height: 90px;
    display: grid;
    grid-template-columns: 1fr 180px;
    grid-template-rows: 1fr 1fr;
    // z-index: 15;
    pointer-events: none;
    @media (max-width: 1300px) {
        width: 100%;
        grid-template-columns: 1fr 0.5fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 140px;
        ${'' /* width: 400px; */}
        }
    @media (max-width: 768px) {
        width: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 140px;
        width: 410px;
        }
    @media (max-width: 420px) {
        width: 300px;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 140px;
    }
`

export const RecordWraper = styled.div`
    // gap: 100px;
    column-gap: 220px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-self: center;
    // grid-row: 1;
    grid-column: 1;
    pointer-events: none;
    @media(max-width: 1400px){
        column-gap: 120px;
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        column-gap: 0px;
        &:nth-child(odd) {
            background: blue;
        }
        }
    @media (max-width: 420px) {
        grid-template-columns: 1fr;
        column-gap: 220px;
    }
`

export const RecordImageWraper = styled.img`
    background-color: ${() => themeGoroGoro.colors.tertiary};
    width: 500px;
    height: 510px;
    width: 100%;
    height: 100%;
    transition: 10ms;
    cursor: pointer;
    pointer-events: none;
    object-fit: cover;
    grid-column: 1;
    grid-row: 1;
    z-index: 10;
    @media (max-width: 1300px) {
        width: 100%;
        height: 100%;
        margin-left: 1px;
        transform: rotate(-15deg) scale(0.7)
    }
    @media (max-width: 768px) {
        width: 400px;
        height: 410px;
        margin-left: -27px;
        transform: rotate(-15deg) scale(0.7)
    }
    @media (max-width: 420px) {
        width: 300px;
        height: 310px;
        margin-left: -27px;
        transform: rotate(-15deg) scale(0.7)
    }

`


export const DiscWraper = styled.img`
    background-color: ${() => themeGoroGoro.colors.transparent};
    grid-column: 1;
    grid-row: 1;
    z-index: 5;
    pointer-events: none;
    height: 100%;
    width: 100%;
    user-select: none;
    @media (max-width: 1300px) {
        width: 400px;
        height: 410px;
        height: 100%;
        width: 100%;
        margin-left: 33px;
        margin-top: -23px;
        ${'' /* margin-left: 36px; */}
        ${'' /* margin-top: -21px; */}
        transform: rotate(-35deg) scale(0.6)
    }
    @media (max-width: 768px) {
        width: 400px;
        height: 410px;
        margin-left: 36px;
        margin-top: -21px;
        transform: rotate(-35deg) scale(0.6)
    }
    @media (max-width: 420px) {
        width: 300px;
        height: 310px;
        margin-left: 36px;
        margin-top: -21px;
        transform: rotate(-35deg) scale(0.6)
    }
`

export const LinkAppleWraper = styled.div`
    background-color: ${() => themeGoroGoro.colors.transparent};
    border: none;
    grid-column: 2;
    grid-row: 1;
    grid-row-start: 1;
    grid-row-end: 3;
    // background-image: url(${appleMusic});
    background-repeat: no-repeat;
    background-position-y: 50%;
    pointer-events: none;
    @media (max-width: 768px) {
        // grid-column: 1;
        // grid-row: 1;
        // grid-row-start: 1;
        // grid-row-end: 1;
        width: 120px;
        // justify-self: end;
        margin-top: -30px;
        // margin-right: 8px;
    }
    @media (max-width: 420px) {
        grid-column: 1;
        grid-row: 1;
        grid-row-start: 1;
        grid-row-end: 1;
        width: 120px;
        justify-self: end;
        margin-top: -111px;
        margin-right: 8px;
    }
`

export const TitleWraper = styled.h2`
    color: ${() => themeGoroGoro.colors.secondary};
    font-family: ${() => themeGoroGoro.fonts.primary};
    font-size: 300px;
`

export const RecordNameWraper = styled.h3`
    color: ${() => themeGoroGoro.colors.primary};
    font-family: ${() => themeGoroGoro.fonts.primary};
    grid-column: 1;
    grid-row: 1;
    margin: 5px 0 0;
    justify-self: start;
    font-size: 2em;
    font-weight: 300;
    user-select: none;
    pointer-events: none;
    text-align: left;
    @media (max-width: 1300px) {
    font-size: 1.7em;

    }

`

export const ParaghraphWraper = styled.p`
    color: ${() => themeGoroGoro.colors.primary}; 
    font-family: ${() => themeGoroGoro.fonts.primary};
    grid-column: 1;
    grid-row: 2;
    margin: 0 0 0;
    text-align: left;
    justify-self: start;
    font-size: 1.5em;
    font-weight: 200;
    user-select: none;
    pointer-events: none;
`