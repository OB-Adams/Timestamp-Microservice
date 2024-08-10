// index.js
// where your node app starts

// init project
let express = require("express");
let app = express();

require('dotenv').config()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public/dist/assets"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/dist/assets/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

const handler = (req, res) => {
  const { date } = req.params;

  if (!isNaN(date)) {
    // Handling timestamps
    const unixTimeStamp =
      date.length === 13 ? Number(date) : Number(date) * 1000;
    return res.json({
      unix: Math.floor(unixTimeStamp / 1000), // Return in seconds
      utc: new Date(unixTimeStamp).toUTCString(),
    });
  } else {
    // Handling date strings
    let parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.json({ error: "Invalid Date" });
    }
    let unixTimeStamp = Math.floor(parsedDate.getTime() / 1000);
    return res.json({ unix: unixTimeStamp, utc: parsedDate.toUTCString() });
  }
};

app.get("/api/:date", handler);

// Listen on port set in environment variable or default to 3000
let listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
