import React, { useEffect, useState, useRef } from 'react'
import { css, ThemeProvider } from "@emotion/react";
import { MenuWrapper,
         BtnsWrapper,
         IconMenuWrapper,
         theme } from "./Home.styles.jsx";

import bocina from '../../icons/icon_bocina.svg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const anchors =
    [
        {
            name: 'Nosotros',
            link: 'goNosotros',
            id: 'menuBtn001'
        },
        {
            name: 'Mezclas',
            link: 'goMezclas',
            id: 'menuBtn002'
        },{
            name: 'Testimonios',
            link: 'goTestimonios',
            id: 'menuBtn003'
        },{
            name: 'Galería',
            link: 'goGaleria',
            id: 'menuBtn004'
        },{
            name: 'Contacto',
            link: 'goContacto',
            id: 'menuBtn005'
        }
    ]


    const handleScrollPause = () =>{
        let last_known_scroll_position = 0;
        let ticking = false;
        window.addEventListener('scroll', function(e) {
            last_known_scroll_position = window.scrollY;
          
            if (!ticking) {
              window.requestAnimationFrame(function() {
                // doSomething(last_known_scroll_position);
                console.log(last_known_scroll_position);

                ticking = false;
              });
          
              ticking = true;
            }
          });

    }







const Menu = () =>{

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const [firstScroll, setFirstScroll] = useState(0)
    const [secondScroll, setSecondScroll] = useState(0)
    
    const menuRef = useRef()
    const referentRef = useRef()


    const getScrollPosition = () =>{
        window.addEventListener('scroll', function(e) {
            console.log(window.scrollY)
          });
    }


    useEffect(()=>{
        const totalHeight = document.body.clientHeight
        gsap.from(
            menuRef.current, {
                x: 0,
                scrollTrigger:{
                    trigger: referentRef.current,
                    start: 'top 50px',
                    end: `${totalHeight} bottom`,
                    markers: false,
                    scrub: 1,
                    id: 'menu',
                    isScrolling: () => console.log('scrolling'),
                    onUpdate: () => { gsap.fromTo(menuRef.current, {x: 300, autoAlpha: 0}, {x: 0, autoAlpha: 0.8})}
                },
            }
            )  
    }, [firstScroll, secondScroll])


    return(
        <MenuWrapper ref={menuRef} className='menu'>
            
            {anchors.map(anchor => 
                <BtnsWrapper key={anchor.id} onClick={getScrollPosition}>
                    <IconMenuWrapper src={bocina} />
                    {anchor.name}
                </BtnsWrapper>
                )}
        </MenuWrapper>
    )
}

export default Menu