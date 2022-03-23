import React from 'react'

import {GaleriaWraper} from './Galeria.styles'

import ImagesGaleria from './ImagesGaleria.component'


import img001 from '../../img-momentos/goro-0001.png'
import img002 from '../../img-momentos/goro-0002.png'
import img003 from '../../img-momentos/goro-0003.png'
import img004 from '../../img-momentos/goro-0004.png'
import img005 from '../../img-momentos/goro-0005.png'
import img006 from '../../img-momentos/goro-0006.png'





const galeriaGoro = [
    {
        id: 'imgg000',
        name: 'Proyecto Mezcla Locuaz',
        project: 'Proyecto Mezcla Locuaz',
        description: 'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
        src: img001,
        link: 'take/me/to/apple',
        masFotos: 'linkMasFotos'
    },
    {
        id: 'imgg001',
        name: 'Proyecto Mezcla Locuaz',
        project: 'Proyecto Mezcla Locuaz',
        description: 'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
        src: img002,
        link: 'take/me/to/apple',
        masFotos: 'linkMasFotos'
    },
    {
        id: 'imgg002',
        name: 'Proyecto Mezcla Locuaz',
        project: 'Proyecto Mezcla Locuaz',
        description: 'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
        src: img003,
        link: 'take/me/to/apple',
        masFotos: 'linkMasFotos'
    },
    {
        id: 'imgg003',
        name: 'Proyecto Mezcla Locuaz',
        project: 'Proyecto Mezcla Locuaz',
        description: 'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
        src: img004,
        link: 'take/me/to/apple',
        masFotos: 'linkMasFotos'
    },
    {
        id: 'imgg004',
        name: 'Proyecto Mezcla Locuaz',
        project: 'Proyecto Mezcla Locuaz',
        description: 'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
        src: img005,
        link: 'take/me/to/apple',
        masFotos: 'linkMasFotos'
    },
    {
        id: 'imgg005',
        name: 'Proyecto Mezcla Locuaz',
        project: 'Proyecto Mezcla Locuaz',
        description: 'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
        src: img006,
        link: 'take/me/to/apple',
        masFotos: 'linkMasFotos'
    }
]

const Galeria = () => {
    return(
    <GaleriaWraper>
        {galeriaGoro.map((img)=>
            <ImagesGaleria key={img.id} name={img.name} project={img.project} description={img.description} masFotos={img.masFotos} src={img.src} link={img.link}></ImagesGaleria>
        )}
    </GaleriaWraper>
    )
}

export default Galeria