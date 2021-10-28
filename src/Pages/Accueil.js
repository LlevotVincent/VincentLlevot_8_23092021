import React from 'react';
import Banner from '../Components/Banner'
import Background from '../Assets/Banner_background.png'
import Card from '../Components/Card';
import '../Styles/Accueil.css';

// import Logement from './Logement';
const logements = require('../Datas/Logements.json')
let TextBanner = 'Chez vous, partout et ailleurs'

class Accueil extends React.Component {

  render() {

    const logementList = logements.map((logement) =>
      <li key={logement.id} className='card'>
        <Card logement={logement} />
      </li>
    );
    
    return (
      <div className="Accueil">
          <Banner img={Background} text={TextBanner} />
        <ul className='cardgrid'>
          {logementList}
        </ul>
      </div>
    )
  }
}

export default Accueil;
