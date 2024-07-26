import styled from '@emotion/styled'
import { themeGoroGoro } from '../Style.theme'

export const TitleWraper = styled.h2`
  color: ${() => themeGoroGoro.colors.tertiary};
  ${'' /* font-size: ${() => themeGoroGoro.fontSize.title}; */}
  font-family: ${() => themeGoroGoro.fonts.primary};
  margin: 0;
  font-weight: 100;
  grid-row: 1;
  grid-column: 1;
  font-size: 15.5vw;

  //
  margin-top: -330px;
  @media (max-width: 1312px) {
    font-size: 12.5vw;
    margin-top: -100px;
  }
  @media (max-width: 768px) {
    ${'' /* font-size: 90px; */}
    margin-top: -100px;
  }
  @media (max-width: 420px) {
    ${'' /* font-size: 56px; */}
    margin-top: -200px;
  }
`
