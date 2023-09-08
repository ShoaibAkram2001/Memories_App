import axios from "axios";
import * as api from "../api";

import { FETCH_ALL, CREATE, UPDATE,LIKE,DELETE, AUTH } from './actionTypes';

export const getPosts = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetch_posts();
   // console.log("All fetch data :", data);

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log("FETCH Error!");
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
  //  console.log("Create action data :", post);

    const data = await api.create_post(post);

    console.log(data);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const data = await api.update_post(id, post);

    console.log(data);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deletePost=(id)=>async(dispatch)=>{

  try {

     const message=await api.delete_post(id);
    // console.log(message);
     dispatch({type:DELETE,payload:id});
    
  } catch (error) {
    
    console.log(error.message);
  }
  

}


export const likePost=(id)=>async(dispatch)=>{
  try {
    const  data  = await api.like_post(id);
   // console.log("After like :",data);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }


}

