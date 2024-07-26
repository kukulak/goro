import styled from "@emotion/styled";
import { themeGoroGoro } from "../Style.theme";


export const AllCardsWraper = styled.section`
    display: flex;
    // grid-row: 1;
    grid-column: 1;
    ${'' /* grid-template-columns: 1fr 1fr 1fr 1fr; */}
    width: 65%;
    justify-items: center;
    gap: 123px;
    flex-wrap: wrap;
    justify-content: center;
`

export const TestimonialWrapper = styled.div`
    padding-top: 100px;
    display: grid;
    justify-content: center;
    // grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
    // grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr;
    justify-items: center;
    // overflow: hidden;
    ${'' /* height: 100vh; */}
    // gap: 150px;
`

export const TestimonioCard = styled.div`
    width: 228px;
    display: grid;
    background-color: ${() => themeGoroGoro.colors.tertiary};
    padding: 20px 20px 60px;
    z-index: 20;
    border-radius: 10px;
    height: fit-content;
`

export const TextTestimonioWraper = styled.p`
    font-size: ${() => themeGoroGoro.fontSize.primary};
    color: ${()=> themeGoroGoro.colors.light};
    width: 80%;
    justify-self: center;
    margin: 50px 0;
`

export const Comillas = styled.img`
    width: 50px;
    margin: -31px 0 0 0;
    justify-self: center;
`
export const ImgTestimonioWraper = styled.img`
    object-fit: fill;
    border-radius: 100%;
    width: 120px;
    height: 120px;
    justify-self: center;
    border: solid 3px ${() => themeGoroGoro.colors.color};
    margin-bottom: -100px;
    overflow: hidden;
`