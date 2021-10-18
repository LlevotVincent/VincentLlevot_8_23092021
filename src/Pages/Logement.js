import React from 'react';
import Carroussel from '../Components/Carroussel';
import Dropdown from '../Components/Dropdown';
import Rating from '../Components/rating';
import Host from '../Components/Host';
import '../Styles/Logement.css'
import Tags from '../Components/Tags'
const logements = require('../Datas/Logements.json')


class Logement extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id
    this.state = {
      inputValue: '',
  }
  for (var logement of logements) {
    if (logement.id === this.id) {
      this.logement = logement
    }
  }
}

  render() {

    return (
      <div className='Logement-body'>
        <div className="Location">
          <Carroussel pictures={this.logement.pictures}/>
        </div>
        <div className='Logement-identity'>
          <div className='Logement-cardname'>
              <h2 className="Logement-title">{this.logement.title}</h2>
              <h3 className="Logement-city">{this.logement.location}</h3>
          </div>  
          <div className='Logement-host'>
              <Host name={this.logement.host.name} picture = {this.logement.host.picture}/>
              <Rating rating={this.logement.rating} />
          </div>  
        </div>
        <div className='Tag-container'>
          <Tags tagList = {this.logement.tags} />
        </div>
        <div className='Logement-Dropdown'>
        <Dropdown title="Description" text={this.logement.description} />
        <Dropdown title="Equipement" text={this.logement.equipments}/>
        </div>  
      </div>
    );
  }
}
export default Logement;