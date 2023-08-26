const express = require("express");

const { postMessage, getMessage } = require("../container/post.container");

const app = express();

const postRouter = express.Router();

postRouter.get("/", getMessage);
postRouter.post("/", postMessage
);

module.exports = postRouter;
