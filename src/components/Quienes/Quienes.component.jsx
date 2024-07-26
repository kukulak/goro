import React, { useRef, useEffect, useState } from 'react'
import {
  QuienesWraper,
  TitleWraper,
  ParaghraphWraper,
  GrupoServiciosWrapper,
  SecondGrupoServiciosWrapper,
  TitleHomeWraper
} from './Quienes.styles'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect'

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

  // useEffect(() => {
  //   let horizontal = gsap.timeline()
  //   ScrollTrigger.matchMedia({
  //     '(min-width: 1400px)': function () {
  //       horizontal.to(serviciosRef.current, {
  //         x: gsap.utils.unitize(x => parseFloat(x) % 500),
  //         // x: '-=6350',
  //         // yoyo: true,
  //         ease: 'none',
  //         duration: 50,
  //         repeat: -1
  //       })
  //     },
  //     '(min-width: 769px)': function () {
  //       horizontal.to(serviciosRef.current, {
  //         x: '-=5450',
  //         modifiers: {
  //           x: gsap.utils.unitize(x => parseFloat(x) % 5450)
  //         },
  //         // yoyo: true,
  //         ease: 'none',
  //         duration: 50,
  //         repeat: -1
  //       })
  //     },
  //     '(min-width: 500px)': function () {
  //       horizontal.to(serviciosRef.current, {
  //         // x: '-=450',
  //         x: gsap.utils.unitize(x => parseFloat(x) % 500),

  //         yoyo: true,
  //         ease: 'none',
  //         duration: 50,
  //         repeat: -1
  //       })
  //     }
  //   })
  // })

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
            className="serviciosContainer"
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
