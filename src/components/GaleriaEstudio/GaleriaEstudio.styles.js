import styled from '@emotion/styled'
import { themeGoroGoro } from '../Style.theme'
import textoStudio from '../../icons/texto-studio.svg'

export const GaleriaWraper = styled.section`
  display: grid;
  font-family: ${() => themeGoroGoro.fonts.primary};
  grid-template-columns: 1fr;
  z-index: 2200;
  width: 100%;
  color: whitesmoke;
  @media (max-width: 420px) {
    ${'' /* margin-top: 120px; */}
  }
`

export const GroupImagesWraper = styled.div`
  display: grid;
`

export const BtnImageWraper = styled.div`
  width: 100%;
  height: 337px;
  cursor: pointer;
`

export const ImageWraper = styled.img`
  width: 100%;
  opacity: 0.8;
  object-fit: cover;
  @media (max-width: 600px) {
    ${
      '' /* width: auto;
        height: 100%; */
    }
  }
`

export const InfoImageWraper = styled.img`
  justify-self: end;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 2;
  width: 70%;
  align-self: center;
`

export const InfoWraper = styled.div`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  position: fixed;
  background: antiquewhite;
  background: ${() => themeGoroGoro.colors.tertiary};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`

export const InfoTituloWraper = styled.h3`
  font-size: 30px;
  width: 100%;
  text-align: left;
  margin: 0;
  color: ${() => themeGoroGoro.colors.primary};
  font-size: 2em;
  font-weight: 400;
`

export const InfoTextWraper = styled.p`
  width: 50%;
  text-align: left;
  margin: 0;
  color: ${() => themeGoroGoro.colors.primary};
  font-size: 1.5em;
  font-weight: 300;
`

export const InfoTextAndBtnWraper = styled.div`
  grid-row: 2;
  width: 100%;
  display: grid;
  padding: 0 30px;
`

export const BtnMirateWrapper = styled.button`
  background-color: ${() => themeGoroGoro.colors.transparent};
  border: none;
  justify-self: start;
  color: ${() => themeGoroGoro.colors.primary};
  font-size: 1em;
  cursor: pointer;
`

export const ImgArrowMasWraper = styled.img`
  width: 8px;
  height: auto;
  margin: 0 0 0 4px;
  transform: rotateZ(0deg);
  &:hover {
    transform: rotateZ(318deg);
  }
`

export const InfoBtnFotosWraper = styled.button`
  width: 25px;
  border: none;
  margin: 0;
  padding: 0;
  background-color: ${() => themeGoroGoro.colors.transparent};
  align-self: end;
  cursor: pointer;
`

export const ImgArrowGoWraper = styled.img`
  width: 25px;
  height: auto;
  margin: 0;
`

export const BtnCloseWraper = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  background-color: ${() => themeGoroGoro.colors.transparent};
  cursor: pointer;
  margin: 0;
  padding: 0;
  color: ${() => themeGoroGoro.colors.color};
  font-size: 2em;
  font-weight: 400;
`
