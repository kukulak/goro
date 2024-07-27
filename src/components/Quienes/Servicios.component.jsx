import React from 'react'
import { ServiciosWrapper, TxtServiciosWrapper } from './Quienes.styles'
const listServicios = [
  {
    name: 'Mix Dolby Atmos',
    id: 'ls1'
  },
  {
    name: 'Mix Ambisonics',
    id: 'ls2'
  },
  {
    name: 'Mix tradicional',
    id: 'ls3'
  },
  {
    name: 'PreMix postproducción (5.1, 7.1 & Dolby Atmos)',
    id: 'ls4'
  },
  {
    name: 'Mix Sonido Inmersivo Live',
    id: 'ls5'
  },
  {
    name: 'Producciones audio visuales en formatos inmersivos',
    id: 'ls6'
  },
  {
    name: 'Mix Dolby Atmos',
    id: 'ls7'
  },
  {
    name: 'Mix Ambisonics',
    id: 'ls8'
  },
  {
    name: 'Mix tradicional',
    id: 'ls9'
  },
  {
    name: 'PreMix postproducción (5.1, 7.1 & Dolby Atmos)',
    id: 'ls10'
  },
  {
    name: 'Mix Sonido inmersivo Live',
    id: 'ls11'
  },
  {
    name: 'Producciones audio visuales en formatos inmersivos',
    id: 'ls12'
  }
]

console.log(listServicios.slice(0, 5))

const Servicios = ({ forMobile }) => {
  return (
    <ServiciosWrapper className="serviciosall ">
      {forMobile
        ? listServicios.slice(0, 6).map(mls => (
            <TxtServiciosWrapper className="eachService" key={mls.id}>
              {mls.name}{' '}
            </TxtServiciosWrapper>
          ))
        : listServicios.map(ls => (
            <TxtServiciosWrapper className="eachService" key={ls.id}>
              {ls.name}{' '}
            </TxtServiciosWrapper>
          ))}
    </ServiciosWrapper>
  )
}

export default Servicios
