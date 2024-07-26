import React, { useRef, useEffect } from 'react'

import { GaleriaWraper, ImageWraper } from './GaleriaEstudio.styles'

import './GaleriaStudio.styles.css'

import img001 from '../../img-momentos/goro_web2.jpeg'
import img002 from '../../img-momentos/goro_web3.jpeg'
import img003 from '../../img-momentos/goro_web4.jpeg'
import img004 from '../../img-momentos/goro-0004.png'
import img005 from '../../img-momentos/goro-0005.png'
import img006 from '../../img-momentos/goro-0006.png'
import img007 from '../../img-momentos/920E86AE-771E-450E-BCB1-0740C492E3BD.jpg'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
// import { ScrollSmoother } from 'gsap/ScrollSmoother';

const galeriaGoro = [
  // {
  //     id: 'imgg000',
  //     name: 'Proyecto Mezcla Locuaz',
  //     project: 'Proyecto Mezcla Locuaz',
  //     description: 'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
  //     src: img001,
  //     link: 'take/me/to/apple',
  //     masFotos: 'linkMasFotos'
  // },
  {
    id: 'imgg001',
    name: 'Proyecto Mezcla Locuaz',
    project: 'Proyecto Mezcla Locuaz',
    description:
      'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
    src: img002,
    link: 'take/me/to/apple',
    masFotos: 'linkMasFotos'
  },
  {
    id: 'imgg002',
    name: 'Proyecto Mezcla Locuaz',
    project: 'Proyecto Mezcla Locuaz',
    description:
      'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
    src: img003,
    link: 'take/me/to/apple',
    masFotos: 'linkMasFotos'
  },
  {
    id: 'imgg003',
    name: 'Proyecto Mezcla Locuaz',
    project: 'Proyecto Mezcla Locuaz',
    description:
      'Este proyecto fue grandioso. Creatividad al máximo, los resultados de trabajar con profesionales de este calibre, ¡siempre son increibles!',
    src: img007,
    link: 'take/me/to/apple',
    masFotos: 'linkMasFotos'
  }
]

const ImagesGaleria = () => {
  const imgRef = useRef()
  const mascaraRef = useRef(true)
  return (
    <div>
      <GaleriaWraper className="dolbyMarcaras" ref={imgRef}>
        {galeriaGoro.map(img => (
          <ImageWraper
            key={img.id}
            name={img.name}
            project={img.project}
            description={img.description}
            masFotos={img.masFotos}
            src={img.src}
            link={img.link}
          ></ImageWraper>
        ))}
      </GaleriaWraper>
    </div>
  )
}

export default ImagesGaleria
