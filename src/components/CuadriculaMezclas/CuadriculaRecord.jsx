import React, { useRef, useState } from 'react'

// import disco from '../../icons/disco.png'
// import portada from '../../img-momentos/goro-0002.png'

// GSAP
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

const Record = props => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  // const manageClick = open => {
  //   window.open(open, '_blank')
  //   console.log('clicked')
  // }

  const [blurunblur, setBlurunblur] = useState()

  const recordRef = useRef()
  const mezclaRef = useRef()
  // const infoRef = useRef()
  // const discoRef = useRef()

  const portadaBlur = {
    // transition: 'all 2s ease-in',
    transitionDuration: '1s',
    transitionTimingFunction: 'cubic-bezier(1, -0.45, 1, 0.87)',
    transitionProperty: 'all',
    transform: 'scale(1)'
  }
  const portadaUnBlur = {
    // transition: 'all 0.5s ease-out',
    transitionDuration: '0.5s',
    transitionTimingFunction: 'cubic-bezier(0, 1.42, 0.57, 1)',
    transitionProperty: 'all',
    transform: 'scale(1.1)'
  }

  return (
    <div
      className="fullDisc z-1  hover:z-10   transition-all duration-[200ms] hover:duration-500"
      ref={mezclaRef}
      onClick={props.link}
      data-cursor-color="#ba63cc"
      data-cursor-text={'Abrir'}
      data-cursor-size="80px"
      // data-cursor-magnetic
      // onClick={() => manageClick(props.link)}
    >
      <img
        alt={props.nombre}
        style={blurunblur}
        // hover:scale-125
        className={`${blurunblur} shadow-xl  hover:shadow-1xl transition-all imgRecord blur-none sm:blur-[0px] duration-[200ms] hover:blur-none`}
        src={props.portada}
        ref={recordRef}
        onMouseEnter={() => setBlurunblur(portadaUnBlur)}
        onMouseLeave={() => setBlurunblur(portadaBlur)}
      />
    </div>
  )
}

export default Record
