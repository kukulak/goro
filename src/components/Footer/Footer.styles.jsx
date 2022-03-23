import styled from "@emotion/styled";
import { themeGoroGoro } from "../Style.theme";

export const FooterWraper = styled.footer`
    width: 100%;
    height: 10vh;
    color: ${() => themeGoroGoro.colors.primary};
    display: grid;
    background: black;
    font-size: 30px;
    align-items: center;
    justify-items: center;
    justify-content: center;
`