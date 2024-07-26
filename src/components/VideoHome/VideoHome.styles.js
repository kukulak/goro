import styled from '@emotion/styled'
import { themeGoroGoro } from '../Style.theme'

export const SpaceCien = styled.div`
  padding-top: 100vh;
  @media (max-width: 768px) {
    padding-top: 5vh;
  }
`

export const VideoContainerWraper = styled.div`
  // margin-top: 100vh;
  ${'' /* display: block; */}
  max-width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  ${'' /* overflow: ; */}
  ${'' /* background: black; */}
`

export const VideoWraper = styled.video`
  max-width: 100%;
  ${'' /* margin-top: -52px; */}
  grid-column: 1;
  grid-row: 1;
  ${'' /* height: 100%; */}
  width: 100%;
  user-select: none;
  -webkit-filter: opacity(20%);
  ${'' /* pointer-events: none; */}
`

// Mix Dolby Atmos,
// Mix Ambisonics,
// Mix tradicional,
// PreMix postproducción (5.1, 7.1 & Dolby Atmos)
// MIx Sonido inmersivo Live,
// Producciones audio visuales en formatos inmersivos

export const LogoWrapper = styled.img`
  min-width: 200px;
  max-width: 800px;
  width: 800px;
  grid-column: 1;
  grid-row: 1;
  justify-self: center;
  align-self: center;

  @media (max-width: 1283px) {
    width: 500px;
  }
  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 420px) {
    width: 295px;
    margin: -91px 0 0;
  }

  @media (max-width: 320px) {
    width: 280px;
  }
`
