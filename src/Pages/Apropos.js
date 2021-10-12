import React from 'react';
import Banner_mountain from '../Assets/Banner_mountain.png'
import '../Styles/Banner.css'
import '../Styles/Apropos.css'
import Dropdown from '../Components/Dropdown'


const aProposText = require('../Datas/AproposText.json')

class Banner_Apropos extends React.Component {
    render() {
        return (
            <div className='Apropos-body'>
                <div className='Banner'>
                    <img src={Banner_mountain} className='Banner-img' alt='montagne' />
                </div>
                <div className='Dropdown-box'>
                <Dropdown title="Fiabilités"  text={aProposText.Fiabilités}/>
                <Dropdown title="Respect"  text={aProposText.Respect}/>
                <Dropdown title="Service"  text={aProposText.Service}/>
                <Dropdown title="Sécurité"  text={aProposText.Sécurité}/>
                </div>
            </div>
        )
    }
}
export default Banner_Apropos
