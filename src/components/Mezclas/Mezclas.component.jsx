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
import metallica from '../../discos/metallica.png'
import blur from '../../discos/blur.png'
import pinkfloyd from '../../discos/pinkf.png'
import led from '../../discos/ledZeppelin.png'
import smashing from '../../discos/smash.png'
import nirvana from '../../discos/nirvana.png'



const mezclasApi = [
    {
        nombre: 'La pieza',
        artista: 'Los Razcalaska',
        link: 'apple/music/alla/vamos',
        id: 'record000',
        portada: metallica,
    },
    {
        nombre: 'El ritmo',
        artista: 'Razcalaska',
        link: 'apple/music/alla/vamos',
        id: 'record001',
        portada: blur,
    },
    {
        nombre: 'La canción',
        artista: 'Los Pergas',
        link: 'apple/music/alla/vamos',
        id: 'record002',
        portada: pinkfloyd
    },
    {
        nombre: 'La música',
        artista: 'Los SanosSonideros',
        link: 'apple/music/alla/vamos',
        id: 'record003',
        portada: led,
    },
    {
        nombre: 'El sonido',
        artista: 'Los Nebraska',
        link: 'apple/music/alla/vamos',
        id: 'record004',
        portada: smashing,
    },
    {
        nombre: 'La combinación',
        artista: 'Los Rapaleta',
        link: 'apple/music/alla/vamos',
        id: 'record005',
        portada: nirvana
    },
    {
        nombre: 'Las notas',
        artista: 'Los Sanso',
        link: 'apple/music/alla/vamos',
        id: 'record006',
        portada: led,
    }
]


const Mezclas = () => {
    return(
        <MezclasWraper className='mezclas'>
            <Title title={'Mezclas'} />

            <RecordWraper>
                {mezclasApi.map((mezcla)=>
                    <Record portada={mezcla.portada} key={mezcla.id} nombre={mezcla.nombre} artista={mezcla.artista} link={mezcla.link} />
                    )}
            </RecordWraper>

        </MezclasWraper>
    )
}


export default Mezclas