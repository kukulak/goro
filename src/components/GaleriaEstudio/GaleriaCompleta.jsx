import React from 'react'
import GaleriaEstudio from './GaleriaEstudio.component'
import ImagesGaleria from './ImagesGaleria'
import TextoEstudio from './TextoEstudio.component'

function GaleriaCompleta() {
  return (
    <div>
      <GaleriaEstudio />
      <ImagesGaleria />
      <TextoEstudio />
    </div>
  )
}

export default GaleriaCompleta
