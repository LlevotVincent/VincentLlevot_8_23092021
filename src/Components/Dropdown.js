import React from 'react';
import '../Styles/Dropdown.css'
import Chevron from '../Assets/Chevron.png'


// const Apropos =
//     [
//        { "Fiabilités": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
//         "Respect": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
//         "Service": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
//         "Sécurité": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
//     }
//     ]

// const Drop = Apropos.map(item => <ul className='Dropdown'>{item}</ul>)

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        };

    render() {

        return (
            <div className='Dropdown'>
                <div className='Dropdown_title'>
                    <h2>{this.props.title}</h2>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div className='Dropdown_Text'><p>{this.props.text}</p></div>
            </div>
        )
    }
}
export default Dropdown;