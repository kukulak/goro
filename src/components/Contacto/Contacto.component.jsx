import React from 'react'
import Title from '../GlobalElements/Title.component' 
import FormularioContacto from './FormularioContacto.component'

import {
    ContenedorContactoWraper
    } from './Contacto.styles'

const Contacto = () => {
    return(
        <ContenedorContactoWraper className='contenedorContacto'>
            <Title title={'Contacto'} />
            <FormularioContacto />
        </ContenedorContactoWraper>
    )
}


export default Contacto