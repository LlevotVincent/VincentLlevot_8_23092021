import React from 'react';
import Banner from '../Components/Banner'
import Card from '../Components/Card';
import '../Styles/Acceuil.css';

// import Logement from './Logement';
const logements = require('../Datas/Logements.json')

class Acceuil extends React.Component {

  render() {

    const logementList = logements.map((logement) =>
      <li key={logement.id} className='card'>
        <Card logement={logement} />
      </li>
    );
    
    return (
      <div className="Acceuil">
        <Banner />
        <ul className='cardgrid'>
          {logementList}
        </ul>
      </div>
    )
  }
}

export default Acceuil;
