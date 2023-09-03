import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/fonts/img/Sans titre-1.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1>Bienvenue</h1>
        <h4>Je suis</h4>
        <h1>ID DIAKIESE</h1>
        <h5 className="text-light">
          Devellopeur Full Stack
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header