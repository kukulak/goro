import styled from "@emotion/styled";
import { themeGoroGoro } from "../Style.theme";

export const ContenedorContactoWraper = styled.section`
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
    grid-template-rows: 1fr 1fr 1fr;
`

export const ContenedorFormularioWraper = styled.section`
    color: ${() => themeGoroGoro.colors.primary};
    background: ${() => themeGoroGoro.colors.tertiary};
    width: 80%;
    border-radius: 5px;
    padding: 10px;
    display: grid;
    // grid-row: 1;
    grid-column: 1;
    z-index: 1;
`

export const FormWraper = styled.form`
    display: grid; 
    grid-template-columns: 1fr 1fr;
    // justify-content: center;
    // justify-items: center;
    // align-items: center;
`

export const FrameUnoWraper = styled.div`
    // width: 86%;
    // background: red;
    display: grid;
    justify-items: start;
    padding: 20px;
    grid-template-rows: 0.1fr 0.2fr 0.1fr 0.2fr 1fr;
`

export const FrameDosWraper = styled.div`
    // width: 86%;
    // background: yellow;
    display: grid;
    justify-items: start;
    padding: 20px;
    grid-template-rows: 0.1fr 0.7fr 0.1fr;
`

export const InputWraper = styled.input`
    width: 100%;
    height: 39px;
    border: none;
    border-radius: 5px;
    width: 100%;
`

export const TextAreaWraper = styled.textarea`
    width: 100%;
    height: 374px;
    resize: vertical;
    border-radius: 5px;
    border: none;
`

export const InputSubmitWraper = styled.input`
    justify-self: end;
    border-radius: 3px;
    margin: 10px 0;
    border: none;
    padding: 10px 30px;
    background: ${() => themeGoroGoro.colors.color};
    color: ${() => themeGoroGoro.colors.tertiary};
    font-weight: 200;
    text-transform: uppercase;
    font-size: 1.1em;
`

export const LabelWraper = styled.label`
    align-self: end;
    margin: 15px 0 10px;
`

export const ParrafoContacto = styled.p`
    align-self: start;
    text-align: initial;
    margin: 0 0 0 20px;
`
export const TituloContacto = styled.h3`
    align-self: start;
    text-align: initial;
    margin: 20px 0 5px 20px;
`

export const RedesContactoWraper = styled.div`
    display: grid;
    grid-template-rows: 0.2fr 0.2fr 0.3fr;
    justify-content: start;
    
`