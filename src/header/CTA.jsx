import React from 'react'
import CV from '../assets/Sufian-CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
    <a href='#contact' className='btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA