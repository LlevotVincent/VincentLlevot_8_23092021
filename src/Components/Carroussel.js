import React from 'react';
import Img_Logement from '../Assets/Img_Logement.png'
import '../Styles/Carroussel.css'

class Carroussel extends React.Component {
    render() {
        return (
            <div>
                <div className='Banner_logement'>
                    <img src={Img_Logement} className='Img_Logement' alt='image du logement' />
                </div>
            </div>
        )
    }
}
export default Carroussel