import React, { useState } from 'react'
import CuadriculaRecord from './CuadriculaRecord'
import Modal from 'react-modal'
import useScrollBlock from '../../hooks/useScrollBlock'

import { DataPortadas } from './DataPortadas'
import { DataPortadasFijas } from './DataPortadasFijas'

import Title from '../GlobalElements/Title.component'

import '../Mezclas/Mezclas.styles.css'

//

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

  const [isFromFixedData, setIsFromFixedData] = useState(false)

  function openModal(index, fromFixedData = false) {
    setIsOpen(true)
    setIndexRecord(index)
    setIsFromFixedData(fromFixedData)
    blockScroll()
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00'
    console.log('subtitle no hace nada', subtitle)
  }

  function closeModal() {
    setIsOpen(false)
    allowScroll()
  }
  // const mezclas = mezclasApi
  const mezclas = DataPortadas

  function shuffleWithoutConsecutiveArtists(arr) {
    let shuffled = [...arr]

    // Función para mezclar el array
    shuffled.sort(() => Math.random() - 0.5)

    for (let i = 1; i < shuffled.length; i++) {
      if (shuffled[i].artista === shuffled[i - 1].artista) {
        // Si hay dos canciones del mismo artista consecutivas, intercambia con la siguiente
        if (i + 1 < shuffled.length) {
          ;[shuffled[i], shuffled[i + 1]] = [shuffled[i + 1], shuffled[i]]
        } else {
          // Si estás en el final del array, vuelve a mezclar todo
          shuffled = shuffleWithoutConsecutiveArtists(arr)
          break
        }
      }
    }

    return shuffled
  }

  const newOrder = shuffleWithoutConsecutiveArtists(mezclas)

  return (
    <div className="mezclas pt-24">
      <Title title={'Mezclas'} />

      <div className="recordsContainer bg-[#00000047] mt-40 sm:mt-20 p-[2%] gap-[2vw] pb[8%] grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
        {DataPortadasFijas.map((mezcla, index) => (
          <CuadriculaRecord
            className="record"
            key={mezcla.id}
            portada={mezcla.portada}
            nombre={mezcla.nombre}
            artista={mezcla.artista}
            link={() => openModal(index, true)}
          />
        ))}
        {newOrder.map((mezcla, index) => (
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
          contentLabel="Example Modal"
        >
          {indexRecord >= 0 && (
            <div className="flex max-w-[80vw] sm:max-w-[70vw] items-center flex-col sm:flex-row ">
              <img
                className="w-72 h-72"
                alt={newOrder[indexRecord].nombre}
                src={newOrder[indexRecord].portada}
              />
              <div className="w-[97%] flex gap-5 py-10 sm:pl-10 justify-between flex-col items-center sm:flex-row">
                <div className="w-[90%]">
                  <h5 className=" text-purple-100 text-2xl">
                    {' '}
                    {/* {newOrder[indexRecord].artista}{' '} */}
                    {isFromFixedData
                      ? DataPortadasFijas[indexRecord].artista
                      : newOrder[indexRecord].artista}
                  </h5>
                  <div className=" text-purple-100 text-base">
                    {' '}
                    {/* {newOrder[indexRecord].premio}{' '} */}
                    {isFromFixedData
                      ? DataPortadasFijas[indexRecord].premio
                      : newOrder[indexRecord].premio}
                  </div>
                  <div className=" text-purple-100 text-xl">
                    {' '}
                    {/* {newOrder[indexRecord].nombre}{' '} */}
                    {isFromFixedData
                      ? DataPortadasFijas[indexRecord].nombre
                      : newOrder[indexRecord].nombre}
                  </div>
                  <div className=" text-purple-100 text-3xl">
                    {' '}
                    {newOrder[indexRecord].single}{' '}
                    {isFromFixedData
                      ? DataPortadasFijas[indexRecord].single
                      : newOrder[indexRecord].single}
                  </div>
                  <div className=" text-purple-100 text-1xl mb-2 mt-4">
                    {' '}
                    {/* {newOrder[indexRecord].extra}{' '} */}
                    {isFromFixedData
                      ? DataPortadasFijas[indexRecord].extra
                      : newOrder[indexRecord].extra}
                  </div>
                  <div className="logos flex flex-wrap flex-row gap-3 max-w-xs">
                    {/* {newOrder[indexRecord].logos.map(logo => {
                      return (
                        <div key={logo} className={`logoMezclas ${logo}`} />
                      )
                    })} */}
                    {isFromFixedData
                      ? DataPortadasFijas[indexRecord].logos.map(logo => {
                          return (
                            <div key={logo} className={`logoMezclas ${logo}`} />
                          )
                        })
                      : newOrder[indexRecord].logos.map(logo => {
                          return (
                            <div key={logo} className={`logoMezclas ${logo}`} />
                          )
                        })}
                  </div>
                  <div className=" text-purple-100 text-xl">
                    {' '}
                    {/* {newOrder[indexRecord].produccion}{' '} */}
                    {isFromFixedData
                      ? DataPortadasFijas[indexRecord].produccion
                      : newOrder[indexRecord].produccion}
                  </div>
                  <div className=" text-purple-100 text-base">
                    {' '}
                    {/* {newOrder[indexRecord].soundtech}{' '} */}
                    {isFromFixedData
                      ? DataPortadasFijas[indexRecord].soundTech
                      : newOrder[indexRecord].soundTech}
                  </div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={newOrder[indexRecord].link}
                  >
                    <div className={newOrder[indexRecord].plataforma}></div>
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
