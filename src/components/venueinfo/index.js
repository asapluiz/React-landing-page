import React from 'react';
import { Zoom } from 'react-awesome-reveal';

import card from '../../resources/images/icons/calendar.png';
import location from '../../resources/images/icons/location.png';

function Venueinfo(){
  return(
  <div className='bck_black'>
    <div className='center_wrapper'>
      <div className='vn_wrapper'>

        <Zoom className='vn_item'>
          <div>
            <div className='vn_outer'>
              <div className='vn_inner'>
                <div className='vn_icon_square bck_red'></div>
                <div
                className='vn_icon'
                style={{
                  background: `url(${card})`
                }}>
                </div>
                <div className='vn_title'>
                  Event Date
                </div>
                <div className='vn_desc'>
                   Dec 20 @01:20:00pm
                </div>

              </div>
            </div>
          </div>
        </Zoom>


        <Zoom className='vn_item' delay={300}>
          <div>
            <div className='vn_outer'>
              <div className='vn_inner'>
                <div className='vn_icon_square bck_yellow'></div>
                <div
                className='vn_icon'
                style={{
                  background: `url(${location})`
                }}>
                </div>
                <div className='vn_title'>
                  Event Location
                </div>
                <div className='vn_desc'>
                   Kano Nigeria, Sabongari
                </div>

              </div>
            </div>
          </div>
        </Zoom>

      </div>
    </div>
  </div>
)
}

export default Venueinfo;
