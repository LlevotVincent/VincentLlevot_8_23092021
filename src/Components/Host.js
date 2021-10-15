import React from 'react';
import '../Styles/Host.css';


class Host extends React.Component {

    render() {

        return (
            <div className='Host'>
                <div className='Host-name'>{this.props.name}</div>
                <img className='Host-img' src={this.props.picture} alt='identité'></img>
            </div>
        )
    }
}
export default Host