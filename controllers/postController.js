// External Dependancies
const boom = require("boom");

// Get Data Models
const Post = require("../models/Posts");

// Get all users
exports.getPosts = async (req, reply) => {
  try {
    const posts = await Post.find();
    return posts;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single user by ID
exports.getSinglePost = async (req, reply) => {
  try {
    const id = req.params.id;
    const posts = await Post.findById(id);
    return posts;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new user
exports.addPost = async (req, reply) => {
  try {
    const posts = new Post(req.body);
    return posts.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing user
exports.updatePost = async (req, reply) => {
  try {
    const id = req.params.id;
    const posts = req.body;
    const { ...updateData } = posts;
    const update = await Post.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a user
exports.deletePost = async (req, reply) => {
  try {
    const id = req.params.id;
    const posts = await Post.findByIdAndRemove(id);
    return posts;
  } catch (err) {
    throw boom.boomify(err);
  }
};
