import React, {useState, useEffect} from 'react';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawerslide from './sidedrawer';

const Header = ()=>{

  const [toggleSlider, changeToggleSlider] = useState(false);
  const [scrollPosition, changeScrollPosition] = useState(true);

  function closeToggle(){
    changeToggleSlider((prevValue)=>{
      return !prevValue
    })
  }

  const getScrollPosition = ()=>{
    if (window.scrollY !== 0){
      changeScrollPosition(false)
    } else{
      changeScrollPosition(true)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', getScrollPosition)
  },[])

  return(
    <>
      <AppBar postion='static' style={{
        backgroundColor: scrollPosition? 'transparent' : '#2f2f2f',
        boxShadow: 'none',
        padding: '10px 0px'
      }}>
      <Toolbar>

        <div className='header_logo'>
          <div className='font_righteous header_logo_venue'> The venue </div>
          <div className='header_logo_title'> Musical </div>
        </div>

        <IconButton aria-label='menu' color='inherit' onClick={()=>closeToggle()}>
          <MenuIcon />
        </IconButton>

        <Drawerslide toggle={toggleSlider} onClick={()=>closeToggle()}/>

      </Toolbar>
      </AppBar>
    </>
  )
}


export default Header;
