import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Card.css';

class Card extends React.Component {

    render() {
        return (
            <Link to={`/Logement/${this.props.logement.id}`}>
                <div className='Card'>
                    <img className='Card-img' src={this.props.logement.cover} alt='appartement' />
                    <h2>{this.props.logement.title}</h2>
                </div>
            </Link>
        )
    }
}
export default Card