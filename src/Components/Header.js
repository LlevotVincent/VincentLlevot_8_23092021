import React from 'react';
import logo from '../Assets/logo.png'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'

function Header () {
    return (
        <div className='header'>
            <img src= {logo} className='logo-Kasa' alt='logo kasa'/>
            <nav className='nav-bar'>
                <Link exact to="/">Acceuil</Link>
                <Link to="/Apropos">A propos</Link>
            </nav>
        </div>
    )
}
export default Header 