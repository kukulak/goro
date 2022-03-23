import React from 'react'
import {
        RedBtnWraper,
        IconsRedesWrapper,
        RedesWraper,       
        } from "./Redes.styles.jsx";
    

import faceBook from '../../icons/icon_faceBook.svg'
import youTube from '../../icons/icon_youTube.svg'
import instagram from '../../icons/icon_instagram.svg'

const redesPaths = [
    {
        name: faceBook,
        link: 'https://www.facebook.com/GoroGoroIL',
        id: 'fc'
    },
    {
        name: instagram,
        link: 'https://www.instagram.com/goro.goroestudio/',
        id: 'inta'
    },
    {
        name: youTube,
        link: 'youTube',
        id:  'yt'
    }
]

const AppleMusicBtn = () => {

    const manageClick = (link) => {
        window.open(link, "_blank",)
        console.log('pressed', link)
    }

    return(
        // <button onClick={manegeClick}>
        //     <img src="" alt="" />
        // </button>
         <RedesWraper className='redesAlongers'>

            {redesPaths.map((red) => 
                <RedBtnWraper key={red.id} onClick={() => manageClick(red.link)}>
                    <IconsRedesWrapper src={red.name} alt="faceBook link" />
                </RedBtnWraper>

            )}

         </RedesWraper>
    )
}

export default AppleMusicBtn