
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import { useState,useEffect } from 'react';
import './App.css';
import { getPosts } from './actions';
import { useDispatch, useSelector } from 'react-redux';



const App=()=> {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const posts=useSelector((state)=>state.posts);
  console.log(posts);
   useEffect(()=>{
   dispatch(getPosts()); 
},[currentId,dispatch]);
  return (
    <div className="App">
     <AppHeader/>
     <AppContent currentId={currentId} setCurrentId={setCurrentId}/>

    </div>
  );
}

export default App;
