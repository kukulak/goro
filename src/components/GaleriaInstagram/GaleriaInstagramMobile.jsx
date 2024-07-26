import React, { useRef } from 'react'
import {
  InstaImageWraper,
  BtnToInstagramWraper,
  FrameWraper,
  InstaContainerWraper,
  FullIntagramContainerWraper,
  InstaCardWraper
} from './GaleriaInstagram.styles'

import './GaleriaInstagram.styles.css'

import i_001 from '../../imgInstagram/i_001.png'
import i_002 from '../../imgInstagram/i_002.png'
import i_003 from '../../imgInstagram/i_003.png'
import i_004 from '../../imgInstagram/i_004.png'
import i_005 from '../../imgInstagram/i_005.png'
import i_006 from '../../imgInstagram/i_006.png'
import i_007 from '../../imgInstagram/i_007.png'
import i_008 from '../../imgInstagram/i_008.png'
import i_009 from '../../imgInstagram/i_009.png'
import i_0010 from '../../imgInstagram/i_0010.png'
import i_0011 from '../../imgInstagram/IMG_red.png'
import i_0012 from '../../imgInstagram/i_0012.png'
import i_0013 from '../../imgInstagram/IMG_0036.png'
import i_0014 from '../../imgInstagram/IMG_0375.png'
import i_0015 from '../../imgInstagram/IMG_1328.png'
import i_0016 from '../../imgInstagram/IMG_2168.png'
import i_0017 from '../../imgInstagram/IMG_2223.png'
import i_0018 from '../../imgInstagram/IMG_2452.png'
import i_0019 from '../../imgInstagram/IMG_2467.png'
import i_0020 from '../../imgInstagram/IMG_2903.png'
import i_0021 from '../../imgInstagram/IMG_3013.png'
import i_0022 from '../../imgInstagram/IMG_3176.png'
import i_0023 from '../../imgInstagram/IMG_3636.png'
import i_0024 from '../../imgInstagram/IMG_3712.png'
import i_0025 from '../../imgInstagram/IMG_4827.png'
import i_0026 from '../../imgInstagram/IMG_4901.png'
import i_0027 from '../../imgInstagram/IMG_kittyDog.png'
import i_0028 from '../../imgInstagram/IMG_riverPhonix.png'

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
    src: i_0012,
    link: 'link/to/inst'
  },
  {
    id: 'insta0012',
    src: i_0011,
    link: 'link/to/inst'
  },
  {
    id: 'insta0013',
    src: i_0013,
    link: 'link/to/inst'
  },
  {
    id: 'insta0014',
    src: i_0014,
    link: 'link/to/inst'
  },
  {
    id: 'insta0015',
    src: i_0015,
    link: 'link/to/inst'
  },
  {
    id: 'insta0016',
    src: i_0016,
    link: 'link/to/inst'
  },
  {
    id: 'insta0017',
    src: i_0017,
    link: 'link/to/inst'
  },
  {
    id: 'insta0018',
    src: i_0018,
    link: 'link/to/inst'
  },
  {
    id: 'insta0019',
    src: i_0019,
    link: 'link/to/inst'
  },
  {
    id: 'insta0020',
    src: i_0020,
    link: 'link/to/inst'
  },
  {
    id: 'insta0021',
    src: i_0021,
    link: 'link/to/inst'
  },
  {
    id: 'insta0022',
    src: i_0022,
    link: 'link/to/inst'
  },
  {
    id: 'insta0023',
    src: i_0023,
    link: 'link/to/inst'
  },
  {
    id: 'insta0024',
    src: i_0024,
    link: 'link/to/inst'
  },
  {
    id: 'insta0025',
    src: i_0025,
    link: 'link/to/inst'
  },
  {
    id: 'insta0026',
    src: i_0026,
    link: 'link/to/inst'
  },
  {
    id: 'insta0027',
    src: i_0027,
    link: 'link/to/inst'
  },
  {
    id: 'insta0028',
    src: i_0028,
    link: 'link/to/inst'
  }
]
const GaleriaInstagramMobile = () => {
  const getLengthRef = useRef()
  const colUnoRef = useRef()

  const colTresRef = useRef()

  return (
    <FullIntagramContainerWraper>
      <BtnToInstagramWraper
        data-cursor-color="#ba63cc"
        data-cursor-text={'Visítanos en Instagram'}
        data-cursor-size="100px"
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/gorogorolab_studio/"
      >
        @goro.goroestudio
      </BtnToInstagramWraper>

      <InstaContainerWraper className="instaContainer" ref={getLengthRef}>
        <FrameWraper className="colNone" ref={colUnoRef}>
          {imagInstagram.slice(10, 16).map(img => (
            <InstaCardWraper key={img.id}>
              <InstaImageWraper src={img.src} alt="Instagram Image" />
            </InstaCardWraper>
          ))}
        </FrameWraper>

        <FrameWraper className="colNone" ref={colTresRef}>
          {imagInstagram.slice(16, 22).map(img => (
            <InstaCardWraper key={img.id}>
              <InstaImageWraper src={img.src} alt="Instagram Image" />
            </InstaCardWraper>
          ))}
        </FrameWraper>
        <FrameWraper className="colNone" ref={colTresRef}>
          {imagInstagram.slice(22, 28).map(img => (
            <InstaCardWraper key={img.id}>
              <InstaImageWraper src={img.src} alt="Instagram Image" />
            </InstaCardWraper>
          ))}
        </FrameWraper>
      </InstaContainerWraper>
    </FullIntagramContainerWraper>
  )
}

export default GaleriaInstagramMobile
