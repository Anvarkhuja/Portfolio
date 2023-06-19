import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className='header flex flex-col' id = "header">
        <Navbar />

        <div className='container flex'>
            <div className='header-content'>
                <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>Assalomu Aleykum !</h2>
                <h1 className='text-white fw-6 header-title'>Men<span className='text-brown'> Bahodirkhujaev Anvarkhuja</span>  Full Stack Web Developer</h1>
                <div className='btn-groups flex'>
                  <button type = "button" className='btn-item bg-brown fw-4 ls-2'>Portfolio</button>
                  <button type = "button" className='btn-item bg-dark fw-4 ls-2'>(93) 673 35 70</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header