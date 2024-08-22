import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
    <p className='cta-text'>
        Have A Project In Mind ? <br className='sm:block hidden'/>
        Let's Build Something
    </p>
    <Link to="/Contact" className='btn'>
    Contact

    </Link>

    </section>
  )
}

export default CTA