import './App.css'

import { Cursor } from 'react-creative-cursor'
import 'react-creative-cursor/dist/styles.css'

import Home from './components/Home/Home.component'
import Quienes from './components/Quienes/Quienes.component'
// import Mezclas from './components/Mezclas/Mezclas.component'
import CuadriculaMezclas from './components/CuadriculaMezclas/CuadriculaMezclas'

import GaleriaInstagram from './components/GaleriaInstagram/GaleriaInstagram.component'

import Footer from './components/Footer/Footer.component'
import Background from './components/Background/Background.component'
import VideoHome from './components/VideoHome/VideoHome.component'

import GaleriaCompleta from './components/GaleriaEstudio/GaleriaCompleta'

import GaleriaInstagramMobile from './components/GaleriaInstagram/GaleriaInstagramMobile.jsx'

import {
  BrowserView,
  MobileView
  // isBrowser,
  // isMobile
} from 'react-device-detect'

function App() {
  return (
    <div className="App">
      <BrowserView>
        {/* <h1>This is rendered only in browser</h1> */}
        <Cursor
          isGelly={true}
          cursorBackgrounColor={'#9b51a933'}
          cursorSize={15}
        />
      </BrowserView>
      {/* ok */}
      <Home />
      <VideoHome />
      <Quienes
        text={`Goro Goro Immersive Lab es un estudio boutique que está idealmente ubicado en el corazón de la Ciudad de México. Somos un laboratorio formado por ingenieros y artistas creativos dedicados a experiencias audiovisuales inmersivas que utilizan tecnología de punta.`}
      />

      <CuadriculaMezclas />

      <GaleriaCompleta />

      <BrowserView>
        <GaleriaInstagram />
      </BrowserView>
      <MobileView>
        <GaleriaInstagramMobile />
      </MobileView>

      <Footer />
      <Background />
    </div>
  )
}

export default App
