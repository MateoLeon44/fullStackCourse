const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

app.listen(process.env.PORT || 3000, ()=>
{
    console.log("Server is running on port dynamic port")
});

app.get('/', (req,res) =>
{
    res.sendFile('signup.html', {root:__dirname})
});

app.post('/', (req,res)=>
{
    var first = req.body.firstName;
    var last = req.body.lastName;
    var email = req.body.email;

    var baseURL = "https://us4.api.mailchimp.com/3.0/lists/d28470d3bc"

    var data =  {
        members:[
            {
            email_address: email,
            status:"subscribed",
            merge_fields: {
                FNAME: first,
                LNAME: last
                }
            }
        ]
    }

    var JsonData = JSON.stringify(data);

    var options = 
    {
        url: baseURL,
        method: "POST",
        headers:{
            "Authorization": "Mashu c339fb2ebce2cf4b3915f951a90d4e72-us4"
        },
        body: JsonData
        
    }

    app.post("/failure", (req,res)=>
    {
        res.redirect("/")
    });

    request(options, (error,response,body) =>
    {
        if(error)
        {
            res.sendFile("failure.html", {root:__dirname})
        }
        else{
            if(response.statusCode === 200)
            {
                res.sendFile("success.html", {root:__dirname})
            }
            else{
                res.sendFile("failure.html", {root:__dirname})
            }
        }
    });
});

//APi key
//c339fb2ebce2cf4b3915f951a90d4e72-us4

//List id
//d28470d3bc