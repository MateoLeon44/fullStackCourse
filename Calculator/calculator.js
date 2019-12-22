const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//Extended is necessary por body parser for it to use
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res) =>
{
    res.sendFile("index.html", {root: __dirname})
});

app.post("/", (req,res) =>
{
    /* Results are Strings so I have to convert them
    */
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1+num2;

    res.send("Result is: " + result)
});

app.get("/bmicalculator", (req,res) =>
{
    res.sendFile("bmiCalculator.html", {root:__dirname})
});

app.post("/bmiCalculator", (req,res)=>
{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    
    var bmi = weight / (height * height);

    res.send("Your BMI is: " + bmi);
});

app.listen(3000, function()
{
    console.log("listening on 3000");
});