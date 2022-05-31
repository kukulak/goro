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
import olga from '../../discos/olga1000x1000bb-60.jpeg'
import mujerEsperanza from '../../discos/mujerEsperanza1000x1000bb.webp'
import mxf from '../../discos/mxfBig.jpeg'
import muva from '../../discos/muva.jpg'
import smashing from '../../discos/smash.png'
import nirvana from '../../discos/nirvana.png'

import './Mezclas.styles.css'


const mezclasApi = [
    {
        nombre: "Tañón Pal' Combo Es Lo Que Hay",
        artista: 'Olga Tañon',
        link: 'https://music.apple.com/mx/album/el-jala-jala/1593462122?i=1593462123',
        plataforma: 'AppleMusic',
        id: 'record000',
        portada: olga,
    },
    {
        nombre: 'Mujer Esperanza',
        artista: 'Luz María Carriquiry',
        link: 'https://music.apple.com/us/album/_/1592051666?app=music&at=1000lHKX&ct=linktree_http&i=1592051669&itscg=30200&itsct=lt_m&ls=1&mt=1',
        plataforma: 'AppleMusic',
        id: 'record001',
        portada: mujerEsperanza,
    },
    {
        nombre: 'Rasgar',
        artista: 'MEXFUTURA',
        link: 'https://youtu.be/73Ic501fa6A',
        plataforma: 'YouTube',
        id: 'record002',
        portada: mxf
    },
    {
        nombre: 'O Fortuna',
        artista: 'Muva',
        link: 'https://youtu.be/9joBQj2BSGg',
        plataforma: 'YouTube',
        id: 'record003',
        portada: muva   ,
    }
]


const Mezclas = () => {
    return(
        <MezclasWraper className='mezclas'>
            <Title title={'Mezclas'} />

            <RecordWraper>
                {mezclasApi.map((mezcla)=>
                    <Record portada={mezcla.portada} key={mezcla.id} nombre={mezcla.nombre} artista={mezcla.artista} link={mezcla.link} plataforma={mezcla.plataforma} />
                    )}
            </RecordWraper>

        </MezclasWraper>
    )
}


export default Mezclas