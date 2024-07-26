import React, { useEffect, useRef, useState } from 'react'
import video from '../../video/LIVEINATMOS.mp4'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import ReactPlayer from 'react-player'

import {
  VideoContainerWraper,
  VideoWraper,
  LogoWrapper,
  SpaceCien
} from './VideoHome.styles'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect'

import goroGoro from '../../icons/logo_goroGoro.svg'

import './videoHome.styles.css'
// import { isMobile } from 'react-device-detect'

const VideoHome = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const [mute, setMute] = useState(true)
  const videoRef = useRef()
  const videoRefs = useRef()
  const muteRef = useRef()
  const alphaRef = useRef()

  const [mensajeCursor, setMensajeCursor] = useState('unmute/mute')
  const [escala, setEscala] = useState('scale(3)')
  const [opacity, setOpacity] = useState('opacity(20%)')
  const [mobileMute, setMobileMute] = useState(true)

  const loGoroRef = useRef()
  const [undisplay, setUndisplay] = useState('320px')

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // '(min-width: 768px)': function () {
      '(min-width: 280px)': function () {
        gsap.to(loGoroRef.current, {
          //   y: -350,

          scale: 5,
          opacity: 0,
          scrollTrigger: mute && {
            trigger: loGoroRef.current,
            start: isMobile ? '590 60%' : 'bottom center',
            end: isMobile ? '720 300' : '320 100',
            scrub: 2,
            pin: true,
            // markers: true,
            pinSpacing: false,
            id: 'lo-BIg'
          }
        })
      }

      //   '(min-width: 320px)': function () {
      //     gsap.to(loGoroRef.current, {
      //       scale: 3,
      //       opacity: 0,
      //       overflow: 'hidden',
      //       scrollTrigger: {
      //         trigger: loGoroRef.current,
      //         // pin: true,
      //         // pinSpacing: false,
      //         // anticipatePin: 1,
      //         start: '+=100 center',
      //         end: '320 top',
      //         scrub: 2,
      //         id: 'lo-BIg'
      //         // invalidateOnRefresh: true,
      //       }
      //     })
      //   }
    })

    // ScrollTrigger.matchMedia({
    //   '(min-width: 600px) and (orientation: portrait)': function () {
    //     gsap.to(loGoroRef.current, {
    //       y: -350,
    //       scale: 0.3,
    //       opacity: 0,
    //       scrollTrigger: {
    //         trigger: loGoroRef.current,
    //         start: 'bottom 500px',
    //         end: 'bottom top',
    //         markers: false,
    //         // scrub: 0.1,
    //         id: 'loGoro',
    //         pin: true
    //       }
    //     })
    //   }
    // })
  }, [])

  useEffect(() => {
    !isMobile && (videoRef.current.style.transform = 'scale(3)')

    const handleUnmute = event => {
      if (videoRef.current.muted === true) {
        setMute(false)
        videoRef.current.style.webkitFilter = 'opacity(100%)'
        videoRef.current.style.transform = 'scale(1)'
        // setMensajeCursor('Click para quitar sonido')
        setMensajeCursor('Mute')
      } else {
        videoRef.current.style.webkitFilter = 'opacity(20%)'
        videoRef.current.style.transform = 'scale(3)'
        // setMensajeCursor('Click para verlo con sonido')
        setMensajeCursor('unMute')
        setMute(true)
      }

      // videoRef.current.play ===
      // console.log('mute')
    }

    let putTheMute = true
    const handleMobileUnmute = event => {
      if (putTheMute === true) {
        putTheMute = false
        setMobileMute(putTheMute)
        setOpacity('opacity(100%)')
        setEscala('scale(1)')
        setUndisplay('320px')
        setMensajeCursor('Mute')
        console.log('SUENA', mobileMute)
      } else {
        putTheMute = true
        console.log('YA NO SUENA')

        setOpacity('opacity(20%)')
        setEscala('scale(3)')
        setUndisplay('420px')

        // setMensajeCursor('Click para verlo con sonido')
        setMensajeCursor('unMute')
        setMobileMute(true)
      }

      // videoRef.current.play ===
      // console.log('mute')
    }

    isMobile && muteRef.current.addEventListener('click', handleMobileUnmute)
    !isMobile && muteRef.current.addEventListener('click', handleUnmute)

    return () => {
      muteRef.removeEventListener('click', handleUnmute())
    }
  }, [])

  // useEffect(() => {
  //   ScrollTrigger.matchMedia({
  //     '(min-width: 768px)': function () {
  //       gsap.to(alphaRef.current, {
  //         scale: 1,
  //         //   opacity: 100,
  //         scrollTrigger: {
  //           trigger: alphaRef.current,
  //           start: 'bottom center',
  //           end: '320 top',
  //           scrub: 2,
  //           id: 'lo-BIg'
  //         }
  //       })
  //     },

  //     '(min-width: 320px)': function () {
  //       gsap.to(videoRef.current, {
  //         overflow: 'hidden',
  //         scrollTrigger: {
  //           trigger: alphaRef.current,

  //           start: '+=100 center',
  //           end: '320 top',
  //           scrub: 2,
  //           id: 'lo-BIg'
  //         }
  //       })
  //     }
  //   })

  //   ScrollTrigger.matchMedia({
  //     '(min-width: 600px) and (orientation: portrait)': function () {
  //       gsap.to(videoRef.current, {
  //         //   y: -350,
  //         scale: 3,
  //         //   opacity: 0,
  //         //   filter: 'opacity(10%)',
  //         scrollTrigger: {
  //           trigger: alphaRef.current,
  //           start: 'bottom 500px',
  //           end: 'bottom top',
  //           markers: false,
  //           scrub: 0.1,
  //           id: 'loGoro'
  //         }
  //       })
  //     }
  //   })
  // }, [])

  return (
    <>
      {/* <SpaceCien /> */}
      {!isMobile ? (
        <VideoContainerWraper
          data-cursor-color="#ba63cc"
          data-cursor-text={'unmute mute'}
          data-cursor-size="80px"
          className="videoContainer"
          // ref={alphaRef}
        >
          <div className="btnMute" ref={muteRef}></div>

          <LogoWrapper
            className="logoWraper"
            ref={loGoroRef}
            src={goroGoro}
            alt="GoroGoro"
          />

          <VideoWraper
            className="video"
            autoPlay
            loop
            muted={mute}
            controls={true}
            ref={videoRef}
            src={video}
          >
            {console.log('video', document.getElementsByClassName('video'))}
          </VideoWraper>
        </VideoContainerWraper>
      ) : (
        <VideoContainerWraper>
          <div className="absolute w-full text-base text-gray-500 top-5">
            {' '}
            {mute ? 'Toca para ver con sonido' : 'Toca para quitar sonido'}
          </div>
          <div className="btnMute" ref={muteRef}></div>

          {/* <LogoWrapper
              className="logoWraper top-[320px]"
              // ref={loGoroRef}
              src={goroGoro}
              alt="GoroGoro"
            /> */}

          <LogoWrapper
            //  top-[420px]
            className="logoWraper"
            style={{ top: undisplay }}
            ref={loGoroRef}
            src={goroGoro}
            alt="GoroGoro"
          />

          <ReactPlayer
            height="100vh"
            width="100%"
            loop={true}
            className="video"
            // style={`${opacity} ${escala} `}
            style={{ transform: escala, WebkitFilter: opacity }}
            ref={videoRefs}
            muted={mobileMute}
            playsinline={true}
            playing={true}
            url={video}
          />
        </VideoContainerWraper>
      )}
    </>
  )
}

export default VideoHome
