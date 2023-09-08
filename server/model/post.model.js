const { mongoose } = require("mongoose");

const messageSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
 likes: {
    type:[String],
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("Post", messageSchema);
 module.exports=Post;
