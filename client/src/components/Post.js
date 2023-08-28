import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import "../styles/Post.css";
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { deletePost, likePost } from "../actions";

const Post=({post,setCurrentId})=>
{
  const dispatch= useDispatch();

  const divStyle = {
    fontSize: '20px', // Set font size
    color: 'blue',    // Set text color
    // Add more styles as needed
  };
 console.log(post);
  return (
    <div className="Post">
      <div className="main_container_post">
        <img src= {/*post?.selectedFile ||*/"https://www.shutterstock.com/image-photo/profile-view-portrait-young-guy-260nw-2247042155.jpg"} alt="Pic" />
        <div className="Post_Image_Content">
          <div className="Post_Image_Text">
            <h4>{post?.creator}</h4>
            <p>{moment(post?.createdAt)?.fromNow()}</p>
          </div>
          <IconButton onClick={() => setCurrentId(post._id)}>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      <div className="post_middle_content">
        <p>{post?.tags?.map((tag)=> `#${tag}`)}</p>
        <h2>{post?.title}</h2>
        <p className="message_container">{post?.message}</p>
      </div>

      <div className="post_footer">
        <div className="like_btn_container">
          <IconButton onClick={()=>dispatch(likePost(post._id))}>
            <ThumbUpIcon />
            <p>Like</p>
          </IconButton>
          <h4 style={divStyle}>{post?.likeCount}</h4>
        </div>

        <div className="delete_btn_container">
          <IconButton onClick={()=>dispatch(deletePost(post._id))}>
            <DeleteIcon />
          <p>Delete</p>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Post;
