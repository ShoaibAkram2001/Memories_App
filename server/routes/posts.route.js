const express = require("express");

const { getPosts, createPost,updatePost,deletePost,likePost} = require("../container/post.container");
const auth=require('../middleware/auth');
const app = express();

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.post("/",auth, createPost);
postRouter.patch('/:id',auth,updatePost);
postRouter.delete('/:id',auth,deletePost);
postRouter.patch('/:id/likePost',auth,likePost);

module.exports = postRouter;
