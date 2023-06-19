import React from 'react';
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTelegram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer bg-dark section-p' id = "footer">
        <div className='container'>
            <div className='section-title'>
                <h3 className='text-brown'>bog'lanish <span className='text-white'>uchun</span></h3>
            </div>
            <div className='footer-content'>
                <ul className='footer-social-links flex flex-c'>
                    <li>
                        <a href = "https://www.facebook.com/anvarxoja.bahodirxojayev?mibextid=LQQJ4d" target='_blank'  rel="noreferrer" className='text-white'>
                            <FaFacebookF />
                        </a>
                    </li>
                 
                    <li>
                        <a href = "https://www.instagram.com/i_m_anvarkhuja/" className='text-white' target='_blank'  rel="noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href = "https://t.me/Anvarkhuja_Bahodirkhujaev" className='text-white' target='_blank'  rel="noreferrer">
                            <FaTelegram />
                        </a>
                    </li>
                    <li>
                        <a href = "https://github.com/Anvarkhuja" className='text-white' target='_blank'  rel="noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                </ul>
                <p className='text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text'>All Rights Reserved &copy; 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Footer