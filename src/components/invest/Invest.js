import React from 'react';
import './invest.css';
import InvestImg from '../../assets/img/send-money.png';

const Invest = () => {
  return (
    <section className='invest'>
      <div className='wrapper'>
          <div className='invest-img-box'>
            <img className='invest-img' src={ InvestImg } alt='Get the best out by taking a loan' />
          </div>
          <div className='invest-text-box'>
            <h2 className='invest-text-head'>Send crypto with just a username</h2>
            <p className='invest-text'>Transfer crypto to friends using just their Bundle ID. It’s that easy and it's free!</p>
            <button className='invest-btn'>Send crypto for free</button>
          </div>
        </div>
    </section>
  )
}

export default Invest;