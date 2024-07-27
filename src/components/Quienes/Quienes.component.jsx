import React, { useRef, useEffect } from 'react'
import {
  QuienesWraper,
  ParaghraphWraper,
  GrupoServiciosWrapper,
  SecondGrupoServiciosWrapper
} from './Quienes.styles'

import { isBrowser, isMobile } from 'react-device-detect'

// GSAP

import { SplitText } from '../../utils/SplitText'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import Title from '../GlobalElements/Title.component'
import Servicios from './Servicios.component'

const Quienes = props => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  const serviciosRef = useRef()
  const serviciosRefInverse = useRef()
  const quienesRef = useRef()

  useEffect(() => {
    gsap.to(serviciosRef.current, {
      xPercent: -50,
      ease: 'none',
      duration: 35,
      repeat: -1
    })
  })

  useEffect(() => {
    gsap.to(serviciosRefInverse.current, {
      xPercent: 50,
      ease: 'none',
      duration: 35,
      repeat: -1
    })
  })

  // TABLET
  // useEffect(() => {
  //   ScrollTrigger.matchMedia({
  //     '(min-width: 700px)': function () {
  //       gsap.to(serviciosRef.current, {
  //         xPercent: -58,
  //         ease: 'none',
  //         // duration: 50,
  //         duration: 5,
  //         repeat: -1
  //       })
  //     }
  //   })
  // })

  useEffect(() => {
    gsap.to(quienesRef.current, {
      y: -200,
      scrollTrigger: {
        trigger: quienesRef.current,
        start: 'top bottom',
        end: 'bottom top',
        markers: false,
        id: 'quienes',
        scrub: 2
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

  return (
    <QuienesWraper className="Quienes">
      {/* <TitleHomeWraper ref={titleRef}> */}
      <Title title={'Quienes Somos'} />
      {/* </TitleHomeWraper> */}

      <ParaghraphWraper
        className="paraghraph mt-64 sm:mt-60 md:mt-64 lg:mt-72 xl:mt-96 2xl:mt-96"
        ref={quienesRef}
      >
        <SplitText>{props.text}</SplitText>
      </ParaghraphWraper>

      {/* <BrowserView> */}
      {isBrowser ? (
        <>
          <GrupoServiciosWrapper
            className="serviciosContainer "
            ref={serviciosRef}
          >
            <Servicios className="servicios" />
          </GrupoServiciosWrapper>

          <SecondGrupoServiciosWrapper
            className="serviciosContainerInvert"
            ref={serviciosRefInverse}
          >
            <Servicios className="servicios" />
          </SecondGrupoServiciosWrapper>
        </>
      ) : (
        <>
          <div
            ref={serviciosRef}
            className="serviciosMobile  ml-0 sm:ml-[6020px]"
          >
            <Servicios forMobile={!isMobile} className="servicios" />
          </div>
          <div
            ref={serviciosRefInverse}
            className="serviciosMobile ml-0 sm:ml-[-6020px]"
          >
            <Servicios forMobile={!isMobile} className="servicios" />
          </div>
        </>
      )}
      {/* </BrowserView> */}

      {/* <MobileView>
        <div className="serviciosMobile">
          <Servicios forMobile={isMobile} className="servicios" />
        </div>
      </MobileView> */}
    </QuienesWraper>
  )
}

export default Quienes
