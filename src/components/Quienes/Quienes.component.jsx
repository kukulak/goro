import React, {useRef, useEffect, useState} from 'react'
import {
        QuienesWraper,
        TitleWraper,
        ParaghraphWraper,
        GrupoServiciosWrapper,
        SecondGrupoServiciosWrapper,
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
    const serviciosRefInverse = useRef()
    const quienesRef = useRef()
    // const titleRef = useRef()

    // useEffect(() => {
    //     let horizontal = gsap.timeline();
    //     // let l = serviciosRef.getTotalLength();
    //     horizontal.fromTo(
    //         serviciosRef.current, {
    //         x: 0
    //     },
    //     {
    //         x: -4300,
    //         rotationY: 20,
    //         rotationZ: 2, 
    //     })
    //     const totalHeight = window.innerHeight
    //     console.log('totalHeight', totalHeight)
    //     ScrollTrigger.create({ // first circle animation
    //         trigger: serviciosRef.current,
    //         start: `top ${totalHeight-250}`,
    //         end: "bottom 100px",
    //         markers: false,
    //         animation: horizontal,
    //         id: 'servicios',
    //         ease: "power2",
    //         scrub: 10,

           
    //     });


    // })


    useEffect(() => {
        let horizontal = gsap.timeline();
        ScrollTrigger.matchMedia({
            "(min-width: 1300px)": function() {
                horizontal.to(
                    serviciosRef.current, {
                    x: '-=6350',
                    yoyo: true,
                    ease: 'none',
                    duration: 50,
                    repeat: -1,
                })
            },
            "(min-width: 769px)": function() {
                horizontal.to(
                    serviciosRef.current, {
                    x: '-=5450',
                    yoyo: true,
                    ease: 'none',
                    duration: 50,
                    repeat: -1,
                })
            }
        })
      })

    useEffect(() => {
        let horizontal = gsap.timeline();
        ScrollTrigger.matchMedia({
            "(min-width:1300px)": function(){
                horizontal.to(
                    serviciosRefInverse.current, {
                    x: '+=6350',
                    yoyo: true,
                    ease: 'none',
                    duration: 50,
                    repeat: -1,
                })
            },
            "(min-width: 769px)": function(){
                horizontal.to(
                    serviciosRefInverse.current, {
                    x: '+=5450',
                    yoyo: true,
                    ease: 'none',
                    duration: 50,
                    repeat: -1,
                })
            }
        })
     
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
                Goro Goro Immersive Lab es un
                <br />
                estudio boutique que está
                <br />
                idealmente ubicado en el corazón
                <br />
                de la Ciudad de México.
                <br />
                Somos un laboratorio formado por
                <br />
                ingenieros y artistas creativos
                <br />
                dedicados a experiencias
                <br />
                audiovisuales inmersivas que
                <br />
                utilizan tecnología de punta.
                <br />
            </ParaghraphWraper>
            <GrupoServiciosWrapper className='serviciosContainer' ref={serviciosRef}>
                <Servicios className='servicios' />
            </GrupoServiciosWrapper>
            <SecondGrupoServiciosWrapper ref={serviciosRefInverse}>
                <Servicios className='servicios' />
            </SecondGrupoServiciosWrapper>
        </QuienesWraper>
    )
}

export default Quienes