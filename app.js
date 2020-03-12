//imports
const fastify = require("fastify")();
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");

// // mongo connect
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/" + `amiablydb`;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    // console.log(`MongoDB connected…`);
  })
  .catch(err => console.log(err));

// routes
fastify.register(require("fastify-swagger"), {
  routePrefix: "/documentation",
  swagger: {
    info: {
      title: "amiab.ly",
      description: "Backend API for the amiab.ly notepad service",
      version: "1.0.0"
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here"
    },
    host: "localhost",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"]
  },
  exposeRoute: true
});

userRoutes.forEach((route, i) => {
  fastify.route(route);
});
postRoutes.forEach((route, i) => {
  fastify.route(route);
});

//cors >:(
fastify.register(require("fastify-cors"), {});

//listener
const port = process.env.PORT || 3000;
const start = async () => {
  await fastify.listen(port, `0.0.0.0`, (err, address) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    // else {
    //   console.log("Listening to port " + port);
    // }
  });
  fastify.swagger();
};
start();
