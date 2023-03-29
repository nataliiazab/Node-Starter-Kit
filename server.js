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

/*Lesson 2  */

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "007",
    artistName: "JB",
    collectionName: "Just some text",
    artworkUrl100:
      "http://is1.mzstatic.com/not-real-one-album",
    releaseDate: "2023-03-29T07:00:00Z",
    primaryGenreName: "node",
    url: "https://google.com/Beyonce",
  }
];

app.get("/albums", function (req, res) {
  res.send(albumsData);
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
