import React from 'react';

import '../Styles/Card.css';

class Card extends React.Component {

    render() {
        return (
            <div className='Card'>
                <img className='Card-background' src={this.props.logement.cover} alt='image d appartement' />
                <h2>{this.props.logement.title}</h2>
            </div>
        )
    }
}
export default Card