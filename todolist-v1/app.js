const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const date = require(__dirname + "/date.js")

const app = express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/", (req, res) => {
  day = date.getDate()
  res.render("list", {
    listTitle: day,
    newListItem: item
  });
});

var item = ["Buy food", "Cook food", "Eat food"];



app.post("/", (req, res) => {
  let myItem = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(myItem)
    res.redirect("/work")
  } else {
    item.push(myItem);
    res.redirect("/");
  }

});

let workItems = []

app.get("/work", (req, res) => {
  res.render("list", {
    listTitle: "Work list",
    newListItem: workItems
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});