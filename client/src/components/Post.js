import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import "../styles/Post.css";

function Post() {
  return (
    <div className="Post">
      <div className="main_container_post">
        <img src="https://www.shutterstock.com/image-photo/profile-view-portrait-young-guy-260nw-2247042155.jpg" />
        <div className="Post_Image_Content">
          <div className="Post_Image_Text">
            <h4>Post Creator</h4>
            <p>Create At</p>
          </div>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      <div className="post_middle_content">
        <p>Hash Tags</p>
        <h2>Title of Post</h2>
        <p className="message_container">This is Messesge</p>
      </div>

      <div className="post_footer">
        <div className="like_btn_container">
          <IconButton>
            <ThumbUpIcon />
          </IconButton>

          <p>Like</p>
        </div>

        <div className="delete_btn_container">
          <IconButton>
            <DeleteIcon />
          </IconButton>

          <p>Delete</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
