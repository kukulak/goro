import React, {useRef, useEffect} from 'react'
import { TitleWraper } from './Title.styles'
// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";




const Title = (props) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const titleRef = useRef()

    useEffect(() => {
        gsap.to(titleRef.current, {
            y: 120,
            scrollTrigger:{
                trigger: titleRef.current, 
                start: 'top bottom',
                end: 'bottom top',
                markers: false,
                id: 'title',
                scrub: 5,
                // pin: true
            }
        })
    }, [])

    return(
        <TitleWraper ref={titleRef}>
            {props.title}    
       </TitleWraper>
    )
}

export default Title