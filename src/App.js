import logo from './logo.svg';
import './App.css';
import SoundSystem from './soundtest'
import Home from './components/Home/Home.component'
import Quienes from './components/Quienes/Quienes.component'
import Mezclas from './components/Mezclas/Mezclas.component';
import Testimoniales from './components/Testimoniales/Testimoniales.component';
import Galeria from './components/Galeria/Galeria.component';
import GaleriaInstagram from './components/GaleriaInstagram/GaleriaInstagram.component';
import Contacto from './components/Contacto/Contacto.component';
import Footer from './components/Footer/Footer.component'
import Background from './components/Background/Background.component'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    <Home />
    <Quienes />
    <Mezclas />
    {/* <Testimoniales /> */}
    {/* <Galeria/> */}
    {/* <GaleriaInstagram/> */}
    {/* <Contacto/> */}
    {/* <SoundSystem /> */}
    {/* <Footer/> */}
    <Background />

    </div>
  );
}

export default App;
