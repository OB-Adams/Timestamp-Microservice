let express = require("express");
let app = express();

require('dotenv').config();

let cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

const handler = (req, res) => {
  const { date } = req.params;

  if (!date) {
    const currentTimestamp = Date.now();
    return res.json({
      unix: currentTimestamp,
      utc: new Date(currentTimestamp).toUTCString()
    });
  }

  let parsedDate;
  if (!isNaN(date)) {
    // Handling numeric timestamps
    const unixTimeStamp = date.length === 13 ? Number(date) : Number(date) * 1000;
    parsedDate = new Date(unixTimeStamp);
  } else {
    parsedDate = new Date(date);
  }

  if (isNaN(parsedDate.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  let unixTimeStamp = parsedDate.getTime(); 
  return res.json({
    unix: unixTimeStamp,
    utc: parsedDate.toUTCString()
  });
};

app.get("/api/:date?", handler);

let listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});