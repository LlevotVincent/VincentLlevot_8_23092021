import React from 'react';
import Background from '../Assets/Banner_background.png'
import '../Styles/Banner.css'

class Banner extends React.Component {
    render() {
        return (
            <div className='Banner'>
                <img src={this.props.img} className='Banner-img' alt='nature' />
                <p>{this.props.text}</p>
            </div>
        )
    }
}
export default Banner