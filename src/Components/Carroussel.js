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

        if (ImgArraylength===1){
            return
        }else {
            if (CurrentImg < ImgArraylength){
                CurrentImg ++
            }
            if (CurrentImg === ImgArraylength){
                CurrentImg = 0;
            }
        }
            this.setState ({
                InitialImg: CurrentImg
            });
    }

    PreiousIndex() {

        let CurrentImg = this.state.InitialImg
        let ImgArraylength = this.ImgArraylength

        if (ImgArraylength===1){
            return
        }else {
            if (CurrentImg === 0){
                CurrentImg = ImgArraylength ;
            }
            if (CurrentImg <= ImgArraylength){
                CurrentImg --
            }
        }
            this.setState ({
                InitialImg: CurrentImg
            });
    }

    render() {

        return (
            <div className='Banner_carroussel'>
                <div className='Banner_logement'>
                    <img src={this.props.pictures[this.state.InitialImg]} className='Img_Logement' alt='logement' />
                    <i className='fas fa-chevron-left' style={this.ImgArraylength===1 ? { display: 'none' } : {} } onClick={this.PreiousIndex.bind(this)} ></i>
                    <i className='fas fa-chevron-right' style={this.ImgArraylength===1 ? { display: 'none' } : {} } onClick={this.nextIndex.bind(this)} ></i>
                    <div className='img-number'>
                    {this.state.InitialImg+1}/{this.ImgArraylength}
                    </div>
                </div>
            </div>
        )
    }
}
export default Carroussel