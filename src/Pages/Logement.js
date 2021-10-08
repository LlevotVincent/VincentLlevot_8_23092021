import React from 'react';
import Carroussel from '../Components/Carroussel'
import Dropdown from '../Components/Dropdown';

const logementsArray = require('../Datas/Logements.json')


class Logement extends React.Component {
  constructor(props) {
    super(props);
    
}

// LogementsAnalyse (){
//   logements.map((logement) => {

//   });
// }

  render() {
    // let title = this.logements.title;
    // let location = this.logements.location;


    return (
      <div className='Logement-body'>
        <div className="Location">
          <Carroussel />
        </div>
        <div>
          <div>
            {/* <h2>{title}</h2>
            <p>{location}</p> */}


          </div> 
        </div>  
        <Dropdown title="Description" />
        <Dropdown title="Equipement" />
      </div>
    );
  }
}
export default Logement;