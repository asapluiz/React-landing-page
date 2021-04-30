import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import Button1 from '../utils/button'

function Pricing(){

  const details = {
    price: [100, 150, 200],
    size: ['BALCONY', 'MEDIUM', 'STAR'],
    text: ['When The Planets Align HOW WE TACKLED THE BRIEF GIVEN TO US Brief Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor',
    'When The Planets Align HOW WE TACKLED THE BRIEF GIVEN TO US Brief Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
    'When The Planets Align HOW WE TACKLED THE BRIEF GIVEN TO US Brief Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'],
    link: ['www.a.com', 'www.b.com', 'www.c.com'],
    transition:[500, 0, 500]

  }


  return(
    <div className='bck_black'>
      <div className='center_wrapper pricing_section'>
        <h2>PRICING</h2>
        <div className='pricing_wrapper'>

          {
            details.price.map((item, index)=>{
              return (
                <Zoom className='pricing_item' delay={details.transition[index]} key={index}>
                  <div className='pricing_inner_wrapper'>
                    <div  className='pricing_title'>
                      <span>${details.price[index]}</span>
                      <span>${details.size[index]}</span>
                    </div>
                    <div className='pricing_description'>
                      {details.text[index]}
                    </div>
                    <div className='pricing_buttons'>
                      <Button1
                      text='Purchase'
                      link={details.link[index]}/>
                    </div>
                  </div>

                </Zoom>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}
export default Pricing;
