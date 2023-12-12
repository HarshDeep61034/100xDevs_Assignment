const fs = require("fs");
let arr = [];
const newPromise = new Promise((resolve, reject) => {
  fs.readFile("./sample.txt", "utf-8", (err, data) => {
    resolve(data);
  });
});

newPromise.then((res) => {
  arr = res.split(/\s+/);
  res = "";
  res = arr.join(" ");
  write(res);
});

function write(data) {
  fs.writeFile("./sample.txt", data, "utf-8", () => {
    console.log("Work Done!");
  });
}
