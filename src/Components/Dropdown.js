import React from 'react';
import '../Styles/Dropdown.css'
import { useState } from 'react'
import reactDom from 'react-dom';




class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShow: false};
    }
    showBox (){
        this.setState({isShow: true});
    }

    hideBox (){
        this.setState({isShow: false});
    }
    
    render() {
        const isShow = this.state.isShow;
        if (isShow === true) {
            return(
                <div className='Dropdown'>
                    <div className='Dropdown_title'>
                        <h2>{this.props.title}</h2>
                        <i class="fas fa-chevron-up" style={{transform: [{ rotate: '90deg' }]}} onClick={this.hideBox.bind(this)}></i>
                    </div>
                    <div className='Dropdown_Text'><p>{this.props.text}</p></div>
                </div>
            ) 
        }
        return (
            <div className='Dropdown'>
                <div className='Dropdown_title'>
                    <h2>{this.props.title}</h2>
                    <i class="fas fa-chevron-down" onClick={this.showBox.bind(this)} ></i>
                </div>
            </div>
        )
    }
}
export default Dropdown;