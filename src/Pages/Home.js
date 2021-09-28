import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Cardgrid from '../Components/Cardgrid';
import '../Styles/Home.css';


function Home() {
  return (
      <div className="Home">
        <Banner />
        <Cardgrid />
      </div>

  );
}

export default Home;
