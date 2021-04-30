import React, {useState, useEffect, useCallback} from 'react';
import { Slide } from "react-awesome-reveal";

function Countdown(){

  const [date, changeDate] = useState({
    days:'0',
    hours:'0',
    minutes:'0',
    second:'0'

  })



  const count = (data, label)=>{
    return(
      <div className='countdown_item'>
        <div className='countdown_time'>
          {data}
        </div>
        <div className='countdown_tag'>
          {label}
        </div>
      </div>
    )
  }


  const updateTime = useCallback((val)=>{
    let time = Date.parse(val) - Date.parse(new Date())
    if (time < 0){
      console.log('time up')
    }else{
      const hours = Math.floor((time/(1000*60*60))%24);
      const minutes = Math.floor((time/(1000*60))%60);
      const seconds = Math.floor((time/1000)%60);
      const days = Math.floor((time/(1000*60*60*24)));



      changeDate({
        days,
        hours,
        minutes,
        seconds
      })
    }

  }, [])



  useEffect(()=>{
    setInterval(()=>updateTime('Nov, 20, 2021, 01:10:00'), 1000)
  },[updateTime])

  //console.log(date.hours)
return(
  <Slide>
  <div className='countdown_wrapper'>
    <div className='countdown_top'>
      EVENT STARTS IN
    </div>
    <div className='countdown_bottom'>
        {count(date.days, 'Days')}
        {count(date.hours, 'Hours')}
        {count(date.minutes, 'Minutes')}
        {count(date.seconds, 'Seconds')}
    </div>
  </div>
  </Slide>
)

}

export default Countdown;
