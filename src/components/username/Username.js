import React from 'react';
import './username.css';
import Gift from '../../assets/img/gift.svg';
import ListIcon from '../../assets/icons/list-icon.svg';

const Username = () => {
  return (
    <section className='username'>
      <div className='wrapper'>
        <div className='username-box'>
          <span className='user-text-head'>The best way to </span>
          <span className='user-text-head'>invest your </span>
          <span className='user-text-head'>cryptocurrency</span>
          <p className='user-text-details'>Save and earn interest on your dollar <br />stable cryptocurrency with Bundle vault &mdash; <br />No risk involved</p>
          <button className='username-btn'>Best the dip</button>
        </div>
        <div className='gift-img-box'>
          <img className='gift-img' src={ Gift } alt='Bundle Gift Packages' />
        </div>
        <div className='list-gift-box'>
          <div className='list-gift'>
            <div className='list'>
              <div className='list-icon'>
                <img className='list-image' src={ ListIcon } alt='Star Gift Icon' />
              </div>
                <p className='list-details'>Earn up to 15% income on saving</p>
            </div>
            <div className='list'>
              <div className='list-icon'>
                <img className='list-image' src={ ListIcon } alt='Star Gift Icon' />
              </div>
                <p className='list-details'>Interest is paid out immediately</p>
            </div>
            <div className='list'>
              <div className='list-icon'>
                <img className='list-image' src={ ListIcon } alt='Star Gift Icon' />
              </div>
                <p className='list-details'>No lock in period, you control your funds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Username;