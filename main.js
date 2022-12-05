const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
const staticpath = path.join(__dirname, "/");

var antares = require("antares-http");

app.use(express.static(staticpath));

// app.get("/", function (req, res) {
//   res.sendFile(staticpath + "/login.html");
// });

app.get("/", function (req, res) {
  res.sendFile(staticpath + "/tiket.html");
});

app.get("/", function (req, res) {
  res.sendFile(staticpath + "/bayar dana.html");
});

app.get("/", function (req, res) {
  res.sendFile(staticpath + "/bayar gopay.html");
});

app.get("/", function (req, res) {
  res.sendFile(staticpath + "/bayar ovo.html");
});

app.get("/api", function (req, res) {
  antares.setAccessKey("61827c1181bf53fb:887879745eefc30e");
  antares.get("Markir", "dataID").then(function (response){
    const data = response.content;
    res.json(data);
  });
});

app.listen(port);