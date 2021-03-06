import React from 'react';
import Header from './components/Header/Header'
import SectionTwo from './components/SectionTwo/SectionTwo'
import SectionThree from './components/SectionThree/SectionThree'
import SectionFour from './components/SectionFour/SectionFour'
import SectionFive from './components/SectionFive/SectionFive'
import SectionSix from './components/SectionSix/SectionSix'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </div>
  );
}

export default App;
