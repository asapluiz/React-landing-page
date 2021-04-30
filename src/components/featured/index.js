import React from 'react';
import Carrousel from './carrousel';
import Countdown from './timeuntill';

function Featured(){
  return(
  <div className='featured_container'>
    <Carrousel/>
    <div className='artist_name'>
      <div className='wrapper'>
        ARIANA GRANDE
      </div>
    </div>
    <Countdown/>
  </div>
)
}

export default Featured;
