import React from 'react'
import AppForm from './AppForm';
import Posts from './Posts';
import '../styles/AppContent.css';

function AppContent() {
  return (
    <div className='AppContent'>
     <Posts/>
     <AppForm/>
    </div>
  )
}

export default AppContent;
