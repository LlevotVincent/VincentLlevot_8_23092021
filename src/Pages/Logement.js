import React from 'react';
import Carroussel from '../Components/Carroussel';
import Dropdown from '../Components/Dropdown';
import Rating from '../Components/rating';
import Host from '../Components/Host';
import '../Styles/Logement.css'
const logements = require('../Datas/Logements.json')


class Logement extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id
    this.state = {
      inputValue: '',
  }
}



  render() {


    return (
      <div className='Logement-body'>
        <div className="Location">
          <Carroussel pictures={this.props.pictures}/>
        </div>
        <div>
              <h2 className="Logement-title">{logements.title}</h2>
              <h3 className="Logement-city">{logements.location}</h3>
        </div>  
        <div>
              <Host name={logements.host.name} picture = {logements.host.picture}/>
              <Rating rating={logements.rating} />
        </div>  
        <Dropdown title="Description" text={logements.description} />
        <Dropdown title="Equipement" text={logements.equipement}/>
      </div>
    );
  }
}
export default Logement;