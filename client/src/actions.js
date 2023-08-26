import axios from 'axios';
import * as api from './api';

export const FETCH_ALL=()=>async(dispatch)=>{

  try{
  const {data}= await api.fetch_posts();
  
  dispatch({type:"FETCH_ALL",payload:data});
  }
  catch(error){
    console.log(error.message);
  
  }
}


export const CREATE=(post)=>async(dispatch)=>{

  try{

    console.log( "Create action data :",post);
  
  const data= await api.create_post(post);

  console.log(data);
  
  dispatch({type:"CREATE",payload:data});
  }
  catch(error){
    console.log(error.message);
  
  }
}



