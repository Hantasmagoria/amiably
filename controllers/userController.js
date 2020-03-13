// External Dependancies
const boom = require("boom");

// Get Data Models
const Users = require("../models/users");
// import { Users } from "../models/users";

// Get all users
exports.getUsers = async (req, reply) => {
  try {
    const users = await Users.find();
    return users;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single user by ID
exports.getSingleUser = async (req, reply) => {
  try {
    const id = req.body;
    const user = await Users.findOne(id);
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Seed the database
exports.addBySeeding = async (req, reply) => {
  try {
    const user = new Users({ username: "admin", password: "password" });
    return user.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new user
exports.addUser = async (req, reply) => {
  try {
    console.log(req.body);
    const user = new Users(req.body);
    return user.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing user
exports.updateUser = async (req, reply) => {
  try {
    // console.log(req.body);

    // const id = JSON.parse(req.body).username;
    // const user = JSON.parse(req.body);
    // const { ...updateData } = user;
    const id = "admin";
    const updateData = { url: "7xlf305f", title: "My First Post" };

    const update = await Users.findOneAndUpdate(id, posts.push(updateData), {
      new: true
    });
    console.log(update);
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a user
exports.deleteUser = async (req, reply) => {
  try {
    const id = req.params.id;
    const user = await Users.findByIdAndRemove(id);
    return user;
  } catch (err) {
    throw boom.boomify(err);
  }
};
