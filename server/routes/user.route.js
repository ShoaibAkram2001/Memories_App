
const {signin,signup}=require('../container/user.container');
const express=require('express');

const userRouter=express.Router();

userRouter.post('/signin',signin);
userRouter.post('/signup',signup);

module.exports=userRouter;