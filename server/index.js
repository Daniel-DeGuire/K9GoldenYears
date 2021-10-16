// Importing and creating modules

const express = require("express");
const app = express();

// Using Middleware - declaring Function

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

// Using Middleware - Body-Parsing

app.use(express.json());
app.use(logging);

// Creating route handlers

app
  .route("/status")
  .get((request, response) => {
    response.status(200).json({ message: "Service healthy" });
  })
  .post((request, response) => {
    response.json({ requestBody: request.body });
  });

app
  .route("/dogs")
  .get((request, response) => {
    // handle GET request
    response.send(JSON.stringify({ message: "All dogs" }));
  })
  .post((request, response) => {
    response.send(JSON.stringify({ message: "Submitted Dogs" }));
  });

app.route("/users/:id").get((request, response) => {
  // express adds a "params" Object to requests
  const id = request.params.id;
  // handle GET request for post with an id of "id"
  response.send(JSON.stringify({ user_id: id }));
});

// Port Configuration

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
