import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Header from './Header';

const Navbar = () => {
  return (
    // <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    //   <span className='logo'>REDUX STORE</span>

    //   <div>
    //     <Link className='navLink' to="/">
    //     Home
    //     </Link>
    //     <Link className='navLink' to="/cart">
    //     Cart
    //     </Link>
    //     <span className='cartCount'>Cart items:
    //      {/* {items.length} */}
    //     </span>
    //   </div>
    // </div>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <span className='logo'><Header/></span>
      <div>
         <Link className='navLink' to="/">
         INCRE AND DECRE
       </Link>
         <Link className='navLink' to="/fetchapi">
         FETCH API
        </Link>
       
      </div>
    </div>
  )
}

export default Navbar;
