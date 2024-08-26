import logo from './logo.svg';
import './App.css';
import HeadSection from "./components/headSection";
import Introduction from "./components/introduction";
import Cardsection from "./components/Cardsection";
import Areapractice  from './components/Areapractice';
import HappyClient from "./components/happyClient";
import Ourteam from './components/Ourteam';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import FAQ from "./components/FAQ";
function App() {
  return (
    <div className="App" style={{background:"#111111"}}>
      <HeadSection/>
      <Introduction/>
      <Cardsection/>
      <Areapractice/>
      <HappyClient/>
      <Ourteam/>
      <FAQ/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
