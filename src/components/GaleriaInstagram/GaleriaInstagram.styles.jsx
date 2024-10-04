import styled from '@emotion/styled'
import { themeGoroGoro } from '../Style.theme'

export const FullIntagramContainerWraper = styled.section`
  // width: 100vw;
  overflow: hidden;
  margin: 200px 0;
  z-index: 2;
`

export const InstaContainerWraper = styled.section`
  // width: 100vw;
  // overflow: hidden;
  margin: 20px 0;
  display: grid;
  justify-content: center;
  transform: rotate(4deg);
  @media (max-width: 450px) {
    transform: inherit !important;
  }
  @media (max-width: 820px) {
    transform: inherit !important;
  }
  ${
    '' /* &:hover {
    transform: rotate(315deg);
  } */
  }
`

export const InstaImageWraper = styled.img`
  ${
    '' /* width: 520px;
  height: 530px; */
  }
  width: 420px;
  height: 430px;
  background-color: ${() => themeGoroGoro.colors.primary};
  object-fit: cover;
  @media (max-width: 450px) {
    width: 320px;
    height: 330px;
    ${
      '' /* width: 420px;
    height: 430px; */
    }
  }
`

export const BtnToInstagramWraper = styled.a`
  border: none;
  background-color: ${() => themeGoroGoro.colors.transparent};
  grid-column-start: 1;
  ${'' /* writing-mode: vertical-rl; */}
  ${'' /* text-orientation: mixed; */}
  ${'' /* transform: rotateZ(-180deg); */}
  transform: rotateZ(-90deg);
  color: ${() => themeGoroGoro.colors.primary};
  font-size: 2rem;
  width: 8px;
  align-self: end;
  margin: -20px 20px;
  font-weight: 200;
  font-family: ${() => themeGoroGoro.fonts.primary};

  @media (max-width: 820px) {
    margin: -2px;
    transform: inherit;
    ${'' /* writing-mode: inherit; */}
    width: auto;
    font-weight: 400;
    font-size: 3rem;
    grid-row-start: 1;
  }
  @media (max-width: 450px) {
    margin: -2px;
    transform: inherit;
    ${'' /* writing-mode: inherit; */}
    width: auto;
    grid-row-start: 1;
    font-weight: 300;
    font-size: 2rem;
  }
`

export const InstaCardWraper = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1.9fr;
  img {
    max-width: 500px;
  }
  @media (max-width: 450px) {
    ${'' /* grid-template-rows: 0.1fr 1.9fr; */}
    grid-template-rows: 1fr;
    grid-column-start: 1;
    grid-template-columns: 0;
  }
  @media (max-width: 820px) {
    display: initial;
    img {
      width: 320px;
      height: 330px;
    }
  }
`

export const InstaBtnWraper = styled.a`
  display: grid;
  grid-template-columns: 0.1fr 1.9fr;
  img {
    max-width: 500px;
  }
  @media (max-width: 450px) {
    ${'' /* grid-template-rows: 0.1fr 1.9fr; */}
    grid-template-rows: 1fr;
    grid-column-start: 1;
    grid-template-columns: 0;
  }
  @media (max-width: 820px) {
    display: initial;
    img {
      width: 320px;
      height: 330px;
    }
  }
`

export const FrameWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
  ${'' /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */}
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 83px;
  margin: 83px 0;
  @media (max-width: 820px) {
    display: inherit;
    flex-direction: column;
    flex-wrap: wrap;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 450px) {
    display: inherit;
    flex-direction: column;
    flex-wrap: wrap;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`
