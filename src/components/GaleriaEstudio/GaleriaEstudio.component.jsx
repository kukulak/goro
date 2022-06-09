import React, { useEffect, useRef } from 'react'

import { GaleriaWraper, ImageWraper } from './GaleriaEstudio.styles'

import './GaleriaStudio.styles.css'

import img001 from '../../img-momentos/goro_web2.jpeg'
import img002 from '../../img-momentos/goro_web3.jpeg'
import img003 from '../../img-momentos/goro_web4.jpeg'
import img004 from '../../img-momentos/goro-0004.png'
import img005 from '../../img-momentos/goro-0005.png'
import img006 from '../../img-momentos/goro-0006.png'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { ScrollSmoother } from 'gsap/ScrollSmoother';


const galeriaGoro = [
    {
        id: 'imgg000',
        name: 'Proyecto Mezcla Locuaz',
        project: 'Proyecto Mezcla Locuaz',
        description: 'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
        src: img001,
        link: 'take/me/to/apple',
        masFotos: 'linkMasFotos'
    },
    // {
    //     id: 'imgg001',
    //     name: 'Proyecto Mezcla Locuaz',
    //     project: 'Proyecto Mezcla Locuaz',
    //     description: 'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
    //     src: img002,
    //     link: 'take/me/to/apple',
    //     masFotos: 'linkMasFotos'
    // },
    // {
    //     id: 'imgg002',
    //     name: 'Proyecto Mezcla Locuaz',
    //     project: 'Proyecto Mezcla Locuaz',
    //     description: 'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
    //     src: img003,
    //     link: 'take/me/to/apple',
    //     masFotos: 'linkMasFotos'
    // },
    // {
    //     id: 'imgg003',
    //     name: 'Proyecto Mezcla Locuaz',
    //     project: 'Proyecto Mezcla Locuaz',
    //     description: 'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
    //     src: img004,
    //     link: 'take/me/to/apple',
    //     masFotos: 'linkMasFotos'
    // },
    // {
    //     id: 'imgg004',
    //     name: 'Proyecto Mezcla Locuaz',
    //     project: 'Proyecto Mezcla Locuaz',
    //     description: 'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
    //     src: img005,
    //     link: 'take/me/to/apple',
    //     masFotos: 'linkMasFotos'
    // },
    // {
    //     id: 'imgg005',
    //     name: 'Proyecto Mezcla Locuaz',
    //     project: 'Proyecto Mezcla Locuaz',
    //     description: 'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
    //     src: img006,
    //     link: 'take/me/to/apple',
    //     masFotos: 'linkMasFotos'
    // }
]


const GaleriaEstudio = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const imgRef = useRef()
    const mascaraRef = useRef(true)
    // useEffect(()=>{
    //     const smoother = ScrollSmoother.create({
    //         wrapper: "#wrapper",
    //         content: "#content",
    //         smooth: 2,
    //         effects: true
    //        });
           
    //        smoother.effects(".hero__image-cont", {
    //         speed: () => gsap.utils.random(0.55, 0.85, 0.05)
    //        });
           
    // })
    // useEffect(()=>{
    //     gsap.fromTo(mascaraRef.current,{
    //         // rotation: 10,
    //         maskSize: '25%',
    //         // maskPositionX: '-325px',
    //         // maskPositionY: '10%',
            
    //     },
    //     {
    //         maskSize: '5000%',
    //         scrollTrigger:{
    //             trigger: mascaraRef.current,
    //             // start: 'bottom bottom',
    //             start: '+=80',

    //             end: 'bottom top',
    //             // end: '+=4500',
    //             markers: true,
    //             id: 'mascara',
    //             scrub: 5,
    //             pin: true,
    //         }

    //     })
    // })

    useEffect(()=>{
       
        const tl = gsap.timeline({
            // maskSize: '25%',

            scrollTrigger:{
                trigger: mascaraRef.current,
                // start: 'bottom bottom',
                start: '+=80',

                end: 'bottom top',
                // end: '+=4500',
                markers: true,
                id: 'mascara',
                scrub: 4,
                pin: true,
            }
        })
        tl.to(mascaraRef.current,{
            // rotation: 10,
            maskSize: '15500%',
            ease: "power4.out",
            maskPositionX: '51.7%',
            // duration: 3,
            // maskPositionX: '-325px',
            // maskPositionY: '10%',
        })
        // tl.to(imgRef.current,{
        //     y:-3000
        // })
    })

    return (
        <>
        <div className='theH dolbyMarcara' ref={mascaraRef}>
            <GaleriaWraper className='dolbyMarcaras' ref={imgRef}>
                {galeriaGoro.map((img)=>
                    <ImageWraper key={img.id} name={img.name} project={img.project} description={img.description} masFotos={img.masFotos} src={img.src} link={img.link}></ImageWraper>
                )}
            </GaleriaWraper>
        </div>
       

                </>
  )
}

export default GaleriaEstudio