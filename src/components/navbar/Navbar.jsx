import React from 'react'
import logo from '../../assets/logo.svg'
import { IoSearchSharp, IoPersonSharp } from "react-icons/io5";
import { BiSolidCart } from "react-icons/bi";

import './Navbar.scss'

function Navbar() {
  return (
    <div className='nav_div'>
        <div className="container">
            <nav>
                <a href=""><img src={logo} alt="" /></a>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Brands</a></li>
                    <li><a href="">Recent Products</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About</a></li>
                </ul>
                <div className="icons">
                    <a href=""><IoSearchSharp className='icon'/></a>
                    <a href=""><IoPersonSharp className='icon'/></a>
                    <a href=""><BiSolidCart className='icon'/></a>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar