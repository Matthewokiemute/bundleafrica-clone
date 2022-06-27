import React from 'react';
import './process.css';
import SignUp from '../../assets/img/how-to-1.svg';
import Fund from '../../assets/img/how-to-2.svg';
import Buy from '../../assets/img/how-to-3.svg';
import { motion } from 'framer-motion';

const Process = () => {
  return (
    <section className='process'>
      <motion.div className='process-container'
        initial={{ y: '200vh'}}
        animate={{ y: 0 }}
        transition={{ type: 'spring' }}
      >
        <div className='process-box'>
          <div className='process-img-box'>
           <img className='process-img' src={ SignUp } alt='Sign Up' />
          </div>
          <div className='head'>
           <p className='process-head'>Sign Up</p>
          </div>
          <p className='process-description'>
            Create an account and verify your identity. 
            Starting your crypto journey is that easy. Let's go!! 💪🏾
          </p>
        </div>
        <div className='process-box'>
         <div className='process-img-box'>
          <img className='process-img' src={ Fund } alt='Fund' />
         </div>
         <div className='head'>
          <p className='process-head'>Fund</p>
         </div>
          <p className='process-description'>
            Deposit cash on the app through Cashlink our p2p partner, or transfer crypto from an external wallet. 🤑
          </p>
        </div>
        <div className='process-box'>
         <div className='process-img-box'>
          <img className='process-img' src={ Buy } alt='Buy' />
         </div>
         <div className='head'>
          <p className='process-head'>Buy</p>
         </div>
          <p className='process-description'>
            Choose from over 80+ cryptocurrencies. 
            Remember to do your own research before investing. 🚀
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Process