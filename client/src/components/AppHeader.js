import React from 'react'

import '../styles/AppHeader.css';
import photo from '../images/memories.png';

const AppHeader=() =>{
  return (
    <div className='AppHeader'>
    <h2>Memories App</h2>
    <img src={photo} alt="Photos"/>
      
    </div>
  )
}

export default AppHeader;
