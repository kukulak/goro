import React from 'react'
import {
        ServiciosWrapper,
        TxtServiciosWrapper
        } from './Quienes.styles'
const listServicios = [
    {
        name: 'Sonorización',
        id: 'ls1'
    },
    {
        name: 'Diseño de Audio',
        id: 'ls2'
    },
    {
        name: 'Inmersión 3d',
        id: 'ls3'
    },
    {
        name: 'Estudio de Grabación',
        id: 'ls4'
    },
    {
        name: 'Sonorización',
        id: 'ls5'
    },
    {
        name: 'Diseño de Audio',
        id: 'ls6'
    },
    {
        name: 'Inmersión 3d',
        id: 'ls7'
    },
    {
        name: 'Estudio de Grabación',
        id: 'ls8'
    },
    {
        name: 'Sonorización',
        id: 'ls9'
    },
    {
        name: 'Diseño de Audio',
        id: 'ls10'
    },
    {
        name: 'Inmersión 3d',
        id: 'ls11'
    },
    {
        name: 'Estudio de Grabación',
        id: 'ls12'
    },
]

const Servicios = () => {
    
    return(

        <ServiciosWrapper>
            {
                listServicios.map((ls) => <TxtServiciosWrapper key={ls.id}>{ls.name}&ensp;-&ensp; </TxtServiciosWrapper>)
            }
        </ServiciosWrapper>
       
        
    )
}

export default Servicios