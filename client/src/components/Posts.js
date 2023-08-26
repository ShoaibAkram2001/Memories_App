import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FETCH_ALL } from "../actions";
import '../styles/Posts.css';
import Post from "./Post";

function Posts() {

  const obj={
    title:'',
   message:'',
   creator:'',
   tags:'',
   selectedFile:'',
  }
  const dispatch = useDispatch();
  const postData = useSelector((state) => state);
  console.log("postData", postData);
  useEffect(() => {
    dispatch(FETCH_ALL());
  }, []);
  return (
    <div className="PostsContainer">
    <Post post={postData}/>
    </div>
  );
}

export default Post;
