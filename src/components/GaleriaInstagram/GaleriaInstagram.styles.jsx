import styled from "@emotion/styled";
import { themeGoroGoro } from "../Style.theme";


export const FullIntagramContainerWraper = styled.section`
    // width: 100vw;
    overflow: hidden;
    margin: 200px 0;
    z-index: 2;
`

export const InstaContainerWraper = styled.section`
    // width: 100vw;
    // overflow: hidden;
    margin: 200px 0;
    display: grid;
    justify-content: center;
    transform: rotate(45deg);  
    &:hover{
        transform: rotate(315deg);
    } 
`

export const InstaImageWraper = styled.img`
    width: 520px;
    height: 530px;
    background-color: ${() => themeGoroGoro.colors.primary};
    object-fit: cover;
    @media (max-width: 1300px) {
        width: 420px;
        height: 430px;
      }
    
`

export const BtnToInstagramWraper = styled.button`
    border: none;
    background-color: ${() => themeGoroGoro.colors.transparent};
    grid-column-start: 1;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotateZ(-90deg);
    color: ${() => themeGoroGoro.colors.primary};
    font-size: 2rem;
    width: 8px;
    align-self: end;
    margin: -21px 21px;
    font-weight: 200;
    font-family: ${() => themeGoroGoro.fonts.primary};
`

export const InstaCardWraper = styled.div`
    display: grid;
    grid-template-columns: 0.1fr 1.9fr;
   
`

export const FrameWraper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 83px;
    margin: 83px 0;
    // transform: rotate(45deg);   
`