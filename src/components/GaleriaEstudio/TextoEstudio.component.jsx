import React from 'react'
import './GaleriaStudio.styles.css'
import Arrow from '../../icons/icon_go.svg' 


const ArrowImage = () => (
    <img className='arrowChain' width='20' height='20' src={Arrow} alt='arrow'/>
)

function TextoEstudio() {
  return (
      <div className='equipoContainer'>
     <h1>Nuestro equipo</h1>
    <div className='infoEstudio'>
    <div className='infoOne'>
        <h1>
            Computer System:
        </h1>
        <p className='infoP'>
            Apple Mac Pro.
        </p>
    </div>
    <div className='infoTwo'>
        <h1> Software:</h1>
            <p className='infoP'>
                Pro Tools Ultimate 2021,
            </p>
            <p className='infoP'>
                Ableton Live 11,
            </p>
            <p className='infoP'>
                Dolby Atmos Mastering Suite
            </p>
            <p className='infoP'>
                and Dolby Audio Bridge.
            </p>
    </div>
    <div className='infoThree'>

        <h1>
            Control Surface:</h1>
        <p className='infoP'>
            AVID PT Dock and 2 AVID S1s.
        </p>
        <p className='infoP'>
            That's 16 Faders connected with EUCON.
        </p>
    </div>
    <div className='infoFour'>

        <h1> Signal Chains:</h1>
        <p className='infoP'>
            DAW <ArrowImage/> Dolby Audio Bridge <ArrowImage/> Dolby Atmos Mastering Suite <ArrowImage/> AVID HD Native interface <ArrowImage/> Focusrite RED 16Line <ArrowImage/> Genelec monitors & LFE (sub).
        </p>

        <p className='infoP'>
            Audinate DANTE system <ArrowImage/> Cisco network switcher (PoE) <ArrowImage/> Focusrite AM2/X2P <ArrowImage/> headphones distribution (binaural & stereo)
        </p>

        {/* <p className='infoP'>
            DAW > Dolby Audio Bridge > Dolby Atmos Mastering Suite > AVID HD Native interface > Focusrite RED 16Line > Genelec monitors & LFE (sub).
        </p>

        <p className='infoP'>
            Audinate DANTE system > Cisco network switcher (PoE) > Focusrite AM2/X2P > headphones distribution (binaural & stereo)
        </p> */}


    </div>
    </div>
    </div>
  )
}

export default TextoEstudio