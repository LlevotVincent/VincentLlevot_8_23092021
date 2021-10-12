import React from 'react';
import Carroussel from '../Components/Carroussel'
import Dropdown from '../Components/Dropdown';

const Logements  = require('../Datas/Logements.json')


class Logement extends React.Component {
  constructor(props) {
    super(props);

}



  render() {

    return (
      <div className='Logement-body'>
        <div className="Location">
          <Carroussel pictures={this.props.pictures}/>
        </div>
        <div>
              {/* <h2>{logement.title}</h2>
              <h3>{logement.location}</h3> */}
        </div>  
        <Dropdown title="Description" text={Logements.description} />
        <Dropdown title="Equipement" text={Logements.equipement}/>
      </div>
    );
  }
}
export default Logement;