import React, { useRef } from 'react'
import {
  InstaImageWraper,
  BtnToInstagramWraper,
  FrameWraper,
  InstaContainerWraper,
  FullIntagramContainerWraper,
  InstaCardWraper,
  InstaBtnWraper
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
import i_0029 from '../../imgInstagram/i_017.png'
import i_0030 from '../../imgInstagram/i_018.png'
import i_0031 from '../../imgInstagram/i_019.png'
import i_0032 from '../../imgInstagram/i_020.png'
import i_0033 from '../../imgInstagram/i_021.png'
import i_0034 from '../../imgInstagram/i_022.png'
import i_0035 from '../../imgInstagram/i_023.png'
import i_0036 from '../../imgInstagram/i_024.png'
import i_0037 from '../../imgInstagram/i_025.png'
import i_0038 from '../../imgInstagram/i_026.png'
import i_0039 from '../../imgInstagram/i_027.png'
import i_0040 from '../../imgInstagram/i_028.png'
import i_0041 from '../../imgInstagram/i_029.png'
import i_0042 from '../../imgInstagram/i_030.png'
import i_0043 from '../../imgInstagram/i_031.png'
import i_0044 from '../../imgInstagram/i_032.png'
import i_0045 from '../../imgInstagram/i_033.png'
// import i_0046 from '../../imgInstagram/i_034.png'

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
    src: i_0013,
    link: 'link/to/inst'
  },
  {
    id: 'insta0013',
    src: i_0014,
    link: 'link/to/inst'
  },
  {
    id: 'insta0014',
    src: i_0015,
    link: 'link/to/inst'
  },
  {
    id: 'insta0015',
    src: i_0016,
    link: 'link/to/inst'
  },
  {
    id: 'insta0016',
    src: i_0017,
    link: 'link/to/inst'
  },
  {
    id: 'insta0017',
    src: i_0018,
    link: 'link/to/inst'
  },
  {
    id: 'insta0018',
    src: i_0019,
    link: 'link/to/inst'
  },
  {
    id: 'insta0019',
    src: i_0020,
    link: 'link/to/inst'
  },
  {
    id: 'insta0020',
    src: i_0021,
    link: 'link/to/inst'
  },
  {
    id: 'insta0021',
    src: i_0022,
    link: 'link/to/inst'
  },
  {
    id: 'insta0022',
    src: i_0023,
    link: 'link/to/inst'
  },
  {
    id: 'insta0023',
    src: i_0024,
    link: 'link/to/inst'
  },
  {
    id: 'insta0024',
    src: i_0025,
    link: 'link/to/inst'
  },
  {
    id: 'insta0025',
    src: i_0026,
    link: 'link/to/inst'
  },
  {
    id: 'insta0026',
    src: i_0027,
    link: 'link/to/inst'
  },
  {
    id: 'insta0027',
    src: i_0028,
    link: 'link/to/inst'
  },
  {
    id: 'insta0028',
    src: i_0029,
    link: 'link/to/inst'
  },
  {
    id: 'insta0029',
    src: i_0030,
    link: 'link/to/inst'
  },
  {
    id: 'insta0030',
    src: i_0031,
    link: 'link/to/inst'
  },
  {
    id: 'insta0031',
    src: i_0032,
    link: 'link/to/inst'
  },
  {
    id: 'insta0032',
    src: i_0033,
    link: 'link/to/inst'
  },
  {
    id: 'insta0033',
    src: i_0034,
    link: 'link/to/inst'
  },
  {
    id: 'insta0034',
    src: i_0035,
    link: 'link/to/inst'
  },
  {
    id: 'insta0035',
    src: i_0036,
    link: 'link/to/inst'
  },
  {
    id: 'insta0036',
    src: i_0037,
    link: 'link/to/inst'
  },
  {
    id: 'insta0037',
    src: i_0038,
    link: 'link/to/inst'
  },
  {
    id: 'insta0038',
    src: i_0039,
    link: 'link/to/inst'
  },
  {
    id: 'insta0039',
    src: i_0040,
    link: 'link/to/inst'
  },
  {
    id: 'insta0040',
    src: i_0041,
    link: 'link/to/inst'
  },
  {
    id: 'insta0041',
    src: i_0042,
    link: 'link/to/inst'
  },
  {
    id: 'insta0042',
    src: i_0043,
    link: 'link/to/inst'
  },
  {
    id: 'insta0043',
    src: i_0044,
    link: 'link/to/inst'
  },
  {
    id: 'insta0044',
    src: i_0045,
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
        href="https://www.instagram.com/gorogoroil?igsh=MWt0NGUxNWQ4dGFmcQ%3D%3D&utm_source=qr"
      >
        @goro.goroestudio
      </BtnToInstagramWraper>

      <InstaContainerWraper className="instaContainer" ref={getLengthRef}>
        <FrameWraper className="colNone" ref={colUnoRef}>
          {/* 28,34 */}
          {/* {imagInstagram.slice(28, 34).map(img => (
            <InstaCardWraper key={img.id}>
              <InstaImageWraper src={img.src} alt="Instagram Image" />
            </InstaCardWraper>
          ))} */}

          {imagInstagram.map(img => (
            <InstaBtnWraper
              data-cursor-color="#ba63cc"
              data-cursor-text={'Visítanos en Instagram'}
              data-cursor-size="100px"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/gorogoroil?igsh=MWt0NGUxNWQ4dGFmcQ%3D%3D&utm_source=qr"
              key={img.id}
            >
              <InstaImageWraper src={img.src} alt="Instagram Image" />
            </InstaBtnWraper>
          ))}
        </FrameWraper>

        {/* 34, 40 */}
        {/* <FrameWraper className="colNone" ref={colTresRef}>
          {imagInstagram.slice(34, 40).map(img => (
            <InstaCardWraper key={img.id}>
              <InstaImageWraper src={img.src} alt="Instagram Image" />
            </InstaCardWraper>
          ))}
        </FrameWraper> */}

        {/* 40, 46 */}
        {/* <FrameWraper className="colNone" ref={colTresRef}>
          {imagInstagram.slice(40, 46).map(img => (
            <InstaCardWraper key={img.id}>
              <InstaImageWraper src={img.src} alt="Instagram Image" />
            </InstaCardWraper>
          ))}
        </FrameWraper> */}
      </InstaContainerWraper>
    </FullIntagramContainerWraper>
  )
}

export default GaleriaInstagramMobile
