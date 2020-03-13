// Import our Controllers
const userController = require("../controllers/userController");

const routes = [
  {
    method: "GET",
    url: "/users",
    handler: userController.getUsers
  },
  {
    method: "GET",
    url: "/users/",
    handler: userController.getSingleUser
  },
  {
    method: "POST",
    url: "/users",
    handler: userController.addUser
  },
  {
    method: "PUT",
    url: "/users/",
    handler: userController.updateUser
  },
  {
    method: "DELETE",
    url: "/users/:id",
    handler: userController.deleteUser
  },
  {
    method: "GET",
    url: "/users/seed",
    handler: userController.addBySeeding
  }
];

module.exports = routes;
