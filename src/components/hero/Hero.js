import React from 'react';
import './hero.css';
import Cheers from '../../assets/img/hero-thumb.svg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-container'>
        <motion.div
          initial={{ x: '-250vw' }} 
          animate={{ x: 0 }} 
          transition={{ duration: 0.5 }}
          className='hero-text-box'>
          <h1 className='hero-heading'>Experience the social side of crypto</h1>
          <p className='hero-note'>Send, receive or request cash and other cryptocurrencies for free</p>
          <div className='hero-btn'>
            <button className='hero-btn-cta'>Create your account</button>
            <button className='hero-btn-outline'>Join our community</button>
          </div>
        </motion.div>
        <motion.div className='hero-img-box'
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
        >
          <img className='hero-img' src={ Cheers } alt='Cheers to Bundle Africa' />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero