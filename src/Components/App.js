import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import '../Styles/App.css';
import Header from './Header'
import Footer from './Footer';
import Router from '../Components/Router'


class App extends React.Component {

    render (){
      return (
        <div className="body">
            <BrowserRouter>
                <Header />
                <Router />
                <Footer />
            </BrowserRouter>
        </div>
      )
    } 
  }

export default App