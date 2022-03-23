import React, {useRef, useEffect, useState} from 'react';
// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import goArrow from '../../icons/icon_go.svg'

import './InfoImg.styles.css'

import {
        GaleriaWraper,
        GrupoImagesWraper,
        BtnImageWraper,
        ImageWraper,
        InfoWraper,
        InfoTextWraper,
        InfoBtnFotosWraper,
        InfoImageWraper,
        InfoTextAndBtnWraper,
        InfoTituloWraper,
        ImgArrowGoWraper,
        BtnMirateWrapper,
        BtnCloseWraper
    } from './Galeria.styles'

import AppleMusicBtn from '../GlobalElements/AppleMusicBtn.component'
import BtnMasFotos from './BtnMasFotos.component';

const ImagesGaleria = (props) => {

    const [show, setShow] = useState('hideGaleria')

    const infoRef = useRef()
    const imgRef = useRef()

    const manageClick = () =>{
        console.log(show)
        setShow('showGaleria')
        disableScroll()
        gsap.fromTo(
            infoRef.current, {
                x: '0px',
                opacity: 0.2,
            }, {
                opacity: 1,
            }
            )
        }
    
    const manageClose = () =>{
        setShow('hideGaleria')
        gsap.fromTo(
            infoRef.current, {
                x: '0px',
                opacity: 1,
            }, {
                opacity: 0,
            }
            )
    }

    const disableScroll = () => {
        // Get the current page scroll position
        // const body = document.getElementsByTagName('body')
        document.body.classList.add('noScrollBar')
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        
        // if any scroll is attempted, set this to the previous value
        window.onscroll = () => {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }
        
    const enableScroll = () => {
        window.onscroll = () => {};
        document.body.classList.remove('noScrollBar')
        manageClose()
    }    

    const manageOpenApple = () => {
        window.open('url/apple', '_blank')
        console.log('apple')
    }    

    useEffect(()=>{
        // imgRef.addEventListener('onmouseover', manageHover)
        if(imgRef && imgRef.current){
            imgRef.current.addEventListener('click', manageClick);
        }

        return () => {
            imgRef.current.removeEventListener('click', manageClick)
        }
    })    
        
    return(
        <>
        <BtnImageWraper ref={imgRef} className='imagenGaleria'>
            <ImageWraper src={props.src} alt={props.name} />
        </BtnImageWraper>

        <InfoWraper ref={infoRef} className={show}> 
            <InfoImageWraper className='infoImage' src={props.src} alt={props.name} />

           <InfoTextAndBtnWraper className='infoFotos'>
            <BtnCloseWraper onClick={() => enableScroll()}>
                    X
            </BtnCloseWraper>
                <InfoTituloWraper className='infoText'>
                    {props.name}
                </InfoTituloWraper>

                <InfoTextWraper className='infoText'>
                    {props.description}
                </InfoTextWraper>

                <BtnMasFotos />

                <AppleMusicBtn href={props.link}/>

                {/* <InfoBtnFotosWraper onClick={()=>manageOpenApple(props.masFotos)} className='masFotos'>
                    
                <ImgArrowGoWraper src={goArrow} alt="go to apple" />
                </InfoBtnFotosWraper> */}
            
            </InfoTextAndBtnWraper> 

        </InfoWraper>
        </>
    )
}

export default ImagesGaleria