// Created By: Mark Ortega <mark.ortega@ucdenver.edu>
// Basic Routing examples for HW2. /gets, /posts, /puts, /deletes, etc.

var express = require('express');
var app = express();
var port = 9000;

// No Methods allowed on /{base_path}
app.all('/', function(req, res) { 
	console.log('Ping Home - INVALID');
	res.status(405).send('HTTP method not allowed on /{base_path} ');
});

// ROUTES FOR /gets
app.get('/gets', function(req, res) {
   console.log('Ping /gets');
    res.send('You did it! You GET stuff here!');  
});

app.all('/gets', function(req, res) {
    console.log('Invalid User Request ');
    res.status(405).send('HTTP method not allowed on /gets');
});

// ROUTES FOR /posts
app.post('/posts', function(req, res) {
    console.log('Ping /posts');
    res.send('Awesome! You can POST stuff here!');
    //post logic goes here
});

app.all('/posts', function(req, res) {
    console.log('Invalid User Request');
    res.status(405).send('HTTP method not allowed on /posts');
});

// ROUTES FOR /puts
app.put('/puts', function(req, res) {
    console.log('Ping /puts');
    res.send('Welcome! You can PUT things here!');
    // PUT logic goes here
});

app.all('/puts', function(req, res) {
    console.log('Invalid User Input');
    res.send('HTTP method not allowed on /puts');
});

// ROUTES FOR /deletes
app.delete('/deletes', function(req, res) {
    console.log('Ping /deletes');
    res.send('DELETE it all!');
    // DELETE logic to follow
});

app.all('/deletes', function(req, res) {
    console.log('Invalid User Input');
    res.status(405).send('HTTP method not allowed on /deletes');
});

//ROUTES FOR /patchs
app.patch('/patchs', function(req, res) {
    console.log('Ping /patchs');
    res.send('You are here to PATCH!');
    // PATCH logic goes here
});

app.all('/patchs', function(req, res) {
    console.log('Invalid User Input');
    res.status(405).send('HTTP method not allowed on /patchs');
});

// ROUTES FOR /copys
app.copy('/copys', function(req, res) {
    console.log('Ping /copys');
    res.send('COPY');
});

app.all('/copys', function(req, res) {
    console.log('Invalid User Input');
    res.status(405).send('HTTP method not allowed on /copys');
});

var listener = app.listen(process.env.PORT || port, function() {
	var host = listener.address().address;
	var lPort = listener.address().port;
	console.log('server listening at http://%s%s', host, lPort);
    });


