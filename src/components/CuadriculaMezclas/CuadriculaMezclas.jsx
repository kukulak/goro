import React, { useState } from 'react'
import CuadriculaRecord from './CuadriculaRecord'
import Modal from 'react-modal'
import useScrollBlock from '../../hooks/useScrollBlock'

import { DataPortadas } from './DataPortadas'

import Title from '../GlobalElements/Title.component'
import olgaPal from '../../discos/olga1000x1000bb-60.jpeg'
import olgaNominada from '../../discos/olga-nominada.png'
import mujerEsperanza from '../../discos/mujerEsperanza1000x1000bb.webp'
import mxf from '../../discos/mxfBig.jpeg'
import muva from '../../discos/muva.jpg'
import chimalaFeliz from '../../discos/chimbalaFeliz.png'
import zemmoaSigueme from '../../discos/zemmoaSigueme.png'
import tydDerretida from '../../discos/thayanafriaDerretida.png'
import valentinaIThink from '../../discos/valentinaMoretti-iThinkOfYou.png'
import valentinaPienso from '../../discos/valentinaMoretti-tePienso.png'
import mariachiQueSea from '../../discos/mariachi-queSea.png'
import zemmoaCorazon from '../../discos/zemmoa-corazon.png'
import remikGonzalezUnBaiza from '../../discos/RemikGonzalez-UnBaiza.png'
import grtschPokito from '../../discos/grtsch-pokito.png'
import granSurNoche from '../../discos/granSur-noche.png'
import cartelMarihuano from '../../discos/cartel-marihuano.png'
import brianVolante from '../../discos/brian-volante.png'
import chptr from '../../discos/IMG_0214.jpg'
import espacio from '../../discos/IMG_0215.jpg'

import despiertas from '../../discos/IMG_9512.jpg'
import majin from '../../discos/IMG_9513.jpg'
import sacaeltoque from '../../discos/IMG_9514.jpg'
import ocho from '../../discos/IMG_9515.jpg'
import hojadete from '../../discos/IMG_9516.jpg'
import holidays from '../../discos/IMG_9517.jpg'
import notenia from '../../discos/IMG_9518.jpg'
import quisiera from '../../discos/IMG_9519.jpg'
import besar from '../../discos/IMG_9520.jpg'
import psycho from '../../discos/IMG_9521.jpg'
import polvo from '../../discos/IMG_9522.jpg'

import enLasLucesDeLaTarde from '../../discos/enLasLucesDeLaTarde.jpeg'
import teMerecesUnAmor from '../../discos/teMerecesUnAmor.jpeg'
import laCasitaDeLaSelva from '../../discos/laCasitaDeLaSelva.jpeg'
// import besar from '../../discos/Besar.jpeg'
import teExtrano from '../../discos/teExtrano.jpeg'

import '../Mezclas/Mezclas.styles.css'

const mezclasApi = [
  {
    single: 'En Las Luces De La Tarde',
    nombre: '',
    artista: 'Vivir Quintana',
    link: 'https://music.apple.com/mx/album/en-las-luces-de-la-tarde-single/1669557850',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'Universal Music Group México, S.A. de C.V.',
    id: 'record0028',
    portada: enLasLucesDeLaTarde
  },
  {
    single: 'Te Mereces Un Amor',
    nombre: '',
    artista: 'Vivir Quintana',
    link: 'https://music.apple.com/mx/album/te-mereces-un-amor-single/1672150258',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'Universal Music Group México, S.A. de C.V.',
    id: 'record0029',
    portada: teMerecesUnAmor
  },
  {
    single: 'La Casita De La Selva',
    nombre: '',
    artista: 'Vivir Quintana',
    link: 'https://music.apple.com/mx/album/la-casita-de-la-selva-single/1676373549',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'Universal Music Group México, S.A. de C.V.',
    id: 'record0030',
    portada: laCasitaDeLaSelva
  },
  {
    single: 'Besar',
    nombre: '',
    artista: 'Vivir Quintana',
    link: 'https://music.apple.com/mx/album/besar-single/1684870891',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'Universal Music Group México, S.A. de C.V.',
    id: 'record0031',
    portada: besar
  },
  {
    single: 'Te Extraño',
    nombre: '',
    artista: 'Gran Sur & Natalia Jiménez',
    link: 'https://music.apple.com/mx/album/te-extra%C3%B1o-single/1666644242',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'Bunker Producciones, S.A. de C.V.',
    id: 'record0031',
    portada: teExtrano
  },
  {
    single: 'Los del Espacio',
    nombre: '',
    artista: 'Los del Espacio',
    link: 'https://music.apple.com/mx/album/los-del-espacio/1687418530?i=1687418898',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'Warner Music',
    id: 'record0026',
    portada: espacio
  },
  {
    single: 'POLVO (feat. Denise Gutiérrez)',
    nombre: '',
    artista: 'GRTSCH',
    link: 'https://music.apple.com/mx/album/polvo-feat-denise-gutiérrez/1681129062?i=1681129280',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: '',
    id: 'record0025',
    portada: polvo
  },

  // {
  //   single: 'Besar',
  //   nombre: '',
  //   artista: 'Vivir Quintana',
  //   link: 'https://music.apple.com/mx/album/besar/1684870891?i=1684870895',
  //   plataforma: 'AppleMusic',
  //   logos: ['dolby'],
  //   soundtech: 'Universal Music Group México, S.A. de C.V.',
  //   id: 'record0023',
  //   portada: besar
  // },
  {
    single: 'Quisiera Retroceder',
    nombre: 'Remik Gonzalez',
    artista: 'Remik Gonzalez & Homer el Mero Mero',
    link: 'https://music.apple.com/mx/album/quisiera-retroceder/1644428554?i=1644428555',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: '',
    id: 'record0022',
    portada: quisiera
  },
  {
    single: 'No Tenía Nada (feat. Kodigo)',
    nombre: 'Remik Gonzalez',
    artista: 'Remik Gonzalez',
    link: 'https://music.apple.com/mx/album/no-ten%C3%ADa-nada-feat-kodigo-single/1666646575',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: '',
    id: 'record0021',
    portada: notenia
  },
  {
    single: '',
    nombre: 'Holidays',
    artista: 'Kalimba & Fela Dominguez',
    link: 'https://music.apple.com/mx/album/holidays/1654996117',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'Universal Music Group México, S.A. de C.V. ',
    id: 'record0020',
    portada: holidays
  },
  {
    single: 'Hojadeté',
    nombre: 'GRTSCH',
    artista: 'GRTSCH',
    link: 'https://music.apple.com/mx/album/hojadeté/1656779699?i=1656779702',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: '',
    id: 'record0019',
    portada: hojadete
  },
  {
    single: 'Psychob!Tch',
    nombre: '',
    artista: 'RAPHAËLLA',
    link: 'https://music.apple.com/mx/album/psychob-tch/1681117516?i=1681117521',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'GOROGORO IL',
    id: 'record0024',
    portada: psycho
  },
  {
    single: '',
    nombre: 'Ocho ',
    artista: 'DLD',
    link: 'https://music.apple.com/mx/album/ocho/1669331561',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'Sony Music Entertaiment México, S.A. de C.V. ',
    id: 'record0018',
    portada: ocho
  },
  {
    single: 'Saca el toke',
    // nombre: 'Masare Records ',
    artista: 'Chikis RA, Ali Masare & Mao Skaay',
    link: 'https://music.apple.com/mx/album/saca-el-toke/1651006771?i=1651006772',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'Masare Records',
    id: 'record0017',
    portada: sacaeltoque
  },

  {
    single: 'Despiertas',
    nombre: '',
    artista: 'Ms. Ambar, Delfina Dib & Masta Quba',
    link: 'https://music.apple.com/mx/album/despiertas/1668848909?i=1668848911',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'ONErpm',
    id: 'record0015',
    portada: despiertas
  },
  {
    single: 'El Jala Jala',
    nombre: "Pal' Combo Es Lo Que Hay",
    artista: 'Olga Tañón',
    premio: 'Latin Grammy Nominee(2022), Best Merengue/Bachata Album',
    link: 'https://music.apple.com/mx/album/el-jala-jala/1593462122?i=1593462123',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'ONErpm',
    id: 'record001',
    portada: olgaNominada
  },
  {
    nombre: 'FELIZ',
    artista: 'Chimbala',
    link: 'https://music.apple.com/mx/album/feliz/1624536261?i=1624536262',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'ONErpm',
    id: 'record002',
    portada: chimalaFeliz
  },
  {
    single: 'Sígueme ',
    nombre: '',
    artista: 'Zemmoa',
    link: 'https://music.apple.com/mx/album/s%C3%ADgueme/1629523438?i=1629523749',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'Alafonte',
    id: 'record003',
    portada: zemmoaSigueme
  },
  {
    single: 'Querido Corazón ',
    nombre: '',
    artista: 'Zemmoa',
    link: 'https://music.apple.com/mx/album/querido-coraz%C3%B3n-single/1623445603',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'Alafonte',
    id: 'record004',
    portada: zemmoaCorazon
  },

  {
    single: 'Fría y Derretida',
    nombre: '',
    artista: 'Tayhana',
    link: 'https://music.apple.com/mx/album/fr%C3%ADa-y-derretida/1630415786?i=1630415788',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'N.A.A.F.I',
    id: 'record005',
    portada: tydDerretida
  },
  {
    single: 'La Noche Es Cabrona ',
    nombre: 'El Otro Lado',
    artista: 'Gran Sur',
    mezcla: '',
    link: 'https://music.apple.com/mx/album/la-noche-es-cabrona/1639148139?i=1639148145',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'Alafonte',
    id: 'record006',
    portada: granSurNoche
  },
  {
    single: 'Majin',
    nombre: '',
    artista: 'RAPHAËLLA',
    link: 'https://music.apple.com/mx/album/majin/1676678428?i=1676678435',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'GOROGORO IL',
    id: 'record0016',
    portada: majin
  },
  {
    single: 'Rasgar',
    nombre: '',
    artista: 'MexFutura',
    produccion: 'Rasgar + Entre Restos',
    mezcla: 'Mezclas con sonido inmersivo (Ambisonic)',
    link: 'https://youtu.be/73Ic501fa6A',
    plataforma: 'YouTube',
    logos: ['dear'],
    soundtech: true,
    id: 'record007',
    portada: mxf
  },
  {
    single: '',
    nombre: 'O Fortuna',
    artista: 'Muva',
    mezcla: 'Mezclas con sonido inmersivo (Ambisonic)',
    link: 'https://youtu.be/9joBQj2BSGg',
    plataforma: 'YouTube',
    logos: ['dear'],
    soundtech: true,
    id: 'record008',
    portada: muva
  },

  {
    single: '',
    nombre: 'Mujer Esperanza',
    artista: 'Luz María Carriquiry',
    link: 'https://music.apple.com/us/album/_/1592051666?app=music&at=1000lHKX&ct=linktree_http&i=1592051669&itscg=30200&itsct=lt_m&ls=1&mt=1',
    plataforma: 'AppleMusic',
    logos: ['lossless', 'tidal', 'spotify', 'amazon'],
    soundtech: true,
    id: 'record009',
    portada: mujerEsperanza
  },

  {
    single: 'Yo Voy Al Volante ',
    nombre: '',
    artista: 'Brian Sandoval',
    link: 'https://music.apple.com/mx/album/yo-voy-al-volante/1641502741?i=1641502742',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'ONErpm',
    id: 'record0010',
    portada: brianVolante
  },
  {
    single: '',
    nombre: 'Viejo Marihuano',
    artista: 'Cartel de Santa',
    link: 'https://music.apple.com/mx/album/viejo-marihuano/1541937039',
    plataforma: 'AppleMusic',
    logos: [],
    soundtech: 'Sony Music',
    id: 'record0011',
    portada: cartelMarihuano
  },
  {
    single: '',
    nombre: 'Un Baiza',
    artista: 'Remik González',
    link: 'https://music.apple.com/mx/album/un-baiza/1642593042',
    plataforma: 'AppleMusic',
    logos: [],
    soundtech: 'ONErpm',
    id: 'record0012',
    portada: remikGonzalezUnBaiza
  },
  {
    single: 'Pokito',
    nombre: '',
    artista: 'Grtsch',
    link: 'https://music.apple.com/mx/album/pokito/1643985230?i=1643985243',
    plataforma: 'AppleMusic',
    logos: [],
    soundtech: 'Alafonte',
    id: 'record0013',
    portada: grtschPokito
  },
  {
    single: '3CHPTR SONG',
    nombre: '',
    artista: 'RAPHAËLA',
    link: 'https://music.apple.com/mx/album/3-chptr-song/1689457272?i=1689457274',
    plataforma: 'AppleMusic',
    logos: ['dolby'],
    soundtech: 'GOROGORO IL',
    id: 'record0027',
    portada: chptr
  },
  {
    single: 'Que Sea',
    nombre: '',
    artista: 'Mariachi Internacional CHG',
    link: 'https://music.apple.com/mx/album/que-sea-cover/1639381132?i=1639381133',
    plataforma: 'AppleMusic',
    logos: [],
    soundtech: 'ONErpm',
    id: 'record0014',
    portada: mariachiQueSea
  }
]

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#111111',
    border: 'solid 1px #333333'
  },
  overlay: {
    background: '#000000ee',
    zIndex: '5000'
  }
}

const CuadriculaMezclas = () => {
  let subtitle
  const [blockScroll, allowScroll] = useScrollBlock()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [indexRecord, setIndexRecord] = useState(0)

  function openModal(index) {
    setIsOpen(true)
    setIndexRecord(index)
    blockScroll()
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
    allowScroll()
  }
  // const mezclas = mezclasApi
  const mezclas = DataPortadas

  return (
    <div className="mezclas pt-24">
      <Title title={'Mezclas'} />

      <div className="recordsContainer bg-[#00000047] mt-40 sm:mt-20 p-[2%] gap-[2vw] pb[8%] grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
        {mezclas.map((mezcla, index) => (
          <CuadriculaRecord
            className="record"
            key={mezcla.id}
            portada={mezcla.portada}
            nombre={mezcla.nombre}
            artista={mezcla.artista}
            link={() => openModal(index)}
          />
        ))}

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          // style={{
          //   overlay: {
          //     backgroundColor: 'papayawhip'
          //   },
          //   content: {
          //     color: 'lightsteelblue'
          //   }
          // }}
          contentLabel="Example Modal"
        >
          {indexRecord >= 0 && (
            <div className="flex max-w-[80vw] sm:max-w-[70vw] items-center flex-col sm:flex-row ">
              {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}

              <img
                className="w-72 h-72"
                alt={mezclas[indexRecord].nombre}
                src={mezclas[indexRecord].portada}
              />
              <div className="w-[97%] flex gap-5 py-10 sm:pl-10 justify-between flex-col items-center sm:flex-row">
                <div className="w-[90%]">
                  <h5 className=" text-purple-100 text-2xl">
                    {' '}
                    {mezclas[indexRecord].artista}{' '}
                  </h5>
                  <div className=" text-purple-100 text-base">
                    {' '}
                    {mezclas[indexRecord].premio}{' '}
                  </div>
                  <div className=" text-purple-100 text-xl">
                    {' '}
                    {mezclas[indexRecord].nombre}{' '}
                  </div>
                  <div className=" text-purple-100 text-3xl">
                    {' '}
                    {mezclas[indexRecord].single}{' '}
                  </div>
                  <div className="logos flex flex-wrap flex-row gap-3 max-w-xs">
                    {mezclas[indexRecord].logos.map(logo => {
                      return (
                        <div key={logo} className={`logoMezclas ${logo}`} />
                      )
                    })}
                  </div>
                  <div className=" text-purple-100 text-xl">
                    {' '}
                    {mezclas[indexRecord].produccion}{' '}
                  </div>
                  <div className=" text-purple-100 text-base">
                    {' '}
                    {mezclas[indexRecord].soundtech}{' '}
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={mezclas[indexRecord].link}
                  >
                    <div className={mezclas[indexRecord].plataforma}></div>
                    {/* <div className="logos flex flex-wrap flex-row gap-7 max-w-xs">
                      {mezclas[indexRecord].logos.map(logo => {
                        return <div className={`logoMezclas ${logo}`} />
                      })}
                    </div> */}
                  </a>
                </div>
                <button
                  className=" text-purple-50 self-end  text-2xl md:text-base md:self-start md:mt-[-50px]"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>

              {/* <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form> */}
            </div>
          )}
        </Modal>
      </div>
    </div>
  )
}

export default CuadriculaMezclas
