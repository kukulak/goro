import React, {useRef, useEffect} from 'react'
import {
        ContenedorFormularioWraper,
        FormWraper,
        FrameUnoWraper,
        FrameDosWraper,
        InputWraper,
        LabelWraper,
        ParrafoContacto,
        TituloContacto,
        InputSubmitWraper,
        TextAreaWraper,
        RedesContactoWraper
        } from './Contacto.styles'

import Redes from '../GlobalElements/Redes.component'
import AppleMusicBtn from '../GlobalElements/AppleMusicBtn.component'  

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


import './Contacto.styles.css'    
import Contacto from './Contacto.component';

const FormularioContacto = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const contactRef = useRef()
    useEffect(()=> {
        gsap.to(contactRef.current,
            {
                y: -520,
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    markers: false,
                    id: 'contacto',
                    scrub: 1,
                }
            })
    })

    return(
        <ContenedorFormularioWraper ref={ contactRef }className='contenedorForm'>
                <TituloContacto>Mándanos un mensaje</TituloContacto>
                <ParrafoContacto>
                    o visítanos en Roma 8, Colonia Juarez, CDMX, México

                </ParrafoContacto>
        <FormWraper action="" method="post">
           <FrameUnoWraper className='uno'>
                <LabelWraper htmlFor="nombre">
                    Nombre
                </LabelWraper>
                
                <InputWraper type="text" name="nombre" id="nombre" />
                
                <LabelWraper htmlFor="email">Email</LabelWraper>
                
                <InputWraper type="email" name="email" id="email" />
            <RedesContactoWraper className="infoLinks">
            <ParrafoContacto className='pRedes'>
                Búscanos en las redes sociales
            </ParrafoContacto>
                <AppleMusicBtn href='apple/gorogoro'/>
                <Redes />
            </RedesContactoWraper>
           </FrameUnoWraper>
            <FrameDosWraper className='dos'>
                <LabelWraper htmlFor="mensaje">Mensaje</LabelWraper>
                <TextAreaWraper name="mensaje" id="mensaje" cols="30" rows="10"></TextAreaWraper>
                <InputSubmitWraper type="submit" value="Enviar" />
            </FrameDosWraper>
            
        </FormWraper>
        </ContenedorFormularioWraper>
    )
}


export default FormularioContacto