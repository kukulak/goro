import React from 'react'
import { FooterWraper } from './Footer.styles'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <FooterWraper>GORO GORO IL {year}</FooterWraper>
    </>
  )
}

export default Footer
