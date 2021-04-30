import React, { useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import Button1 from '../utils/button';

function Discount(){
  const end = 30;
  const [count, changeCount] = useState(0);

  function increaseCount(){
    if (count < end){
      changeCount((prevValue)=>{
          return prevValue+1
      })
  }
  }
  useEffect(()=>{
    if (count > 0 && count < 30){
    setTimeout(()=>{increaseCount()}, 30)
    }
  },[count])

  return(
    <div className='center_wrapper'>
      <div className='discount_wrapper'>
        <Fade delay={200} onVisibilityChange={(inView)=>{
          if(inView){
            increaseCount()
          }
        }}>
          <div className='discount_porcentage' >
              <span>{count}%</span>
              <span>OFF</span>
          </div>
        </Fade>

        <Slide right>
          <div className='discount_description'>
            <h3>
              Purchase Ticket Before 20th June
            </h3>
            <p>
              Vestibulum vitae varius arcu. Nam mattis est ex, eu iaculis sem
              euismod nec. Nulla facilisis est vitae enim dictum posuere. Curabitur
              est tellus, consectetur vitae tellus eget, scelerisque convallis ipsum.
              Ut id nulla mauris. Proin placerat, mi eget cursus mollis, nulla ipsum
              venenatis nulla, a varius urna ante eget felis.
            </p>
            <Button1
            size='small'
            link='www.google.com'
             text='Purchase Now'
             style={{
               background:'#ffa800',
               color:'#ffffff'
             }}
             iconTicket={true}
             />

          </div>
        </Slide>
      </div>
    </div>
  )

}

export default Discount;
