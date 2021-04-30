import React from 'react';

import { Fade } from 'react-awesome-reveal';

function Description(){
  return(
    <Fade delay={200}>
      <div className='center_wrapper'>
        <h2>HIGHLIGHTS</h2>
        <div className='highlight_description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut lacinia ex.
          Curabitur iaculis elit lorem, vitae fringilla turpis ultricies vel.
          Mauris pretium fermentum est, eget tincidunt massa dignissim sed.
          Donec vulputate a augue at tincidunt. Fusce scelerisque quam arcu, vitae
          dictum leo volutpat tempor. Curabitur commodo vulputate ex id posuere.
          Phasellus at condimentum purus. Praesent et dictum ante. Proin sed ipsum
          non nisl pretium tempus quis et augue. Morbi ullamcorper, dolor eu accumsan
          aliquet, nibh nisl molestie odio, at lobortis sapien nisl interdum arcu.
        </div>
      </div>
    </Fade>
  )

}

export default Description;
