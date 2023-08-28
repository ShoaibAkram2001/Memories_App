const {mongoose}=require('mongoose');
const Post=require('../model/post.modal');
const {ObjectId}=require('mongodb');


async function getPosts(req, res) {
  try {
    console.log("Get all posts")
    const data = await Post.find({});

   
    res.status(200).json(data);
  } catch (error) {
  
    res.status(401).json({ message: error.message });
  }
}
async function createPost(req, res) {
console.log('Req arrived in postMessage container');

  try {


    const post = req.body;


    console.log("This is Post object :",post);
   /* const newPost = new Post(post);
    await Post.save();
*/
    Post.create(post)
  .then(createdPost => {
    console.log('New post created:', createdPost);
    res.status(201).json(post);
  })
  .catch(error => {
    console.error('Error creating post:', error);
    res.status(409).json({ message: error.message });
  });

  } catch (error) {
    console.error('Error in postMessage:', error.message);

  }
}


async function updatePost(req,res){

  const {id}=req.params;
  const {post}=req.body;

  const { title, message, creator, selectedFile, tags } = req.body;
  if(!ObjectId.isValid(id))
    return res.status(404).json({"message":"No post find with this id"});

    const updatedPost={ title,message,creator,selectedFile,tags,_id:id}

    await Post.findByIdAndUpdate(id,updatedPost,{new:true});

    res.json(updatedPost);

}


async function deletePost(req,res){

  const {id}=req.params;
  if(!ObjectId.isValid(id))
 {
  console.log('not validid',id);
  return res.status(404).json({message:"No post find with this id"});
  
 } 
  console.log('delete post by this id',id);

  await Post.findByIdAndRemove(id);

  res.json({
    message:"Post successfully deleted",
  }
  )


}

async function likePost(req,res){

  const {id}=req.params;

  const {title, message, creator, selectedFile, tags}=req.body;

  if(!ObjectId.isValid(id))
  {return res.status(404).json({message:"No post found with this id",});
  }

  const post = await Post.findById(id);
  
   const updatedPost = await Post.findByIdAndUpdate(id, { likeCount: post?.likeCount + 1 }, { new: true });
  
  res.json(updatedPost);
}




module.exports = {
  createPost,
   getPosts,
   updatePost,
   deletePost,
   likePost,
};
