import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';
import Logement from './Pages/Logement';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../src/Components/Header'


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Header />
        <Route path="./pages/Home">
          <Home />
        </Route>
        <Route path="./Pages/Logement">
          <Logement />
        </Route>
      </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
