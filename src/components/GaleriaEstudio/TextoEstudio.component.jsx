import React from 'react'
import './GaleriaStudio.styles.css'
import Arrow from '../../icons/icon_go.svg'

import logoSonos from '../../icons/icon_sonos.svg'

const ArrowImage = () => (
  <img className="arrowChain" width="20" height="20" src={Arrow} alt="arrow" />
)

function TextoEstudio() {
  return (
    <div className="equipoContainer">
      <h1 className=" leading-none">Dolby Atmos Stage</h1>
      <div className="infoEstudio">
        <div className="infoOne">
          <h1 className=" leading-none">Computer System:</h1>
          <p className="infoP">Apple Mac Pro.</p>
        </div>
        <div className="infoTwo">
          <h1 className=" leading-none"> Software:</h1>
          <p className="infoP">Pro Tools Ultimate,</p>
          <p className="infoP">Ableton Live 11,</p>
          <p className="infoP">Dolby Atmos Mastering Suite</p>
          <p className="infoP">and Dolby Audio Bridge.</p>
        </div>
        <div className="infoThree">
          <h1 className=" leading-none">Control Surface:</h1>
          <p className="infoP">AVID PT Dock and 2 AVID S1s.</p>
          <p className="infoP">That's 16 Faders connected with EUCON.</p>
        </div>
        <div className="infoFour">
          <h1 className=" leading-none"> Signal Chains:</h1>
          <p className="infoP">
            DAW <ArrowImage /> Dolby Audio Bridge <ArrowImage /> Dolby Atmos
            Mastering Suite <ArrowImage /> AVID HD Native interface{' '}
            <ArrowImage /> Focusrite RED 16Line <ArrowImage /> Genelec monitors
            & LFE (sub).
          </p>
          <p className="infoP">
            Audinate DANTE system <ArrowImage /> Cisco network switcher (PoE){' '}
            <ArrowImage /> Focusrite AM2/X2P <ArrowImage /> headphones
            distribution (binaural & stereo)
          </p>
          {/* <p className='infoP'>
            DAW > Dolby Audio Bridge > Dolby Atmos Mastering Suite > AVID HD Native interface > Focusrite RED 16Line > Genelec monitors & LFE (sub).
        </p>

        <p className='infoP'>
            Audinate DANTE system > Cisco network switcher (PoE) > Focusrite AM2/X2P > headphones distribution (binaural & stereo)
        </p> */}
          {/* <h1 className=" leading-none">
            THE SYSTEM SONOS DOLBY ATMOS <img alt="logoSonos" src={logoSonos} />
          </h1> */}
        </div>
        <h1 className=" leading-none">
          The System Sonos Dolby Atmos{' '}
          <img
            className=" sm:ml-9 w-56 mt-10"
            alt="logoSonos"
            src={logoSonos}
          />
        </h1>
        <h1 className=" leading-none sm:ml-9">Anthem AV</h1>
      </div>
    </div>
  )
}

export default TextoEstudio
