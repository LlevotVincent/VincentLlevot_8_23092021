import React from 'react';
import Background from '../Assets/Banner_background.png'
import '../Styles/Banner.css'

function Banner () {
    return (
        <div className='Banner'>
                <img src= {Background} className='Banner-img' alt='image de nature'/>
                <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}
export default Banner 