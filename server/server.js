const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

app.use("/", function(req, res) {
  res.sendFile(path.join(__dirname, ".client/public/index"));
});

app.use("/userprofile", function(req,res) {
  res.sendFile(path.join(__dirname, "./client/src/pages/Profile/index"));
});

app.use("/portfolio", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/src/pages/Portfolio/index"));
});