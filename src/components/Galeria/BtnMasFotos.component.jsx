import React from 'react'

import {
    ImgArrowMasWraper,
    BtnMirateWrapper
    } from './Galeria.styles'

import goArrow from '../../icons/icon_go.svg'


const BtnMasFotos = () => {
    return(
        <BtnMirateWrapper>
            Mira todas las fotos<ImgArrowMasWraper src={goArrow} alt="go to apple" />
        </BtnMirateWrapper>
    )
}


export default BtnMasFotos