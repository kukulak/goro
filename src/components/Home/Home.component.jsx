/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react'
import React, { useEffect, useRef } from 'react'

import AppleMusicBtn from '../GlobalElements/AppleMusicBtn.component'
import Redes from '../GlobalElements/Redes.component'

import dolby from '../../icons/2020_dolbyatmos_horiz_white-200.png'
// import appleMusic from '../../icons/logo_appleMusic.svg'
import goroGoro from '../../icons/logo_goroGoro.svg'

import appleMusic from '../../icons/logo_appleMusic.svg'
import {
  HomeWrapper,
  LogoBackWrapper,
  LogoEsquinaWrapper,
  theme
} from './Home.styles.jsx'

// GSAP
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import '../../soundtest.styles.css'

window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}

const Home = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  // const [coordenates, setCoordenates] = useState(0)
  // const [sound, setSound] = useState({})
  // const [snd1, setsnd1] = useState(null)

  const loGoroRef = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const loGoroEsquinaRef = useRef()
  useEffect(() => {
    ScrollTrigger.matchMedia({
      '(min-width: 600px)': function () {
        gsap.to(loGoroEsquinaRef.current, {
          y: 150,
          opacity: 1,
          scrollTrigger: {
            trigger: loGoroEsquinaRef.current,
            start: '1000px 500px',
            end: '320 top',
            markers: false,
            scrub: 2,

            id: 'esquinado'
          }
        })
      }
    })
  })

  useEffect(() => {
    ScrollTrigger.matchMedia({
      '(min-width: 768px)': function () {
        gsap.to(loGoroRef.current, {
          y: -150,
          opacity: 0,
          scrollTrigger: {
            trigger: loGoroRef.current,
            start: 'bottom 500px',
            end: '320 top',
            markers: false,
            scrub: 2,
            id: 'esquinado'
          }
        })
      }
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <HomeWrapper
        css={theme => ({ background: theme.colors.transparent })}
        className="homeContainer"
      >
        {/* <Menu/> */}
        {/* <LogoWrapper
          className="logoWraper"
          ref={loGoroRef}
          src={goroGoro}
          alt="GoroGoro"
        /> */}
        <LogoBackWrapper ref={loGoroEsquinaRef}>
          <LogoEsquinaWrapper src={goroGoro} alt="GoroGoro" />
        </LogoBackWrapper>
        <Redes />
        <div className=" mb-6 self-end justify-self-end grid col-start-1 row-start-1 ">
          <AppleMusicBtn
            image={appleMusic}
            href="https://music.apple.com/mx/playlist/goro-goro-flow/pl.u-38oWX93IavNe8?l=en"
          />
          <AppleMusicBtn image={dolby} href="https://www.dolby.com/" />
          {/* <a
            className="grid content-end justify-items-end self-end pointer-events-auto cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.dolby.com/"
          >
            <img className="w-[90%] mr-[20px]" src={dolby} alt="Dolby Logo" />
          </a> */}
        </div>

        {/* <PlayListWraper className='ApplePlayList'> 
                        <IconsWrapper css={css`
                        animation: ${LogoSpin} 10s linear infinite;
                        
                        `} src={appleMusic} alt="appleMusic link" />
                    </PlayListWraper> */}
      </HomeWrapper>
    </ThemeProvider>
  )
}

export default Home
