const Post=require('../model/post.modal');


async function getMessage(req, res) {
  try {
    console.log("Get all posts")
    const data = await Post.find({});

   
    res.status(200).json(data);
  } catch (error) {
  
    res.status(401).json({ message: error.message });
  }
}
async function postMessage(req, res) {
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

module.exports = {
  postMessage,
  getMessage,
};
