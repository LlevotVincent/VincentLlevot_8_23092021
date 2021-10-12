import React from 'react';
import Img_Logement from '../Assets/Img_Logement.png'
import '../Styles/Carroussel.css'

class Carroussel extends React.Component {
    constructor(props) {
    super(props);
    this.pictures = this.props.pictures;
    // this.ImgArraylength = this.props.pictures.length;

    this.state = {
        CurrentImg : 0
    }
    

    }
    render() {
        return (
            <div>
                <div className='Banner_logement'>
                    <img src={this.pictures} className='Img_Logement' alt='logement' />
                </div>
            </div>
        )
    }
}
export default Carroussel