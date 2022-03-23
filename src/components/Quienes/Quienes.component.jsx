import React, {useRef, useEffect, useState} from 'react'
import {
        QuienesWraper,
        TitleWraper,
        ParaghraphWraper,
        GrupoServiciosWrapper,
        TitleHomeWraper
        } from './Quienes.styles'
// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Title from '../GlobalElements/Title.component'        
import Servicios from './Servicios.component'

const Quienes = () =>{

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const serviciosRef = useRef()
    const quienesRef = useRef()
    // const titleRef = useRef()

    useEffect(() => {
        let horizontal = gsap.timeline();
        // let l = serviciosRef.getTotalLength();
        horizontal.fromTo(
            serviciosRef.current, {
            x: 0
        },
        {
            x: -3300,
            rotationY: 20,
            rotationZ: 2, 
        })
        const totalHeight = window.innerHeight
        console.log('totalHeight', totalHeight)
        ScrollTrigger.create({ // first circle animation
            trigger: serviciosRef.current,
            start: `top ${totalHeight-250}`,
            end: "bottom 100px",
            markers: false,
            animation: horizontal,
            id: 'servicios',
            ease: "power2",
            scrub: 10,

           
        });


    })

    useEffect(() => {
        gsap.to(quienesRef.current, {
            y: -200, 
            scrollTrigger:{
                trigger: quienesRef.current, 
                start: 'top bottom',
                end: 'bottom top',
                markers: false,
                id: 'quienes',
                scrub: 2,
            }
        })

        // gsap.to(titleRef.current, {
        //     y: 50,
        //     scrollTrigger:{
        //         trigger: titleRef.current, 
        //         start: 'top bottom',
        //         end: 'bottom top',
        //         markers: false,
        //         id: 'quienes',
        //         scrub: 1,
        //     }
        // })
    }, [])

    return(
        <QuienesWraper className='Quienes'>
            {/* <TitleHomeWraper ref={titleRef}> */}
                <Title title= {'Quienes Somos'}/>
            {/* </TitleHomeWraper> */}
                
            <ParaghraphWraper ref={quienesRef}>
                Somos un laboratorio<br />
                de inmersión sonora,<br />
                producimos experiencias<br />
                integrales de audio.<br />
                Sabemos lo que hacemos,<br />
                hacemos lo que nos apaciona.<br />
            </ParaghraphWraper>
            <GrupoServiciosWrapper ref={serviciosRef}>
                <Servicios />
            </GrupoServiciosWrapper>
        </QuienesWraper>
    )
}

export default Quienes