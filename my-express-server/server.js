const express = require('express');
const path = require('path')
const app = express();

/*
First parameter is the location, in this case the home root
The second parameter is a callback function with two parameters,
the request gives me info of the request to the browser
(like the route accessed and the lang supported by the browser),
the second parameter can send the response of getting to that location
*/
app.get('/', function(req,res)
{
    res.sendFile("index.html", {root: '../drum'});
});

app.get('/about', function(req,res)
{
    res.send("<h1>Mateo León</h1>")
});


//Listen on a specific port for our application
//Function is the callback function
app.listen(3000, function()
{
    console.log("Listening in 3000")
});