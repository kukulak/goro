import styled from '@emotion/styled'
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
  @media (max-width: 1400px) {
    width: 350px;
    margin: 20px 0 20px;
  }
  @media (max-width: 768px) {
    width: 436px;
    margin: 20px 0 20px;
  }
  @media (max-width: 420px) {
    width: 300px;
    margin: 20px 0 120px;
  }
`

export const InfoRecordWraper = styled.div`
  width: 500px;
  height: 240px;
  ${'' /* display: flex; */}
  grid-template-columns: 1fr 180px;
  grid-template-rows: 1fr 1fr;
  // z-index: 15;
  pointer-events: none;
  flex-wrap: nowrap;
  flex-direction: column;
  @media (max-width: 1400px) {
    width: 100%;
    grid-template-columns: 1fr 0.5fr;
    grid-template-rows: 1fr 1fr 1fr;
    ${'' /* height: 140px; */}
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
    ${'' /* height: 140px; */}
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
  @media (max-width: 1400px) {
    column-gap: 120px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0px;
    ${
      '' /* &:nth-of-type(odd) {
            background: blue;
        } */
    }
  }

  @media (max-width: 900px) {
    column-gap: 40px;
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
  overflow: visible;
  @media (max-width: 1400px) {
    width: 100%;
    height: 100%;
    margin-left: 1px;
    transform: rotate(-15deg) scale(0.7);
  }
  @media (max-width: 768px) {
    width: 400px;
    height: 410px;
    margin-left: -27px;
    transform: rotate(-15deg) scale(0.7);
  }
  @media (max-width: 420px) {
    width: 300px;
    height: 310px;
    margin-left: -27px;
    transform: rotate(-15deg) scale(0.7);
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
  @media (max-width: 1400px) {
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
    transform: rotate(-35deg) scale(0.6);
  }
  @media (max-width: 420px) {
    width: 300px;
    height: 310px;
    margin-left: 36px;
    margin-top: -21px;
    transform: rotate(-35deg) scale(0.6);
  }
`

export const ListenWraper = styled.div`
  color: ${() => themeGoroGoro.colors.primary};
  text-align: left;
  padding: 10px 0 0 0;
`

export const LinkAppleWraper = styled.div`
  background-color: ${() => themeGoroGoro.colors.transparent};
  border: none;
  background-repeat: no-repeat;
  background-position-y: 50%;
  pointer-events: none;
  @media (max-width: 768px) {
    width: 120px;
  }
  @media (max-width: 420px) {
    width: 120px;
    justify-self: end;
  }
`

export const LogosWraper = styled.div`
  background-color: ${() => themeGoroGoro.colors.transparent};
  border: none;
  ${'' /* margin-top: 18px; */}
  ${'' /* grid-row: 1; */}
    // background-image: url(${appleMusic});
    background-repeat: no-repeat;
  background-position-y: 50%;
  background-size: contain;
  background-size: 100px;
  background-position-y: center;
  height: 47px;
  @media (max-width: 768px) {
    width: 120px;
  }
  @media (max-width: 420px) {
    grid-row: 1;
    width: 120px;
    justify-self: end;
  }
`

export const ContenedorLogos = styled.div`
  height: 102px;
  grid-template-areas: unset;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  row-gap: 5px;
  column-gap: 15px;
  flex-wrap: wrap;
  flex-direction: column;
  overflow: visible;
`

export const TitleWraper = styled.h2`
  color: ${() => themeGoroGoro.colors.secondary};
  font-family: ${() => themeGoroGoro.fonts.primary};
  font-size: 300px;
`
export const SingleWraper = styled.h5`
  color: ${() => themeGoroGoro.colors.primary};
  font-family: ${() => themeGoroGoro.fonts.primary};
  grid-column: 1;
  grid-row: 1;
  margin: 5px 0 0;
  justify-self: start;
  font-size: 1.6em;
  font-weight: 300;
  user-select: none;
  pointer-events: none;
  text-align: left;
  @media (max-width: 1400px) {
    font-size: 1.6em;
  }
`
export const RecordNameWraper = styled.h3`
  color: ${() => themeGoroGoro.colors.primary};
  font-family: ${() => themeGoroGoro.fonts.primary};
  grid-column: 1;
  grid-row: 1;
  margin: 5px 0 0;
  justify-self: start;
  font-size: 1.3em;
  font-weight: 300;
  user-select: none;
  pointer-events: none;
  text-align: left;
  @media (max-width: 1400px) {
    font-size: 1.3em;
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
  font-size: 1.1em;
  font-weight: 200;
  user-select: none;
  pointer-events: none;
`

export const ProduccionWraper = styled.p`
  color: ${() => themeGoroGoro.colors.primary};
  font-family: ${() => themeGoroGoro.fonts.primary};
  grid-column: 1;
  ${'' /* grid-row: 3; */}
  margin: -8px 0 0 0;
  text-align: left;
  justify-self: start;
  font-size: 1.5em;
  font-weight: 200;
  user-select: none;
  pointer-events: none;
`

export const OneRpmWraper = styled.div`
  color: ${() => themeGoroGoro.colors.primary};
  font-family: ${() => themeGoroGoro.fonts.primary};
  font-size: 1.1em;
  font-weight: 200;
  user-select: none;
  pointer-events: none;
  text-align: left;
`
