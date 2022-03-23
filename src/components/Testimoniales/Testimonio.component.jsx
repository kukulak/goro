import React, {useRef, useState, useEffect} from 'react'

import Title from '../GlobalElements/Title.component' 
import comillas from '../../icons/comillas.svg'
import { TestimonioCard,
         TextTestimonioWraper,
         ImgTestimonioWraper,
         AllCardsWraper,
         Comillas } from './Testimonio.styles'

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
         

const Testimoniales = (props) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const cardRef = useRef()
    const comillasRef = useRef()


    useEffect(() => {
    
        const randomNumber = Math.floor(Math.random()*-300)-300

        gsap.to(cardRef.current, {
            y: randomNumber,
            scrollTrigger:{
                trigger: cardRef.current,
                start: 'top bottom',
                end: 'bottom top-500',
                markers: false,
                id: 'discos',
                scrub: 1,
            }
        })

        gsap.to(cardRef.current, {
            opacity: 0.0,
            scrollTrigger:{
                trigger: cardRef.current,
                start: 'top 300px',
                end: '50% 200px',
                markers: false,
                id: 'opacity',
                scrub: true,
            }
        })

    }, [])

    // useEffect(() => {

    // })


    return(
        <>
        {/* {testimonios.map(test =>  */}
            <TestimonioCard ref={cardRef}>
                <Comillas src={comillas} ref={comillasRef}/>
                <TextTestimonioWraper> 
                   { props.texto }
                </TextTestimonioWraper>
                <ImgTestimonioWraper src={props.img}/>
            </TestimonioCard>
            {/* )  } */}
        </>
    )
}

export default Testimoniales