
import axios from "axios";
import * as api from "../api";

import {AUTH} from './actionTypes';

//import { FETCH_ALL, CREATE, UPDATE,LIKE,DELETE, AUTH } from "../actionTypes";


export const signup=(authData,navigate)=>async(dispatch)=>{

    try {
        const{ data }=await api.signUp(authData);
        dispatch({type: AUTH,data});
    } catch (error) {
        console.log(error);
    }
   
}

export const signin=(authData,navigate)=>async(dispatch)=>{
    try {
      const{ data }=await api.signIn(authData);

        dispatch({type: AUTH,data});
    } catch (error) {
        console.log(error);
    }
   
}