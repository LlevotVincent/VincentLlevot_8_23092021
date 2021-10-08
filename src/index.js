import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from '../src/Components/Header'
import Footer from './Components/Footer';
import Acceuil from './Pages/Acceuil';
import Logement from './Pages/Logement';
import Banner_Apropos from './Pages/Apropos';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Header />
        <Route exact path="/">
          <Acceuil />
        </Route>
        <Route path="/Logement">
          <Logement />
        </Route>
        <Route path="/Apropos">
          <Banner_Apropos />
        </Route>
          <Footer />
      </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
