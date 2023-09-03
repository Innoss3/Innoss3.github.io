import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Telécharger CV</a>
        <a href="#contact" className='btn btn-primary'>Allons discutez</a>
    </div>
  )
}

export default CTA