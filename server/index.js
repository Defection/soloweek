var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');
var socket = require('socket.io');
var axios = require('axios');
var bodyParser = require('body-parser');
var db = require('../database-mongo');


var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())


app.post('/email', (req,res)=>{
  var data = req.body 
  console.log(data)
  var rootUrl = 'https://api.elasticemail.com/v2/email/send?apikey=11247b43-8015-4e70-b075-4327381d0e0f'
  var subject = '&subject=' + data.subject
  var sender = '&from=' + data.email
  var senderName = '&fromName' + data.name
  var receiver = '&to=eshum89@gmail.com'
  var message = '&bodyText=' + data.message
  var isTransactional = '&isTransactional=true'

  var URL = rootUrl + subject + sender + senderName + receiver + message + isTransactional

  axios.post(URL)
  .then((response) => {
    console.log('sent')
    console.log(response)
    res.send(response.data)
  })
  .catch((err) => {
    console.log(err)
  })

  db.save(data)
  .then((response)=>{
    console.log(response)
  })



})

const port = process.env.PORT || 8080

var server = app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});

// https://api.elasticemail.com/v2/email/send?apikey=11247b43-8015-4e70-b075-4327381d0e0f&subject=TestingAPI&from=eshum89@gmail.com&to=eshum89@gmail.com&bodyText=helloworldhellworld&isTransactional=true