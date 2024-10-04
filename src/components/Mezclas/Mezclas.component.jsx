import React from 'react'
import Record from './Record.component'
import {
  MezclasWraper,
  RecordWraper,
  DiscWraper,
  LinkAppleWraper,
  TitleWraper,
  RecordNameWraper,
  ParaghraphWraper
} from './Mezclas.styles'

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

import './Mezclas.styles.css'

const mezclasApi = [
  {
    single: 'El Jala Jala (Dolby Atmos)',
    nombre: "Pal' Combo Es Lo Que Hay",
    artista:
      'Olga Tañón, Latin Grammy Nominee(2022), Best Merengue/Bachata Album',
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
    single: 'Sígueme (Dolby Atmos)',
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
    single: 'Querido Corazón (Dolby Atmos)',
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
    single: 'La Noche Es Cabrona (Dolby Atmos)',
    nombre: 'El Otro Lado',
    artista: 'Gran Sur',
    mezcla: '',
    link: 'https://music.apple.com/mx/album/la-noche-es-cabrona/1639148139?i=1639148145',
    plataforma: 'AppleMusic',
    logos: [],
    soundtech: 'Alafonte',
    id: 'record006',
    portada: granSurNoche
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
    single: 'Yo Voy Al Volante (Dolby Atmos Mix)',
    nombre: '',
    artista: 'Brian Sandoval',
    link: 'https://music.apple.com/mx/album/yo-voy-al-volante/1641502741?i=1641502742',
    plataforma: 'AppleMusic',
    logos: [],
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

// nombre: 'Te Pienso',
// artista: 'Valentina Moretti',
// mezcla: 'Mezclas con sonido inmersivo (Ambisonic)',
// link: 'https://open.spotify.com/track/17fOWxBhHXjEVIF9MXdVas?si=JyORmBd7TqGQChIx2w43LA&context=spotify%3Aalbum%3A4M7WA75hYkHh8YHE9D681Z',
// plataforma: 'Spotify',
// logos: ['apple', 'lossless', 'tidal', 'amazon'],
// id: 'record007',
// portada: valentinaPienso

//     nombre: 'I Think Of You',
//     artista: 'Valentina Moretti',
//     link: 'https://music.apple.com/mx/album/fr%C3%ADa-y-derretida/1630415786?i=1630415788',
//     plataforma: 'AppleMusic',
//     logos: ['dolby'],
//     id: 'record004',
//     portada: valentinaIThink

const Mezclas = () => {
  return (
    <MezclasWraper className="mezclas">
      <Title title={'Mezclas'} />

      <RecordWraper className="recordsContainer">
        {mezclasApi.map(mezcla => (
          <Record
            className="record"
            key={mezcla.id}
            single={mezcla.single}
            soundtech={mezcla.soundtech}
            produccion={mezcla.produccion}
            portada={mezcla.portada}
            nombre={mezcla.nombre}
            artista={mezcla.artista}
            link={mezcla.link}
            plataforma={mezcla.plataforma}
            logos={mezcla.logos}
            extra={mezcla.extra}
          />
        ))}
      </RecordWraper>
    </MezclasWraper>
  )
}

export default Mezclas
