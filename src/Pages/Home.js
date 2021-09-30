// import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Cardgrid from '../Components/Cardgrid';
import '../Styles/Home.css';


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Banner />
        <Cardgrid />
      </div>
    );
  }
}
export default Home;
