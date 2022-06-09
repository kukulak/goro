import React, {useEffect, useRef} from 'react'
import video from '../../video/LIVEINATMOS.mp4'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


import {VideoContainerWraper,
        VideoWraper,
        SpaceCien,       
} from './VideoHome.styles'

const VideoHome = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const videoRef = useRef()

    return(
        <>
        <SpaceCien />
        <VideoContainerWraper className='videoContainer' ref={videoRef}>
            <VideoWraper className='video' autoPlay muted controls='true' src={video}></VideoWraper>
        </VideoContainerWraper>
        </>
    )
}

export default VideoHome