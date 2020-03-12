// Import our Controllers
const postController = require("../controllers/postController");

const routes = [
  {
    method: "GET",
    url: "/posts",
    handler: postController.getPosts
  },
  {
    method: "GET",
    url: "/posts/:id",
    handler: postController.getSinglePost
  },
  {
    method: "POST",
    url: "/posts",
    handler: postController.addPost
  },
  {
    method: "PUT",
    url: "/posts/:id",
    handler: postController.updatePost
  },
  {
    method: "DELETE",
    url: "/posts/:id",
    handler: postController.deletePost
  }
];

module.exports = routes;
