import React from 'react';
import { Link } from "react-router-dom";
import './header.css';
import Bundle from '../../assets/icons/bundle-logo.svg';
import { ChevronDownIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className='header'>
        <div className='header-container'>
          <div className='logo-container'>
            <img className='logo' src={Bundle} alt='Bundle Africa logo' />
          </div>
          <nav className='header-nav'>
            <ul className='nav-list'>
              <div className='dropdown'>
              <li className='nav-link'>
               <span>Contact</span> <ChevronDownIcon className="nav-icon"/>
              </li>
               <div class="dropdown-content">
                  <Link to="/about-us">About Us</Link>
                  <Link to="/careers">Careers</Link>
                </div>
              </div>
              <Link className='nav-link' to="/products">Products</Link>
              <Link className='nav-link' to="/about">Blog</Link>
            </ul>
          </nav>
          <div className='header-cta'>
            <button type='button' className='sign-up'>Sign Up</button>
            <button type='button' className='btn btn--login'>Login</button>
          </div>
        </div>
    </header>
  )
}

export default Header;