const express = require(`express`);
const app = express();

// app.get("/", function (req, res) {
//   res.send("Yay Node!");
// });

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/chocolate", function (req, res) {
  searchQuery = req.query.amount;
  res.send(
    "You have requested the following number of chocolate bars " + searchQuery
  );
});

app.get("/node", function (req, res) {
  res.send("node");
});

app.get("/codeyourfuture", function (req, res) {
  res.send("CYF:)");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
