import React, {useRef, useEffect, useState} from 'react'
import {
        InstaImageWraper,
        BtnToInstagramWraper,
        FrameWraper,
        InstaContainerWraper,
        FullIntagramContainerWraper,
        InstaCardWraper} from './GaleriaInstagram.styles'

import './GaleriaInstagram.styles.css'

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import i_001 from '../../imgInstagram/i_001.jpg'
import i_002 from '../../imgInstagram/i_002.jpg'
import i_003 from '../../imgInstagram/i_003.jpg'
import i_004 from '../../imgInstagram/i_004.jpg'
import i_005 from '../../imgInstagram/i_005.jpg'
import i_006 from '../../imgInstagram/i_006.jpg'
import i_007 from '../../imgInstagram/i_007.jpg'
import i_008 from '../../imgInstagram/i_008.jpg'
import i_009 from '../../imgInstagram/i_009.jpg'
import i_0010 from '../../imgInstagram/i_0010.jpg'
import i_0011 from '../../imgInstagram/i_0011.jpg'
import i_0012 from '../../imgInstagram/i_0012.jpg'
import i_0013 from '../../imgInstagram/i_0013.jpg'
import i_0014 from '../../imgInstagram/i_0014.jpg'
import i_0015 from '../../imgInstagram/i_0015.jpg'
import i_0016 from '../../imgInstagram/i_0016.jpg'


const imagInstagram = [
    {
        id: 'insta001',
        src: i_001,
        link: 'link/to/inst'
    },
    {
        id: 'insta002',
        src: i_002,
        link: 'link/to/inst'
    },
    {
        id: 'insta003',
        src: i_003,
        link: 'link/to/inst'
    },
    {
        id: 'insta004',
        src: i_004,
        link: 'link/to/inst'
    },
    {
        id: 'insta005',
        src: i_005,
        link: 'link/to/inst'
    },
    {
        id: 'insta006',
        src: i_006,
        link: 'link/to/inst'
    },
    {
        id: 'insta007',
        src: i_007,
        link: 'link/to/inst'
    },
    {
        id: 'insta008',
        src: i_008,
        link: 'link/to/inst'
    },
    {
        id: 'insta009',
        src: i_009,
        link: 'link/to/inst'
    },
    {
        id: 'insta0010',
        src: i_0010,
        link: 'link/to/inst'
    },
    {
        id: 'insta0011',
        src: i_0011,
        link: 'link/to/inst'
    },
    {
        id: 'insta0012',
        src: i_0012,
        link: 'link/to/inst'
    },
]
// const otroArray = []
// const arrayInsta = () =>{
    //     for(let i = 1; 4 >= i; i++){
        //         for(let j = 1; unArray.length >= j; j++){
            //             otroArray.push({j})
            //         }
            //     }
            //     console.log(otroArray)
            // }
            
            // arrayInsta()
            
const GaleriaInstagram = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
                
    // const unArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // const ColumnFirst = () => {
    //     for(let i = 0; unArray.length >= i; i++){
    //             return(    
    //             <InstaCardWraper key={imagInstagram[i].id}>
    //                 <BtnToInstagramWraper>
    //                     @goro.goroestudio{imagInstagram[i].id}
    //                 </BtnToInstagramWraper>   
    //                 <InstaImageWraper src={imagInstagram[i].id} alt="Instagram Image" />
    //             </InstaCardWraper>
    //         )
    //         }
        
    // }

    const getLengthRef = useRef()
    const colUnoRef = useRef()
    const colDosRef = useRef()
    const colTresRef = useRef()
    const colCuatroRef = useRef()
    
    // console.log('theLengthLength', getLengthRef.current)

    useEffect(()=>{

        gsap.to(getLengthRef.current,{
            rotation: 10,
            scrollTrigger:{
                trigger: getLengthRef.current,
                start: 'top bottom',
                end: 'bottom top',
                markers: false,
                id: 'colUno',
                scrub: 1,
            }
        })


        gsap.to(colUnoRef.current,{
            x: -1000,
            scrollTrigger:{
                trigger: colUnoRef.current,
                start: 'top bottom',
                end: 'bottom top',
                markers: false,
                id: 'colUno',
                scrub: 1,
            }
        })

        gsap.to(colDosRef.current,{
            x: 1000,
            scrollTrigger:{
                trigger: colDosRef.current,
                start: 'top 1000px',
                end: 'bottom top',
                markers: false,
                id: 'colDos',
                scrub: 1,
            }
        })

        gsap.to(colTresRef.current,{
            x: -1000,
            scrollTrigger:{
                trigger: colTresRef.current,
                start: 'top 1000px',
                end: 'bottom top',
                markers: false,
                id: 'colTres',
                scrub: 1,
            }
        })

        gsap.to(colCuatroRef.current,{
            x: 1000,
            scrollTrigger:{
                trigger: colCuatroRef.current,
                start: 'top 1000px',
                end: 'bottom top',
                markers: false,
                id: 'colCuatro',
                scrub: 1,
            }
        })


    })
   

    return(
        <FullIntagramContainerWraper>
            
        <InstaContainerWraper className='instaContainer' ref={getLengthRef}>
            <FrameWraper className='colNone' ref={colUnoRef}>           
                {imagInstagram.slice(0, 5).map((img) => 
                <InstaCardWraper key={img.id}>
                    <BtnToInstagramWraper>@goro.goroestudio</BtnToInstagramWraper>   
                    <InstaImageWraper src={img.src} alt="Instagram Image" />
                </InstaCardWraper>
                )}
            </FrameWraper>

            <FrameWraper className='colPar' ref={colDosRef}>        
                {imagInstagram.slice(0, 5).map((img) => 
                <InstaCardWraper key={img.id}>
                    <BtnToInstagramWraper>@goro.goroestudio</BtnToInstagramWraper>   
                    <InstaImageWraper src={img.src} alt="Instagram Image" />
                </InstaCardWraper>
                )}
            </FrameWraper>

            <FrameWraper className='colNone' ref={colTresRef}>        
                   {imagInstagram.slice(5, 10).map((img) => 
                <InstaCardWraper key={img.id}>
                    <BtnToInstagramWraper>@goro.goroestudio</BtnToInstagramWraper>   
                    <InstaImageWraper src={img.src} alt="Instagram Image" />
                </InstaCardWraper>
                )}
            </FrameWraper>

            <FrameWraper className='colPar' ref={colCuatroRef}>        
                   {imagInstagram.slice(5, 10).map((img) => 
                <InstaCardWraper key={img.id}>
                    <BtnToInstagramWraper>@goro.goroestudio</BtnToInstagramWraper>   
                    <InstaImageWraper src={img.src} alt="Instagram Image" />
                </InstaCardWraper>
                )}
            </FrameWraper>

         </InstaContainerWraper>

        </FullIntagramContainerWraper>
    )
}

export default GaleriaInstagram