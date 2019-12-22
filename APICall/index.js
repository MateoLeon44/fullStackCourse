const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req,res) =>
{
    res.sendFile("index.html", {root:__dirname});
});

app.post("/", (req,res) =>
{
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var baseURL = "https://apiv2.bitcoinaverage.com/convert/global"

    var amount = req.body.amount;

    var options = {
        url: baseURL,
        method: "GET",
        //qs is from request, however the object is from the API parameters
        qs: {
            from:crypto,
            to:fiat,
            amount: amount
        }
    }

    request(options, (error,response,body) =>
    {
        var data = JSON.parse(body);

        var price = data.price;

        var currentDate = data.time;

        res.write("<p> The current Date is: " + currentDate + "</p>")
        res.write("<h1> " + amount + crypto + " is " + price + fiat + "</h1>")
        res.send
    });
});

app.listen(3000, ()=>
{
    console.log("Listening in 3000");
})