import React from 'react';
import { Fade } from "react-awesome-reveal";

function Footerarea(){
  return(
    <footer className='bck_red'>
      <Fade duration={5000}>
        <div className='font_righteous footer_logo_venue'>The Venue</div>
        <div className='footer_copyright'>The Venue 2021 All Right Reserved</div>
      </Fade>
    </footer>
  )
}

export default Footerarea;
