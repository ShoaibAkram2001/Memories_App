import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../actions/postAction";

import '../styles/Posts.css';
import '../styles/AppContent.css';
import Post from "./Post";


const Posts=({setCurrentId})=>{

  const posts=useSelector((state)=>state.posts);
  console.log(posts);

  return (
    <div className="posts_container">
     {posts?.map((post) => (
      <Post post={post} key={post._id}setCurrentId={setCurrentId} />
     ))}
      
 </div>
    
  );
}

export default Posts;
