import React from 'react';
import './connected.css';
import Laptop from '../../assets/img/laptop.png';

const Connected = () => {
  return (
    <section className='connected'>
      <div className='wrapper'>
        <div className='connected-text-box'>
          <p className='connected-text'>
            We built Bundle web so you can stay connected outside your phone.
          </p>
        </div>
        <div className='connected-img-box'>
          <img src={ Laptop } className='connected-img' alt='Dashboard Laptop' />
        </div>
      </div>
    </section>
  )
}

export default Connected;