import React from 'react'
import AppForm from './AppForm';
import Posts from './Posts';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getPosts } from '../actions/postAction';
import '../styles/AppContent.css';

const AppContent=() =>
{
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const posts=useSelector((state)=>state);

  console.log(posts);

   useEffect(()=>{
   dispatch(getPosts()); 

},[currentId,dispatch]);

  return (
    <div className='AppContent'>
     <Posts setCurrentId={setCurrentId}/>
     <AppForm currentId={currentId} setCurrentId={setCurrentId}/>
    </div>
  )
}

export default AppContent;
