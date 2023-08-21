const mongoose=require('mongoose');
const express=require('express');
const cors=require('cors');
const postRouter=require('./routes/posts.route');

const PORT= process.env.PORT||5000;
const MONGO_URL='mongodb+srv://shoaib:shoaib123@cluster0.6grzftm.mongodb.net/?retryWrites=true&w=majority'

const app =express();



app.use('/posts',postRouter);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  });
 mongoose.connection.once('error', () => {
    console.log('Connection error with mongodb');
  });

mongoose.connect(MONGO_URL).then(()=>app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
}))
