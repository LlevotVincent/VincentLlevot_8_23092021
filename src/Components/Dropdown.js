import React from 'react';
import '../Styles/Dropdown.css'

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShow: false};
    }
    showBox (){
        this.setState({isShow: !this.state.isShow});
    }
    
    render() {
        const isShow = this.state.isShow;
        let dropdownText;
        let chevron;
        if (isShow === true) {
            dropdownText = <div className='Dropdown_Text'><p>{this.props.text}</p></div>
            chevron = 'fas fa-chevron-up'
        } else {
            dropdownText = ''
            chevron = 'fas fa-chevron-down'
        }

        return (
            <div className='Dropdown'>
                <div className='Dropdown_title'>
                    <h2>{this.props.title}</h2>
                    <i className={chevron} onClick={this.showBox.bind(this)} ></i>
                </div>
                {dropdownText}
            </div>
        )
    }
}
export default Dropdown;