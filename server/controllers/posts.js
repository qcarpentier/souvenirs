import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  console.log("Reaching server...");

  try {
    await newPost.save();
    console.log("Trying to save into Db");

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Something went wrong");

    res.status(404).json({ message: error.message });
  }
};
