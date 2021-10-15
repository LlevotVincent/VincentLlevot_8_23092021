import React from 'react';
import '../Styles/Carroussel.css'

class Carroussel extends React.Component {
    constructor(props) {
        super(props);
        this.pictures = this.props.pictures;
        this.ImgArraylength = this.props.pictures.length;

        this.state = {
            InitialImg: 0
        }
    }

    nextIndex() {

        let CurrentImg = this.state.InitialImg
        let ImgArraylength = this.ImgArraylength
        let InitialImg = CurrentImg

            if (CurrentImg < ImgArraylength-1){
        console.log(InitialImg)
                CurrentImg ++
                console.log(CurrentImg)
                console.log(ImgArraylength)
            }
            InitialImg = CurrentImg
    }


    render() {
        return (
            <div>
                <div className='Banner_logement'>
                    <img src={this.props.pictures[this.state.InitialImg]} className='Img_Logement' alt='logement' />
                    <i className='fas fa-chevron-left' ></i>
                    <i className='fas fa-chevron-right' onClick={this.nextIndex.bind(this)} ></i>
                </div>
            </div>
        )
    }
}
export default Carroussel