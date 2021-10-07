import React from 'react';
import logo from '../Assets/Logo_footer.png'
import '../Styles/Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className='Footer'>
                <img src={logo} className='logo-Kasa' alt='logo kasa' />
                <p>© 2021 Kasa. All rights reserved</p>
            </div>
        )
    }
}
export default Footer