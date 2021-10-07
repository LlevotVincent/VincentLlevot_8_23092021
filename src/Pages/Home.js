import React from 'react';
import Banner from '../Components/Banner'
import Cardgrid from '../Components/Cardgrid';
import Footer from '../Components/Footer';
import '../Styles/Home.css';


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Banner />
        <Cardgrid />
        <Footer />
      </div>
    );
  }
}
export default Home;
