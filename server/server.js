
const morgan=require('morgan');
const express=require('express');
const cors= require('cors');
const dotenv=require('dotenv')
const bodyParser=require('body-parser');
const postRouter=require('./routes/posts.route');
const mongoose=require('mongoose');
dotenv.config();
const PORT= process.env.PORT;


const app =express();


app.use(morgan('combined'));
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
}));

app.use(express.json());
app.use('/posts',postRouter);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  });
 mongoose.connection.once('error', () => {
    console.log('Connection error with mongodb');
  });

mongoose.connect(process.env.MONGO_URL).then(()=>app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
}))
