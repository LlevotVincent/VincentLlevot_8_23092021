import React from 'react';
import background from '../Assets/Banner_background.png'
import '../Styles/Banner.css'

function Banner () {
    return (
        <div className='Banner'>
                <img src= {background} className='Banner-background' alt='image de nature'/>
                <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}
export default Banner 