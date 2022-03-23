import React, {useEffect, useState, useRef} from 'react'
import * as Tone from 'tone'
import faceBook from './icons/icon_faceBook.svg'
import youTube from './icons/icon_youTube.svg'
import instagram from './icons/icon_instagram.svg'
import appleMusic from './icons/logo_appleMusic.svg'
import goroGoro from './icons/logo_goroGoro.svg'


// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import song from '../src/01.mp3'
import './soundtest.styles.css'

const theAudio1 = new Tone.Player(song).toDestination()


// const sampler = new Tone.Sampler({
    // 	"C3" : "path/to/C3.mp3",
    // 	"D#3" : "path/to/Dsharp3.mp3",
    // 	"F#3" : "path/to/Fsharp3.mp3",
    // 	"A3" : "path/to/A3.mp3",
    // }, function(){
        // 	//sampler will repitch the closest sample
        // 	sampler.triggerAttack("D3")
        // })
const SoundSystem = () => {
    
    const [coordenates, setCoordenates] = useState(0) 
    const [sound, setSound] = useState({})
    const [snd1, setsnd1] = useState(song)
    
    const anim1Ref = useRef()
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


    // const playerRef = useRef(new Tone.Player(snd1).toDestination())


    const handleClick = () => {
        // console.log('clicked') 
        // const osc = new Tone.Player(snd1).toDestination();
        // playerRef.current(osc)
        // playerRef.autostart = true;
        Tone.start()
        // theAudio1.autostart = true;
        Tone.loaded().then(() => {
            theAudio1.start();
            theAudio1.loop = true
            theAudio1.volume.rampTo(-20, 20)
            // theAudio1.volume.value = -40
            theAudio1.volume.value = -40
        });
        // console.log('fromClick', theAudio1, theAudio1.volume.value)
        }

    // const handleScroll = () => {}

    useEffect(()=>{
        // ScrollTrigger.create({
        //     trigger: anim1Ref,
        //     start: 'top center',
        //     end: 'top 100px',
        //     onEnter: () => console.log('enter'),
        //     onLeave: () => console.log('enter'),
        //     markers: true
        // })

        gsap.to(
            anim1Ref.current, {
                x: 300,
                // repeat: -1,
                // yoyo: true,
                scrollTrigger:{
                    trigger: anim1Ref.current,
                    start: 'top bottom',
                    end: 'top top',
                    markers: false,
                    scrub: 1,
                    id: 'uno',
                    // onUpdate: (self) => console.log('update', self.progress.toFixed(3)),
                    onUpdate: (self) =>{
                        theAudio1.volume.value = 39/-self.progress.toFixed(1)/4
                        // theAudio1.volume.value = -self.progress.toFixed(1)*40
                        // console.log('update', theAudio1.volume.value, 'and', self.progress.toFixed(1)*10)
                    },
                }
            }
        )

    }, [])
    


    
  useEffect(() => {
    // console.log("soundEffect")
    const totalHeight = document.body.clientHeight
    const handleWindowScroll = () => {
        setCoordenates(() => (Math.floor(window.scrollY*100/totalHeight))) 
        // theAudio1.volume.value = -coordenates
        
    }  

    // rampTo(120, 10)

    if(coordenates>=0){
      window.addEventListener('scroll', handleWindowScroll)
    }
    
    }, [coordenates])


    const backStyle = {
    backgroundColor: `#202228${coordenates}`
    }

    return (
        <div className='container'>
    
          <div  style={ backStyle } className='containerTitle'>
            <h1 className='title'>
            {-coordenates}
            <br />
            <button id='button' onClick={handleClick}> HEll</button>
            </h1>
          </div>
    
        
        {/* <section className='topLayer'>
            <div className='redes'>
                <img src={faceBook} alt="faceBook link" />
                <img src={instagram} alt="instagram link" />
                <img src={youTube} alt="youTube link" />
            </div>
            <div className='ApplePlayList'> 
                <img src={appleMusic} alt="appleMusic link" />
            </div>
        </section>     */}
{/* 
        <section className='home'>
          HOME
          <img src={goroGoro} alt="goroGoro link" />
          {coordenates}   
        </section> */}
    
        <section className='quienes'>
         <h1 ref={anim1Ref}>QUIENES</h1> 
          {coordenates}
        </section>
    
        <section className='mezclas'>
          MEZCLAS
          {coordenates}
        </section>
    
        <section className='fotos'>
          FOTOS
          {coordenates}
        </section>
    
        <section className='redesApi'>
          REDES
          {coordenates}
        </section>
        
        <section className='contacto'>
          CONTACTO
          {coordenates}
        </section>
    
        </div>
    )

}


export default SoundSystem;