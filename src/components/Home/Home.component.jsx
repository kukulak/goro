/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import React, {useEffect, useState, useRef} from 'react'

import Menu from './Menu.component'

import AppleMusicBtn from '../GlobalElements/AppleMusicBtn.component'
import Redes from '../GlobalElements/Redes.component'

import goroGoro from '../../icons/logo_goroGoro.svg'
import faceBook from '../../icons/icon_faceBook.svg'
import youTube from '../../icons/icon_youTube.svg'
import instagram from '../../icons/icon_instagram.svg'
import appleMusic from '../../icons/logo_appleMusic.svg'
import { HomeWrapper,
         LogoWrapper,
         LogoEsquinaWrapper,
         theme } from "./Home.styles.jsx";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import '../../soundtest.styles.css'

const Home = () => {
    
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    // const [coordenates, setCoordenates] = useState(0) 
    // const [sound, setSound] = useState({})
    // const [snd1, setsnd1] = useState(null)
    
    const loGoroRef = useRef()
   


    useEffect(()=>{
        gsap.to(
            loGoroRef.current, {
                y: -350,
                scale: 0.3,
                opacity: 0,
                // repeat: -1,
                // yoyo: true,
                scrollTrigger:{
                    trigger: loGoroRef.current,
                    start: 'bottom 500px',
                    end: 'bottom top',
                    markers: true,
                    scrub: 0.1,
                    id: 'loGoro',
                    // onUpdate: (self) => console.log('update', self.progress.toFixed(3)),
                    // onUpdate: (self) =>{
                    //     console.log('it is updated')
                    // },
                }
            }
        )

    }, [])

    const loGoroEsquinaRef = useRef()
    useEffect(()=> {
        gsap.to(
            loGoroEsquinaRef.current, {
            y: 150, 
            opacity: 1,
            scrollTrigger:{
                trigger: loGoroRef.current,
                start: 'bottom 500px',
                end: '320 top',
                markers: false,
                scrub: 2,
                id: 'esquinado',
            }
        })
    })
    



    return (
            <ThemeProvider theme={theme}>
                <HomeWrapper css={(theme) => ({background: theme.colors.transparent})} className='homeContainer'>
                    <Menu/>
                    <LogoWrapper ref={loGoroRef} src={goroGoro} alt="GoroGoro" />
                    <LogoEsquinaWrapper ref={loGoroEsquinaRef} src={goroGoro} alt="GoroGoro" />
                    <Redes/>
                    <AppleMusicBtn href='helloApple' />
                    {/* <PlayListWraper className='ApplePlayList'> 
                        <IconsWrapper css={css`
                        animation: ${LogoSpin} 10s linear infinite;
                        
                        `} src={appleMusic} alt="appleMusic link" />
                    </PlayListWraper> */}
                </HomeWrapper>
            </ThemeProvider>
    )

}


export default Home;