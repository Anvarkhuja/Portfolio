import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";


const Navbar = () => {
   

  return (
    <nav className='navbar'>
        <div className='container'>
            <div className='navbar-content'>
                <div className='brand-and-toggler flex flex-sb'>
                    <Link to = "/" className='navbar-brand text-uppercase fw-7 text-white ls-2 fs-22'>Mister_A</Link>
                

                    
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar