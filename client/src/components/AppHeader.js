import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@mui/material';
import '../styles/AppHeader.css';
import photo from '../images/memories.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AppHeader=() =>
{
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const navigate=useNavigate();
const dispatch=useDispatch();
const location=useLocation();

//console.log(JSON.parse(localStorage.getItem('profile')))
  const handleLogout=()=>{

   dispatch({type:'LOGOUT'})
    navigate('/Auth');

    setUser(null);
  }

  useEffect(()=>{

    const token=user?.token;
  
 setUser(JSON.parse(localStorage.getItem('profile')));

  },[location])
  return (
    <div className='AppHeader'>
    <div className='left_header'>
      <h2>Memories App</h2>
      <img src={photo} alt="Photos" />
    </div>

    <div className='right_header'>
      {user ? (
        <div className='Profile'>
    <Avatar  src={user?.result?.imageURL} />
          <h2>{user?.result?.name}</h2> {/* Replace with the user's actual name */}
          <IconButton onClick={handleLogout}>LOG OUT</IconButton> {/* Implement logout */}
        </div>
      ) : (
        <IconButton LinkComponent={Link} to={'/Auth'}>
          SIGN IN
        </IconButton>
      )}
    </div>
  </div>
  )
  };
export default AppHeader;
