import React, { useEffect, useRef } from 'react'

import { GaleriaWraper, ImageWraper } from './GaleriaEstudio.styles'

import './GaleriaStudio.styles.css'

import img001 from '../../img-momentos/goro_web2.jpeg'
// import img002 from '../../img-momentos/goro_web3.jpeg'
// import img003 from '../../img-momentos/goro_web4.jpeg'
// import img004 from '../../img-momentos/goro-0004.png'
// import img005 from '../../img-momentos/goro-0005.png'
// import img006 from '../../img-momentos/goro-0006.png'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
// import { ScrollSmoother } from 'gsap/ScrollSmoother';

const galeriaGoro = [
  {
    id: 'imgg000',
    name: 'GoroGoro estudio',
    project: 'Img gorogoro estudio',
    description:
      'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
    src: img001,
    link: 'take/me/to/apple',
    masFotos: 'linkMasFotos'
  }
]

const GaleriaEstudio = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const imgRef = useRef()
  const mascaraRef = useRef(true)

  useEffect(() => {
    ScrollTrigger.matchMedia({
      '(max-width: 900px)': () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mascaraRef.current,
            start: '+=80 50%',
            end: 'bottom top',
            // markers: true,
            id: 'mascaraMobile',
            scrub: 4,
            pin: true,
            maskPositionX: '51.1%'
          }
        })
        tl.to(mascaraRef.current, {
          maskSize: '15500%',
          ease: 'power4.inOut',
          // maskPositionX: '47.1%'
          maskPositionX: '52.1%'
        })
      },

      '(min-width: 819px)': () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mascaraRef.current,
            // start: '+=80',
            end: 'bottom 200',
            // markers: true,
            id: 'mascaraDesktop',
            scrub: 4,
            // pinSpacing: false,
            pin: true,
            maskPositionX: '51.1%'
          }
        })
        tl.to(mascaraRef.current, {
          // maskPositionX: '47.1%',
          maskSize: '15500%',
          ease: 'power4.inOut',
          maskPositionX: '52.1%'
        })
      }
    })
  })
  return (
    <>
      <div className="theH dolbyMarcara" ref={mascaraRef}>
        <GaleriaWraper className="dolbyMarcaras" ref={imgRef}>
          {galeriaGoro.map(img => (
            <ImageWraper
              key={img.id}
              name={img.name}
              project={img.project}
              description={img.description}
              masFotos={img.masFotos}
              src={img.src}
              link={img.link}
            />
          ))}
        </GaleriaWraper>
      </div>
    </>
  )
}

export default GaleriaEstudio
