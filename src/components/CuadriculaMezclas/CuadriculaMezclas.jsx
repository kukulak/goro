import React, { useState } from 'react'
import CuadriculaRecord from './CuadriculaRecord'
import Modal from 'react-modal'
import useScrollBlock from '../../hooks/useScrollBlock'

import { DataPortadas } from './DataPortadas'

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
