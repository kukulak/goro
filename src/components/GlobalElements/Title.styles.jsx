import styled from "@emotion/styled";
import { themeGoroGoro } from '../Style.theme'


export const TitleWraper = styled.h2`
    color: ${() => themeGoroGoro.colors.tertiary};   
    font-size: ${() => themeGoroGoro.fontSize.title};
    font-family: ${() => themeGoroGoro.fonts.primary};
    margin: 0;
    font-weight: 100;
    grid-row: 1;
    grid-column: 1;

    //
    margin-top: -230px;
    @media (max-width: 420px) {
        font-size: 56px;
        margin-top: -181px;

      }
`