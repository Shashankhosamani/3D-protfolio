import React from 'react'
import { Link } from 'react-router-dom'
import {socialLinks } from '../constants';

const CTA = () => {
  return (
    <section className='cta'>
    <p className='cta-text'>
        Have A Project In Mind ? <br className='sm:block hidden'/>
        Let's Build Something
    </p>
      <div className=' mt-14 flex flex-wrap gap-2'>
            {socialLinks.map((socialLink, index) => (
              <div key={index} className='block-container w-20 h-20'>
                <div className='flex flex-col items-center justify-center' />
                <Link to={socialLink.link} className='flex justify-center items-center'>
                  <img
                    src={socialLink.iconUrl}
                    alt={socialLink.name}
                    className='w-[50%] h-[50%]'
                  />
                </Link>
              </div>
            ))}
          </div>
    
    <Link to="/Contact" className='btn'>
    Contact

    </Link>

    </section>
  )
}

export default CTA