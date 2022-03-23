import React from 'react'

import { 
        LogoWrapper,
        AppleMusicWraper,
        } from "./AppleMusicBtn.styles.jsx";


import appleMusic from '../../icons/logo_appleMusic.svg'

const AppleMusicBtn = (props) => {

    const manageClick = () => {
        console.log('applepressed', props.href)
    }

    return(
        // <button onClick={manegeClick}>
        //     <img src="" alt="" />
        // </button>
        <AppleMusicWraper onClick={manageClick} className='appleMusic'>
            <LogoWrapper src={appleMusic} alt="appleMusic link" />
        </AppleMusicWraper>
    )
}

export default AppleMusicBtn