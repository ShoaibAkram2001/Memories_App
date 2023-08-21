
const express=require('express');

const app=express();

const postRouter=express.Router();


postRouter.get('/',(req,res)=>{
  res.send('Post route works');
})

/*postRouter.post('/',(req,res)=>{
  res.send('Post route works');
})*/

module.exports=postRouter;
