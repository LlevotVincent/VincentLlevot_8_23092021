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

            if (CurrentImg === ImgArraylength -1){
                CurrentImg = 0;
            }

            if (CurrentImg < ImgArraylength -1){
                CurrentImg ++
            }

            this.setState ({
                InitialImg: CurrentImg
            });
    }

    PreiousIndex() {

        let CurrentImg = this.state.InitialImg
        let ImgArraylength = this.ImgArraylength

            if (CurrentImg === 0){
                CurrentImg = ImgArraylength -1 ;
            }

            if (CurrentImg <= ImgArraylength){
                console.log(this)
                CurrentImg --
            }

            this.setState ({
                InitialImg: CurrentImg
            });
    }

    render() {

        return (
            <div>
                <div className='Banner_logement'>
                    <img src={this.props.pictures[this.state.InitialImg]} className='Img_Logement' alt='logement' />
                    <i className='fas fa-chevron-left' onClick={this.PreiousIndex.bind(this)}></i>
                    <i className='fas fa-chevron-right' onClick={this.nextIndex.bind(this)} ></i>
                </div>
            </div>
        )
    }
}
export default Carroussel