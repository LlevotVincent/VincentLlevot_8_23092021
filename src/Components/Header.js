import React from 'react';
import logo from '../Assets/Logo_header.png'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <img src={logo} className='logo-Kasa' alt='logo kasa' />
                <nav className='nav-bar'>
                    <Link to="/">Accueil</Link>
                    <Link to="/Apropos">A propos</Link>
                </nav>
            </div>
        )
    }
}
export default Header