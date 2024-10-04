import React, { useState } from 'react'
import CuadriculaRecord from './CuadriculaRecord'
import Modal from 'react-modal'
import useScrollBlock from '../../hooks/useScrollBlock'

import finalData from './DataPortadas'
import { DataPortadasFijas } from './DataPortadasFijas'

import Title from '../GlobalElements/Title.component'

import '../Mezclas/Mezclas.styles.css'

import AppleMusic from '../../icons/logo_appleMusic.svg'
import YouTube from '../../icons/icon_youTube.svg'

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
  // Función para hacer shuffle
  // const handleShuffle = () => {
  //   setShuffledData(shuffleWithoutConsecutiveArtists(DataPortadas));
  // };

  const [blockScroll, allowScroll] = useScrollBlock()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null) // Estado para la portada seleccionada

  // Abre el modal con la portada seleccionada
  function openModal(mezcla) {
    setIsOpen(true)
    setSelectedRecord(mezcla) // Aseguramos que solo se guarde la información de una portada
    blockScroll()
  }

  // Cierra el modal y limpia el estado seleccionado
  function closeModal() {
    setIsOpen(false)
    setSelectedRecord(null) // Limpiamos el estado cuando se cierra el modal
    allowScroll()
  }

  return (
    <div className="mezclas pt-24">
      <Title title={'Mezclas'} />

      <div className="recordsContainer bg-[#00000047] mt-40 sm:mt-20 p-[2%] gap-[2vw] pb[8%] grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
        {/* Renderizamos las portadas fijas */}
        {DataPortadasFijas.map(mezcla => (
          <CuadriculaRecord
            className="record"
            key={mezcla.id}
            portada={mezcla.portada}
            nombre={mezcla.nombre}
            artista={mezcla.artista}
            link={() => openModal(mezcla)} // Pasamos la portada completa al modal
          />
        ))}

        {/* Renderizamos las portadas mezcladas una vez */}
        {finalData.map(mezcla => (
          <CuadriculaRecord
            className="record"
            key={mezcla.id}
            portada={mezcla.portada}
            nombre={mezcla.nombre}
            artista={mezcla.artista}
            link={() => openModal(mezcla)} // También pasamos la mezcla completa
          />
        ))}

        {/* {DataPortadas.map(mezcla => (
          <CuadriculaRecord
            className="record"
            key={mezcla.id}
            portada={mezcla.portada}
            nombre={mezcla.nombre}
            artista={mezcla.artista}
            link={() => openModal(mezcla)} // También pasamos la mezcla completa
          />
        ))} */}

        {/* Modal con la portada seleccionada */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal Mezcla"
        >
          {/* Aseguramos que solo mostramos una portada si está seleccionada */}
          {selectedRecord && (
            <div className="flex max-w-[80vw] sm:max-w-[70vw] items-center flex-col sm:flex-row ">
              <img
                className="w-72 h-72"
                alt={selectedRecord.nombre}
                src={selectedRecord.portada}
              />
              <div className="w-[97%] flex gap-5 py-10 sm:pl-10 justify-between flex-col items-center sm:flex-row">
                <div className="w-[90%]">
                  <h5 className=" text-purple-100 text-2xl">
                    {selectedRecord.artista}
                  </h5>
                  <div className=" text-purple-100 text-base">
                    {selectedRecord.premio}
                  </div>
                  <div className=" text-purple-100 text-xl">
                    {selectedRecord.nombre}
                  </div>
                  <div className=" text-purple-100 text-3xl">
                    {selectedRecord.single}
                  </div>
                  <div className=" text-purple-100 text-1xl mb-2 mt-4">
                    {selectedRecord.extra}
                  </div>
                  <div className="logos flex flex-wrap flex-row gap-3 max-w-xs">
                    {selectedRecord.logos.map(logo => {
                      return (
                        <div key={logo} className={`logoMezclas ${logo}`} />
                      )
                    })}
                  </div>
                  <div className=" text-purple-100 text-xl">
                    {selectedRecord.produccion}
                  </div>
                  <div className=" text-purple-100 text-base">
                    {selectedRecord.soundtech}
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={selectedRecord.link}
                  >
                    {/* <div className={selectedRecord.plataforma}></div> */}

                    {selectedRecord.plataforma === 'AppleMusic' ? (
                      <img
                        className=" mt-12 h-10"
                        src={AppleMusic}
                        alt="Link Apple Music"
                      />
                    ) : (
                      <img src={YouTube} alt="Link YouTube" />
                    )}
                  </a>
                </div>
                <button
                  className=" text-purple-50 self-end  text-2xl md:text-base md:self-start md:mt-[-50px]"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  )
}

export default CuadriculaMezclas
