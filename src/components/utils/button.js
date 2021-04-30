import React from 'react';
import {Button} from '@material-ui/core';
import ticket from '../../resources/images/icons/ticket.png';

function Button1(props){
  return(
    <Button
    href={props.link}
    size={props.size ? props.size:'large'}
    variant="contained"
    style={{
      background:'#8e8e8e',
      color:'#ffffff',
      ...props.style
    }}
    >
      { props.iconTicket ?
        <img
        src={ticket}
        className='iconImage'
        alt='icon_button'
        />
          : null}
      {props.text}
    </Button>
  )
}

export default Button1;
