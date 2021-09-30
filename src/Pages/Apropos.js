import React from 'react';
import Banner_mountain from '../Assets/Banner_mountain.png'
import '../Styles/Banner.css'
import Dropdown from '../Components/Dropdown'

class Banner_Apropos extends React.Component {
    render() {
        return (
            <div>
                <div className='Banner'>
                    <img src={Banner_mountain} className='Banner-img' alt='image de montagne' />
                </div>
                <Dropdown />
            </div>
        )
    }
}
export default Banner_Apropos