const app = require("express")();
app.get("/", function (req, res) {
  res.status(200).send({
    status: "OK",
    clientIp: req.ip,
  });
});

app.listen(1234, function () {
  console.log(`Server is running @ http://localhost:1234`);
});
