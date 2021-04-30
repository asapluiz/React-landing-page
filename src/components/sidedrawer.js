import React from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';
import { scroller } from 'react-scroll';


const Drawerslide = (props)=>{
  const links= [
    {where:'featured', value:'To top'},
    {where:'venue info', value:'Venue info'},
    {where:'highlights', value:'Highlights'},
    {where:'pricing', value:'Pricing'},
    {where:'location', value:'Location'}
  ]

  const golocation = (loc)=>{
    scroller.scrollTo(loc, {
      duration:1500,
      delay:100,
      smooth:true,
      offset:-150
    })
    props.onClick()
  }
  return(
    <Drawer anchor='right'
    open={props.toggle}
    onClose={()=>props.onClick() }
    >
    <List component='nav'>
      {links.map((item, i)=>{
        return(
          <ListItem key={i} onClick={()=>(golocation(item.where))}>{item.value}</ListItem>
        )
      })}

    </List>

    </Drawer>
  )
}

export default Drawerslide;
