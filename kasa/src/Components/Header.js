import React from 'react';
import logo from '../Assets/logo.png'
import '../Styles/Header.css'

function Header () {
    return (
        <div className='header'>
            <img src= {logo} className='logo-Kasa' alt='logo kasa'/>
            <nav className='nav-bar'>
                <li>Acceuil</li>
                <li>A propos</li>
            </nav>
        </div>
    )
}
export default Header 