import React from 'react'
import AppForm from './AppForm';
import Posts from './Posts';
import { useSelector } from 'react-redux';
import '../styles/AppContent.css';

const AppContent=({currentId,setCurrentId}) =>{
  const posts=useSelector((state)=>state.posts);
  console.log(posts);
  return (
    <div className='AppContent'>
     <Posts setCurrentId={setCurrentId}/>
     <AppForm currentId={currentId} setCurrentId={setCurrentId}/>
    </div>
  )
}

export default AppContent;
