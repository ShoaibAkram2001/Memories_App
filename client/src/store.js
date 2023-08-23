// store.js
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postReducer';



 const store =configureStore({
  reducer: {
    posts: postReducer,


    // Other reducers can be added here
  },
});

export default store;


