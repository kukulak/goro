import React, {useRef, useState, useEffect} from 'react'

import disco from '../../icons/disco.png'
import portada from '../../img-momentos/goro-0002.png'

import { 
        MezclasWraper,
        MezclaWraper,
        RecordImageWraper,
        DiscWraper,
        LinkAppleWraper,
        TitleWraper,
        RecordNameWraper,
        ParaghraphWraper,
        InfoRecorWraper
        } from './Mezclas.styles'

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


const Record = (porps) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const manageClick = (open) => {
        window.open(open, '_blank')
    }

    const recordRef = useRef()
    const mezclaRef = useRef()
    const infoRef = useRef()
    const discoRef = useRef()


    const manageOver = () => {
        console.log('HOVER')
        gsap.to(mezclaRef.current,{
           zIndex: 1000
        })
        
        gsap.to(recordRef.current,{
            rotation: -15,
            y: -40,
            duration: 0.3,
            boxShadow:"10px 0px 20px 0px #000000ab",
            
        })

        gsap.to(infoRef.current,{
            x: 10,
            duration: 0.3
        })

        gsap.to(discoRef.current,{
            rotation: -15,
            y: -60,
            x: 110,
            duration: 0.3
        })
    }
    const manageOut = () => {
        console.log('OUT')
        gsap.to(mezclaRef.current,{
            zIndex: 1
        })
        gsap.to(recordRef.current,{
            rotation: 0,
            y: 0,
            duration: 0.2,
            boxShadow:"0 0 0px 0px #000000aa",
            
        })
        gsap.to(infoRef.current,{
            x: 0,
            duration: 0.3
        })
        gsap.to(discoRef.current,{
            rotation: 0,
            y: 0,
            x: 0,
            duration: 0.3
        })
    }

    useEffect(() => {
        mezclaRef.current.addEventListener('mouseover', manageOver )
        mezclaRef.current.addEventListener('mouseout', manageOut )

        const randomNumber = Math.floor(Math.random()*-300)-300
        const number = [200, 250, 200, 250]
        console.log( 'randomNumberInsideUSEEFFECGT',randomNumber)
        gsap.to(mezclaRef.current, {
            y: randomNumber,
            scrollTrigger:{
                trigger: mezclaRef.current,
                start: 'top bottom',
                end: 'bottom top-500',
                markers: false,
                id: 'discos',
                scrub: 1,
            }
        })

        gsap.to(mezclaRef.current, {
            opacity: 0.0,
            scrollTrigger:{
                trigger: mezclaRef.current,
                start: 'top 500px',
                end: '50% 200px',
                markers: false,
                id: 'opacity',
                scrub: true,
            }
        })

    }, [])

    // onClick={() => manageClick(porps.link)}

    return(
        <MezclaWraper ref={mezclaRef}>
            <RecordImageWraper src={portada} ref={recordRef} />

            <DiscWraper ref={discoRef} src={disco} />

            <InfoRecorWraper ref={infoRef}>
                <RecordNameWraper>
                    {porps.nombre}
                </RecordNameWraper>

                <ParaghraphWraper>
                    {porps.artista}
                </ParaghraphWraper>

                <LinkAppleWraper>
                </LinkAppleWraper>
            </InfoRecorWraper>

        </MezclaWraper>

    )
}


export default Record