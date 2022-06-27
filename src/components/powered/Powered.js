import React from 'react';
import './powered.css';
import Binance from '../../assets/img/binance.svg';
import PoweredImg from '../../assets/img/phone.png';

const Powered = () => {
  return (
    <section className='powered'>
      <div className='powered-container'>
        <div className='wrapper'>
          <div className='powered-text-box'>
            <h2 className='powered-text-head'>Let your money do the work</h2>
            <p className='powered-text'>Trust Bundle leveraged tokens to save the day even <br />when there is a market dip.</p>
            <button className='powered-btn'>Best the dip</button>
            <div className='powered-by'>
              <span>Powered by</span>
              <img className='binance-img' src={ Binance } alt='Powered by Binance' />
            </div>
          </div>
          <div className='powered-img-box'>
            <img className='powered-img' src={ PoweredImg } alt='Get the best out of any dip' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Powered