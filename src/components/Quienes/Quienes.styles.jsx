import styled from '@emotion/styled'
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
  grid-template-rows: 1fr 0.1fr 0.5fr;

  @media (max-width: 768px) {
    padding-top: 124vh;
    padding-top: 50vh;
  }
  @media (max-width: 400px) {
    padding-top: 20vh;
    padding-bottom: 1vh;
    grid-template-rows: 0.5fr 0.2fr 0.2fr;
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
  ${'' /* margin-top: 15px; */}
  width: 60vw;
  @media (max-width: 1400px) {
    ${'' /* margin-top: 423px; */}
    font-size: 30px;
    margin-left: -155px;
  }
  @media (max-width: 820px) {
    font-size: 38px;
    margin-left: 0px;
    width: 80vw;
    ${'' /* margin-top: 400px; */}
  }

  @media (max-width: 420px) {
    font-size: 24px;
    margin-left: 0px;
    width: 80vw;
    ${'' /* margin-top: 103px; */}
    margin-bottom: 0px;
    margin-top: 180px;
  }
`

export const ServiciosWrapper = styled.div`
  display: flex;
  grid-column: 1;
  margin: 0 0 0px 0;
  padding: 0;

  @media (max-width: 820px) {
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 420px) {
    ${'' /* flex-direction: column; */}
    flex-direction: row;
    align-items: center;
  }
`

export const GrupoServiciosWrapper = styled.div`
  margin: 0;
  margin-left: 6220px;

  grid-column: 1;
  @media (max-width: 420px) {
    margin-left: 0;
  }
`

export const SecondGrupoServiciosWrapper = styled.div`
  margin: 0;
  margin-left: -6220px;
  grid-column: 1;
  @media (max-width: 420px) {
    display: none;
  }
`

export const TxtServiciosWrapper = styled.p`
  font-size: ${() => themeGoroGoro.fontSize.big};
  color: ${() => themeGoroGoro.colors.primary};
  white-space: nowrap;
  font-weight: 100;
  padding: 0;
  margin: 0;
  line-height: 1.1;
  :after {
    content: ' - ';
  }
  :before {
    content: ' ';
  }
  @media (max-width: 1400px) {
    font-size: 60px;
    margin: 0 10px;
  }

  ${
    '' /* @media (max-width: 820px) {
    font-size: 50px;
    white-space: normal;
    width: 80%;
    margin: 10px 0;
    :after {
      content: '';
    }
  } */
  }

  @media (max-width: 420px) {
    font-size: 30px;
    white-space: normal;
    width: 80%;
    width: max-content;
    margin: 12px 20px;

    :after {
      content: ' ';
    }
  }
`

export const TitleHomeWraper = styled.div`
  grid-row: 1;
  grid-column: 1;
`
