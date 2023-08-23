import React from 'react'
import AppForm from './AppForm';
import Post from './Post';
import '../styles/AppContent.css';

function AppContent() {
  return (
    <div className='AppContent'>
     <Post/>
     <AppForm/>
    </div>
  )
}

export default AppContent;
