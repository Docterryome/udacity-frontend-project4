var path = require('path')
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const AYLIENTextAPI = require('aylien_textapi');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});




const app = express()

app.use(express.static('dist'))
app.use(bodyParser.json());
app.use(cors());
console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(process.env.NODE_PORT, function () {
    console.log(`Example app listening on port ${process.env.NODE_PORT}`)
})

app.post('/entity', function (req, res) {
    textapi.entityLevelSentiment({
        'text': req.body.input
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response);
        }
      });
})
