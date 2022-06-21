// Create an express application
const app = require("express")();
// JSON to parse the application/json body types
const { json, static } = require("express");

// Set default view engine to PUG
app.set("view engine", "pug");

// Set assets folder as static resource
app.use(static("assets"));

// Use json() to parse body
app.use(json());

// The status route
app.get("/status", function (req, res) {
  res.status(200).send({
    status: "OK",
    clientIp: req.ip,
    query: req.query,
  });
});

// HTTP Status Code
// 2xx - Success 200
// 3xx - Redirect
// 4xx - Bad Request/Client Error
// 5xx - Internal Server Error

// The home route
app.get("/", (__, res) => {
  const data = {
    title: "Zensark Ecom",
    message: "Welcome to the future",
    actionUrl: "https://www.microsoft.com",
    day: 3,
    from: 1,
    to: 10,
    names: ["Markandey", "John", "Robert", "Meenakshi"],
    user: {
      name: "Pug",
      age: 1,
    },
  };
  res.status(200).render("home", data);
});

// Start the express application
app.listen(1234, function () {
  console.log(`Server is running @ http://localhost:1234`);
});
