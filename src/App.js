import './App.css';
import Heros from './Component/Heros';
import Amplify from './Component/Amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Core from './Component/Core';
import Tokenomics from './Component/Tokenomics';
import Supply from './Component/Supply';
import Cases from './Component/Cases';
import Team from './Component/Team';
import Partners from './Component/Partners';
import Rodmp from './Component/Rodmp';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500, });
  },[])
  return (

    <>
      <Heros />
      <Amplify />
      <Core />
      <Tokenomics />
      <Supply />
      <Cases />
      <Team />
      <Partners />
      <Rodmp />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
