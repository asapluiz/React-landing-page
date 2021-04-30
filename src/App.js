import React from 'react';
import './resources/styles.css'
import Header from './components/header';
import Footerarea from './components/footer';
import Featured from './components/featured/index';
import Venueinfo from './components/venueinfo/index';
import Highlight from './components/highlights/index';
import Pricing from './components/pricing/index';
import Location from  './components/location/index';
import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <Element name='featured'>
        <Header/>
      </Element>

      <Element >
        <Featured/>
      </Element>

      <Element name='venue info'>
        <Venueinfo/>
      </Element>

      <Element name='highlights'>
        <Highlight/>
      </Element>

      <Element name='pricing'>
        <Pricing/>
      </Element>

      <Element name='location'>
        <Location/>
      </Element>

      <Footerarea/>
    </div>
  );
}

export default App;
