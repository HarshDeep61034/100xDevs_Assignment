const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, data) => {
    const taskData = JSON.parse(data) || [];
    const elements = taskData.map((item, index) => {
      return `
    <div>
      <h1>${index + 1}. ${item.task}</h1>
      <p>${item.description}</p>
    </div>
  `;
    });
    const str = elements.join(" ");
    res.send(str);
  });
});

app.post("/add", (req, res) => {
  const reqData = req.body;
  fs.readFile("./data.json", "utf-8", (err, data) => {
    let taskData = JSON.parse(data) || [];
    taskData.push({ task: reqData.task, description: reqData.description });
    let parsedData = JSON.stringify(taskData);
    fs.writeFile("./data.json", parsedData, "utf-8", () => {
      res.send(`<h1>Task Added</h1>`);
    });
  });
});

app.delete("/delete", (req, res) => {
  const index = req.query.index;
  console.log(index);
  fs.readFile("./data.json", "utf-8", (err, data) => {
    const parsedData = JSON.parse(data);
    parsedData.splice(index - 1, 1);
    const stringedData = JSON.stringify(parsedData);
    fs.writeFile("./data.json", stringedData, "utf-8", () => {
      res.send("Task Deleted");
    });
  });
});

app.listen(PORT, () => console.log(`Listening at PORT: ${PORT}`));
