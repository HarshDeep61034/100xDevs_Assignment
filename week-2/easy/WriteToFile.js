const fs = require("fs");
fs.writeFile(
  "./test.txt",
  "Lol i just wrote this in file",
  "utf8",
  (err, data) => {
    console.log("Done work!!");
  },
);
