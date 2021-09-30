import React from 'react';

import '../Styles/Cardgrid.css';

class Cardgrid extends React.Component {
    render() {
        return (
            <div className='Cardgrid'>
                <div className='Card'>
                    <img className='card-background' alt='image d appartement' />
                    <h2>Titre de la location</h2>
                </div>
                <div className='Card'>
                    <img className='card-background' alt='image d appartement' />
                    <h2>Titre de la location</h2>
                </div>
                <div className='Card'>
                    <img className='card-background' alt='image d appartement' />
                    <h2>Titre de la location</h2>
                </div>
                <div className='Card'>
                    <img className='card-background' alt='image d appartement' />
                    <h2>Titre de la location</h2>
                </div>
                <div className='Card'>
                    <img className='card-background' alt='image d appartement' />
                    <h2>Titre de la location</h2>
                </div>
                <div className='Card'>
                    <img className='card-background' alt='image d appartement' />
                    <h2>Titre de la location</h2>
                </div>
            </div>
        )
    }
}
export default Cardgrid