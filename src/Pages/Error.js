import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Error.css'


class Error extends React.Component {

    render() {
        return (
            <div className='Error-body'>
                <h2 className='Error-title'>404</h2>
                <p className="Error-text">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink Redirect to="/">
                    <div className='Error-button'>Retourner sur la page d'acceuil</div>
                </NavLink>
            </div>
        )
    }
}
export default Error