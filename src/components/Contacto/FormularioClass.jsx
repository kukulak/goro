import React, {useRef, useEffect} from 'react'
// import './contactoformulario.styles.scss'
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

class Formulario extends React.Component{ 
    constructor(props){
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        super(props)
        this.state = {
            nombre: '',
            email: '',
            mensaje: '',
            mailSent: false,
            error: null
        }
    }

    
    handleSubmit(e){
        e.preventDefault();
        axios({
          method: "post", 
          url:"http://gorogoroil.com/wip/mail.php", 
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
      }
    
      resetForm(){
        this.setState({nombre: '', email: '', mensaje: ''})
      }

    render(){
        return(
              <ContenedorFormularioWraper 
              className='formulario unselectable'> 
              
                     <TituloContacto className='tituloContacto'>Mándanos un mensaje</TituloContacto>
                <ParrafoContacto className='parrafoContacto'>
                    o visítanos en Roma 8, Colonia Juarez, CDMX, México

                </ParrafoContacto>

                    {this.state.mailSent ? (
                        <div className='agradecimiento'>
                            <div>Gracias por escribirnos.</div>
                        </div>
                        ) : (
                            <>
                    <FormWraper onSubmit={this.handleSubmit.bind(this)} method="POST" action="">
                    <FrameUnoWraper className='uno'>
                        <LabelWraper htmlFor="nombre">NOMBRE COMPLETO*</LabelWraper>
                        
                        <InputWraper  
                            onChange={this.onNombreChange.bind(this)} type="text" id="nombre" name="nombre" placeholder="" value={this.state.nombre} 
                        />
                        
                        <LabelWraper  htmlFor="email">EMAIL*</LabelWraper>
                        
                        <InputWraper 
                            onChange={this.onEmailChange.bind(this)} type="email" id="email" name="email" placeholder="" value={this.state.email}
                        />
                        
            <div className='redesContactosDesk'>
                <RedesContactoWraper className="infoLinks">
                    <ParrafoContacto className='pRedes'>
                        Nuestras redes sociales
                    </ParrafoContacto>
                    <AppleMusicBtn href='apple/gorogoro'/>
                    <Redes />
                </RedesContactoWraper>
            </div>     
         

           </FrameUnoWraper>
           <FrameDosWraper className='dos'>
                        <LabelWraper htmlFor="mensaje">MENSAJE*</LabelWraper>
                        
                        <TextAreaWraper
                        cols="30" rows="10"
                            onChange={this.onMensajeChange.bind(this)}id="mensaje" name="mensaje" placeholder="" value={this.state.mensaje}> 
                        </TextAreaWraper>
                        
                        <InputSubmitWraper
                            data-cursor-color="#ba63cc"
                            data-cursor-text="ENVIAR" data-cursor-size="100px"
                            type="submit" value="ENVIAR"
                        />
 </FrameDosWraper>
 
                    {/* <div>
                    {this.state.mailSent &&
                        <div>Gracias por escribirnos.</div>
                    }
                    </div> */}


                    {/* <div>
                    {this.state.mailSent ? (
                        <div>Gracias por escribirnos.</div>

                    ):(
                        <div>dale enviar.</div> 
                    )
                    }
                    </div> */}


                    <div className='redesContactosMobile'>
                <RedesContactoWraper className="infoLinks">
                    <ParrafoContacto className='pRedes'>
                        Nuestras redes sociales
                    </ParrafoContacto>
                    <AppleMusicBtn href='apple/gorogoro' className='appleMobile' />
                    <Redes />
                </RedesContactoWraper>
            </div>   


                    </FormWraper>
</>
                    )}
            </ContenedorFormularioWraper>

            )

    }


    onNombreChange(event) {
        this.setState({nombre: event.target.value})
    }
  
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMensajeChange(event) {
        this.setState({mensaje: event.target.value})
    }



}

export default Formulario