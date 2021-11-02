import React from 'react';
import Banner from '../Components/Banner'
import Banner_mountain from '../Assets/Banner_mountain.png'
import '../Styles/Banner.css'
import '../Styles/Apropos.css'
import Dropdown from '../Components/Dropdown'


const aProposText = require('../Datas/AproposText.json')

class Apropos extends React.Component {
    render() {
        return (
            <div className='Apropos-body'>
                <Banner img={Banner_mountain} className='Banner-img' alt='montagne' />
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
export default Apropos
