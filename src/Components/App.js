import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../Styles/App.css';
import Header from './Header'
import Footer from './Footer';
import Acceuil from '../Pages/Acceuil';
import Logement from '../Pages/Logement';
import Banner_Apropos from '../Pages/Apropos';
import Error from '../Pages/Error';


class App extends React.Component {

    render (){
      return (
        <div className="body">
            <Router>
                <Header />
                <Route exact path="/"  component={Acceuil}>
                </Route>
                <Route path="/Logement"component={Logement}>
                </Route>
                <Route path="/Apropos" component={Banner_Apropos}>
                </Route>
                <Route path="/Error" component={Error} />
                <Footer />

            </Router>
        </div>
      )
    } 
  }

export default App