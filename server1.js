var express = require('express');
var app = express();



app.get('/', function(req, res)
{
    res.send('<h1>express works!</h1>');
});

app.listen(3000, function ()
{
    
    console.log('server listening to port 3000');
});