import React from 'react';
import Carroussel from '../Components/Carroussel';
import Dropdown from '../Components/Dropdown';
import Rating from '../Components/rating';
import Host from '../Components/Host';
import '../Styles/Logement.css'
import Tags from '../Components/Tags'
import Error from './Error';

const logements = require('../Datas/Logements.json')


class Logement extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id
    this.state = {
      logement: null,
    }
  }

  componentDidMount() {
    this.setState({
      logement: logements.find(logement => logement.id === this.id)
    })
  }

  // for (var logement of logements) {
  //   if (logement.id === this.id) {
  //     this.logement = logement
  //   }
  // }

  render() {

    return (
      this.state.logement ? (
        <div className='Logement-body'>
          <div className="Location">
            <Carroussel pictures={this.state.logement.pictures} />
          </div>
          <div className='Logement-identity'>
            <div className='Logement-cardname'>
              <h2 className="Logement-title">{this.state.logement.title}</h2>
              <h3 className="Logement-city">{this.state.logement.location}</h3>
              <div className='Tag-container'>
                <Tags tagList={this.state.logement.tags} />
              </div>
            </div>

            <div className='Logement-host'>
              <Host name={this.state.logement.host.name} picture={this.state.logement.host.picture} />
              <Rating rating={this.state.logement.rating} />
            </div>
          </div>

          <div className='Logement-Dropdown'>
            <Dropdown title="Description" text={this.state.logement.description} />
            <Dropdown title="Equipement" text={this.state.logement.equipments} />
          </div>
        </div>
      ) :
        <Error />
    );
  }
}
export default Logement;