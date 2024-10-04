import React, { useRef, useState, useEffect } from 'react'

import disco from '../../icons/disco.png'
import portada from '../../img-momentos/goro-0002.png'

import {
  ListenWraper,
  MezclasWraper,
  OneRpmWraper,
  SingleWraper,
  MezclaWraper,
  RecordImageWraper,
  DiscWraper,
  LinkAppleWraper,
  LogosWraper,
  TitleWraper,
  RecordNameWraper,
  ParaghraphWraper,
  ProduccionWraper,
  InfoRecordWraper,
  ContenedorLogos
} from './Mezclas.styles'

// GSAP
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const CuadriculaRecord = props => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const manageClick = open => {
    window.open(open, '_blank')
    console.log('clicked')
  }

  const recordRef = useRef()
  const mezclaRef = useRef()
  const infoRef = useRef()
  const discoRef = useRef()

  const manageOver = () => {
    console.log('HOVER')
    ScrollTrigger.matchMedia({
      '(min-width: 1400px)': function () {
        gsap.to(mezclaRef.current, {
          zIndex: 1000
        })

        gsap.to(recordRef.current, {
          rotation: -10,
          // y: -40,
          scale: 0.7,
          duration: 0.3,
          boxShadow: '10px 0px 20px 0px #000000ab'
        })

        gsap.to(infoRef.current, {
          y: 0,
          duration: 0.3
        })

        gsap.to(discoRef.current, {
          rotation: -35,
          scale: 0.6,
          y: -10,
          x: 72,
          duration: 0.5
        })
      },
      '(min-width: 769px)': function () {
        gsap.to(mezclaRef.current, {
          zIndex: 1000
        })

        gsap.to(recordRef.current, {
          rotation: -10,
          // y: -40,
          scale: 0.7,
          duration: 0.3,
          boxShadow: '10px 0px 20px 0px #000000ab'
        })

        gsap.to(infoRef.current, {
          y: 0,
          duration: 0.3
        })

        gsap.to(discoRef.current, {
          rotation: -35,
          scale: 0.6,
          y: 1,
          x: 32,
          duration: 0.5
        })
      }
    })
    // ScrollTrigger.matchMedia({
    //     "(min-width: 600px)": function() {

    //     }
    // })
  }
  const manageOut = () => {
    console.log('OUT')
    ScrollTrigger.matchMedia({
      '(min-width: 1280px)': function () {
        gsap.to(mezclaRef.current, {
          zIndex: 1
        })
        gsap.to(recordRef.current, {
          rotation: 0,
          y: 0,
          scale: 1.0,
          duration: 0.2,
          boxShadow: '0px 0px 0px 0px #000000aa'
        })
        gsap.to(infoRef.current, {
          y: 0,
          duration: 0.3
        })
        gsap.to(discoRef.current, {
          rotation: 0,
          scale: 0.6,
          y: 0,
          x: 0,
          duration: 0.3
        })
      },
      '(min-width: 769px)': function () {
        gsap.to(mezclaRef.current, {
          zIndex: 1
        })
        gsap.to(recordRef.current, {
          rotation: 0,
          y: 0,
          scale: 1.0,
          duration: 0.2,
          boxShadow: '0px 0px 0px 0px #000000aa'
        })
        gsap.to(infoRef.current, {
          y: 0,
          duration: 0.3
        })
        gsap.to(discoRef.current, {
          rotation: 0,
          scale: 0.6,
          y: 0,
          x: 0,
          duration: 0.3
        })
      }
    })
  }

  useEffect(() => {
    mezclaRef.current.addEventListener('mouseover', manageOver)
    mezclaRef.current.addEventListener('mouseout', manageOut)
    // mezclaRef.current.addEventListener('click', manageClick )

    const randomNumber = Math.floor(Math.random() * -300) - 300

    ScrollTrigger.matchMedia({
      '(min-width: 1280px)': function () {
        gsap.to(mezclaRef.current, {
          y: randomNumber,
          scrollTrigger: {
            trigger: mezclaRef.current,
            start: 'top bottom',
            end: 'bottom top-500',
            markers: false,
            id: 'discos',
            scrub: 1
          }
        })

        gsap.to(mezclaRef.current, {
          opacity: 0.0,
          scrollTrigger: {
            trigger: mezclaRef.current,
            start: 'top 300px',
            end: '50% 200px',
            markers: false,
            id: 'opacity',
            scrub: true
          }
        })
      },
      '(min-width: 769px)': function () {
        gsap.to(mezclaRef.current, {
          y: randomNumber,
          scrollTrigger: {
            trigger: mezclaRef.current,
            start: 'top bottom',
            end: 'bottom top-500',
            markers: false,
            id: 'discos',
            scrub: 1
          }
        })

        gsap.to(mezclaRef.current, {
          opacity: 0.0,
          scrollTrigger: {
            trigger: mezclaRef.current,
            start: 'top 300px',
            end: '50% 200px',
            markers: false,
            id: 'opacity',
            scrub: true
          }
        })
      }
    })
  }, [])

  return (
    <MezclaWraper
      className="fullDisc"
      ref={mezclaRef}
      onClick={() => manageClick(props.link)}
    >
      <RecordImageWraper
        className="imgRecord"
        src={props.portada}
        ref={recordRef}
      />

      <DiscWraper className="imgDisco" ref={discoRef} src={disco} />

      <InfoRecordWraper className="InfoRecordWraper" ref={infoRef}>
        <SingleWraper>{props.single}</SingleWraper>
        <RecordNameWraper>{props.nombre}</RecordNameWraper>
        <ParaghraphWraper>{props.artista}</ParaghraphWraper>
        <OneRpmWraper>{props.soundtech}</OneRpmWraper>
        <RecordNameWraper>{props.extra}</RecordNameWraper>
        <ProduccionWraper>{props.produccion}</ProduccionWraper>
        {/* <ListenWraper className='listenWraper'> */}
        {/* <p>Click to Listen</p> */}
        <LinkAppleWraper className={props.plataforma} />
        {/* </ListenWraper> */}
        <ContenedorLogos className="contenedorLogos">
          {props.logos.map(logo => {
            return <LogosWraper className={logo} />
          })}
        </ContenedorLogos>
        {/* <LinkAppleWraper className={props.plataforma}>
                </LinkAppleWraper> */}
      </InfoRecordWraper>
    </MezclaWraper>
  )
}

export default CuadriculaRecord
