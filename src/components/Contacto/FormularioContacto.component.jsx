import React, {useRef, useEffect, useState} from 'react'
import axios from 'axios';

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

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [mailSent, setMailSent] = useState(false)
    const [error, setError] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
          method: "post", 
          url:"http://gorogoro.com/mail.php", 
          data:  this.state
        })
        .then((response)=>{
            this.setState({
                mailSent: response.data.sent
            }, () => console.log(this.state)) // NB! setState accepts callbacks
                  
            
          if (response.data.status === 'success') {
            alert(this.state.nombre + " tu mensaje fue enviado."); 
            this.resetForm()
          } else if (response.data.status === 'fail') {
            alert(this.state.nombre + " el mensaje no se envio")
          }
        })
        .catch(error => this.setState({ error: error.message }));

        // .then(result => {
        //     this.setState({
        //       mailSent: result.data.sent
        //     }, () => console.log(this.state)) // NB! setState accepts callbacks
        //   })
        //   .catch(error => this.setState({ error: error.message }));


      }
    
      const resetForm = () => {
        this.setState({nombre: '', email: '', pais: '', cp: '', mensaje: ''})
      }


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
                <TituloContacto className='tituloContacto'>Mándanos un mensaje</TituloContacto>
                <ParrafoContacto className='parrafoContacto'>
                    o visítanos en Roma 8, Colonia Juarez, CDMX, México

                </ParrafoContacto>
        <FormWraper className='formWraper' action="" method="post">
           <FrameUnoWraper className='uno'>
                <LabelWraper htmlFor="nombre">
                    Nombre
                </LabelWraper>
                
                <InputWraper type="text" name="nombre" id="nombre" />
                
                <LabelWraper htmlFor="email">Email</LabelWraper>
                
                <InputWraper type="email" name="email" id="email" />
            <RedesContactoWraper className="infoLinks">
            <ParrafoContacto className='pRedes'>
                Nuestras redes sociales
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