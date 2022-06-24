// Create an express application
const app = require("express")();
// JSON to parse the application/json body types
const { json, urlencoded, static } = require("express");
const { ObjectId } = require("mongodb");

const { find, insert, insertMany, findOne, updateOne } = require("./db");

// Set default view engine to PUG
app.set("view engine", "pug");

// Set assets folder as static resource
app.use(static("assets"));

// Use json() to parse body
app.use(json());
// Use urlencoded() to parse form body
app.use(urlencoded({ extended: true }));

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
app.get("/", async (__, res) => {
  try {
    const products = await find("products", {});
    const profile = await findOne("profile", {});
    res.status(200).render("home", { profile, products });
  } catch (err) {
    res.status(200).render("home", { error: err });
  }
});

app.get("/profile", async (__, res) => {
  try {
    const profile = await findOne("profile", {});
    res.status(200).render("profile", { profile });
  } catch (err) {
    res.status(200).render("profile", { error: err });
  }
});

app.post("/profile", async (req, res) => {
  const { _id, name, avatar } = req.body;
  try {
    const data = await updateOne("profile", _id, { name, avatar });
    if (data && data.modifiedCount) {
      res.redirect("/profile");
    } else {
      res.status(200).render("profile", { error: JSON.stringify(data) });
    }
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/product", async (req, res) => {
  try {
    const data = await insert("products", req.body);
    if (data && data.insertedId) {
      res.status(200).send({ data });
    } else {
      res.status(500).send({ data });
    }
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/products", async (req, res) => {
  try {
    const data = await insertMany("products", req.body);
    if (data && data.insertedCount) {
      res.status(200).send({ data });
    } else {
      res.status(500).send({ data });
    }
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post("/newaddress", async (req, res) => {
  const { _id, ...address } = req.body;
  try {
    const profile = await findOne("profile", { _id: new ObjectId(_id) });
    if (profile) {
      address.id = new ObjectId();
      profile.addresses.push(address);
      const data = await updateOne("profile", _id, profile);
      if (data && data.modifiedCount) {
        res.redirect("/profile");
      } else {
        res.status(200).render("profile", { error: JSON.stringify(data) });
      }
    }
  } catch (err) {
    res.status(200).render("profile", { error: JSON.stringify(err) });
  }
});

app.post("/address", async (req, res) => {
  const { _id, addressId, ...newAddress } = req.body;
  try {
    const profile = await findOne("profile", { _id: new ObjectId(_id) });
    if (profile) {
      const oldAddress = profile.addresses.find((add) => {
        return new ObjectId(addressId).equals(add.id);
      });
      oldAddress.line1 = newAddress.line1;
      oldAddress.city = newAddress.city;
      oldAddress.postcode = newAddress.postcode;
      oldAddress.country = newAddress.country;

      const data = await updateOne("profile", _id, profile);
      if (data && data.modifiedCount) {
        res.redirect("/profile");
      } else {
        res.status(200).render("profile", { error: JSON.stringify(data) });
      }
    }
  } catch (err) {
    res.status(200).render("profile", { error: JSON.stringify(err) });
  }
});

// Start the express application
app.listen(1234, function () {
  console.log(`Server is running @ http://localhost:1234`);
});
