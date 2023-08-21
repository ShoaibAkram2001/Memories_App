const { Post } = require("../model/post.modal");

async function getMessage(req, res) {
  try {
    const data = await Post.find({});

    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}
async function postMessage(req, res) {
  try {
    const post = req.body;
    const newPost = await Post.save(post);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

module.exports = {
  postMessage,
  getMessage,
};
