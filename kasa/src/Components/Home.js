import React from 'react';
import background from '../Assets/Banner_background.png'
import '../Styles/Home.css'

function Home () {
    return (
        <boby className="body">
            <div className='Banner'>
                <img src= {background} className='banner-background' alt='image de nature'/>
            </div>
        </boby>
    )
}
export default Home 